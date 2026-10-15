export async function onRequest(context) {
  const { request, env } = context;

  const authorization = request.headers.get("Authorization");

  if (!authorization) {
    return unauthorized();
  }

  const [scheme, encoded] = authorization.split(" ");

  if (scheme !== "Basic" || !encoded) {
    return unauthorized();
  }

  let decoded;

  try {
    decoded = atob(encoded);
  } catch {
    return unauthorized();
  }

  const colonIndex = decoded.indexOf(":");

  if (colonIndex === -1) {
    return unauthorized();
  }

  const username = decoded.substring(0, colonIndex);
  const password = decoded.substring(colonIndex + 1);

  if (
    username !== env.BASIC_USER ||
    password !== env.BASIC_PASS
  ) {
    return unauthorized();
  }

  return context.next();
}

function unauthorized() {
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate":
        'Basic realm="UK Manual Download", charset="UTF-8"',
      "Cache-Control": "no-store"
    }
  });
}
