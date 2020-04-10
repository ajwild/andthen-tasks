addEventListener('fetch', event => {
  event.respondWith(handleRequest())
})

// @ts-ignore: Allow multiple functions
async function handleRequest() {
  return new Response('Hello world!', {
    headers: { 'content-type': 'text/plain' },
  })
}
