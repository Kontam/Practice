export function initializeWorker() {
  if (typeof window === 'undefined') return;
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('/sw.js')
        .then(function (registration) {
          console.log('serviceWorker done scope: ', registration.scope);
          registration.pushManager.getSubscription().then((subscription) => {
            const isSubscribed = !(subscription === null);

            if (isSubscribed) {
              console.log('User is subscribed');
            } else {
              console.log('User is not subscribed');
            }
          });
        })
        .catch((e) => console.error(e));
    });
  }
}
