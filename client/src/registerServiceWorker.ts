const isLocalhost = Boolean(
  window.location.hostname === 'localhost'
    || window.location.hostname === '[::1]'
    || window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
)

export const registerServiceWorker = (): void => {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(
      process.env.PUBLIC_URL!,
      window.location.toString()
    )
    if (publicUrl.origin !== window.location.origin) {
      return
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      (!!isLocalhost)
        ? checkValidServiceWorker(swUrl)
        : registerValidSW(swUrl)
    })
  }
}

function registerValidSW (swUrl: string): void {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration): void => {
      registration.onupdatefound = (): void => {
        const installingWorker = registration.installing
        if (installingWorker) {
          installingWorker.onstatechange = (): void => {
            if (installingWorker.state === 'installed') {
              (navigator.serviceWorker.controller)
                ? console.log('New content is available; please refresh.')
                : console.log('Content is cached for offline use.')
            }
          }
        }
      }
    })
    .catch((error): void =>
      console.error('Error during service worker registration:', error)
    )
}

function checkValidServiceWorker (swUrl: string): void {
  fetch(swUrl)
    .then((response) => {
      if (
        response.status === 404 ||
        response.headers.get('content-type')!.indexOf('javascript') === -1
      ) {
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload()
          })
        })
      } else {
        registerValidSW(swUrl)
      }
    })
    .catch(() =>
      console.log('No internet connection found. App is running in offline mode.')
    )
}

export function unregister (): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) =>
      registration.unregister()
    )
  }
}
