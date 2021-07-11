
export function initializeWorker() {
  if(typeof window === 'undefined') return;
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('serviceWorker done scope: ', registration.scope);
      }).catch((e) => console.error(e));
    });
  }
}
