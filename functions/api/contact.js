const recipient = 'proyectos.gyrweb@gmail.com';
const projectTypes = {
  diseno: 'Diseño Web a Medida',
  ecommerce: 'E-Commerce / Tienda Online',
  'rediseño': 'Rediseño y Optimización SEO',
  especial: 'Proyecto Especial / SaaS'
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

function encodeBase64(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';

  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }

  return btoa(binary);
}

function text(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function onRequestPost({ request, env }) {
  if (!env.GMAIL_CLIENT_ID || !env.GMAIL_CLIENT_SECRET || !env.GMAIL_REFRESH_TOKEN) {
    return json({ error: 'El envío por Gmail todavía no está configurado.' }, 503);
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'La solicitud no tiene un formato válido.' }, 400);
  }

  const name = text(data.name, 120);
  const email = text(data.email, 254);
  const phone = text(data.phone, 40) || 'No indicado';
  const projectType = projectTypes[text(data.projectType, 30)];
  const details = text(data.message, 5000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !projectType || !details) {
    return json({ error: 'Revisa los datos obligatorios del formulario.' }, 400);
  }

  try {
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: env.GMAIL_CLIENT_ID,
        client_secret: env.GMAIL_CLIENT_SECRET,
        refresh_token: env.GMAIL_REFRESH_TOKEN,
        grant_type: 'refresh_token'
      })
    });

    if (!tokenResponse.ok) {
      return json({ error: 'No se pudo autorizar el envío con Gmail.' }, 502);
    }

    const { access_token: accessToken } = await tokenResponse.json();
    const body = [
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Teléfono: ${phone}`,
      `Proyecto: ${projectType}`,
      '',
      `Detalles: ${details}`
    ].join('\n');
    const rawMessage = [
      `To: ${recipient}`,
      `Reply-To: ${email}`,
      `Subject: =?UTF-8?B?${encodeBase64('Nueva solicitud de cotización web')}?=`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: base64',
      '',
      encodeBase64(body)
    ].join('\r\n');
    const raw = encodeBase64(rawMessage)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    const sendResponse = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ raw })
    });

    if (!sendResponse.ok) {
      return json({ error: 'Gmail no pudo enviar el mensaje. Inténtalo más tarde.' }, 502);
    }

    return json({ sent: true });
  } catch {
    return json({ error: 'No se pudo enviar el mensaje. Inténtalo más tarde.' }, 502);
  }
                   }
