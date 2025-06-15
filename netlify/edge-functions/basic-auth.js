export default async (request, context) => {
  const auth = request.headers.get("authorization");

  const expected = "Basic " + btoa("masa:3939");
  if (auth !== expected) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="FamilyTreehouse"',
      },
    });
  }

  return context.next();
};
