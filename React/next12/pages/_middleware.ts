export function middleware(req, ev) {
  console.log("I am middleware", req);
  return new Response('Hello, world!')
}
