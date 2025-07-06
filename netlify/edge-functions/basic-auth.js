export default async (request, context) => {
  const auth = request.headers.get("authorization");

  const expected = "Basic " + btoa("mn:39");
  if (auth !== expected) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="uchinokiroku"',
      },
    });
  }

  return context.next();
};
