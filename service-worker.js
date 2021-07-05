/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "42e57b27f2127a4fbe6fd9603bcf6269"
  },
  {
    "url": "assets/css/0.styles.fccc7569.css",
    "revision": "e592eadfe39f993a1b1b6f6655b15804"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c1dfde6a.js",
    "revision": "c2c9050a06b66afbe344b7e2585580e8"
  },
  {
    "url": "assets/js/11.c2c17a39.js",
    "revision": "6be146ba8c04cb38c1770be57c55a78f"
  },
  {
    "url": "assets/js/12.56666a15.js",
    "revision": "8343e626ada864a3428343783174e14f"
  },
  {
    "url": "assets/js/13.a255e733.js",
    "revision": "e88bd5440bc662f102f11d53c952e45a"
  },
  {
    "url": "assets/js/2.b51c79c5.js",
    "revision": "e32d35d27c685e3799b7116e87ffec7d"
  },
  {
    "url": "assets/js/3.d3875e51.js",
    "revision": "cd89d39a5c7fb04741666a3fc22537a4"
  },
  {
    "url": "assets/js/4.e5c74ef3.js",
    "revision": "d811b46a4c5fe3011534bc0de8613532"
  },
  {
    "url": "assets/js/5.38d99c6f.js",
    "revision": "698a1729f4142cdc6db70114ab344864"
  },
  {
    "url": "assets/js/6.8b1bcb61.js",
    "revision": "e5982a6cd0b91aa86970b255974bd395"
  },
  {
    "url": "assets/js/7.50f14ce6.js",
    "revision": "5a2fb11a2bd080d54ddc52888b34bbb7"
  },
  {
    "url": "assets/js/8.e410c24f.js",
    "revision": "19f57ac988061a40810164434c8a564f"
  },
  {
    "url": "assets/js/9.b9d19054.js",
    "revision": "d9e7208c7053236c8558e82a89f6c3c7"
  },
  {
    "url": "assets/js/app.5fd8ec0f.js",
    "revision": "4a7494a5cac6aeaa28b567df9c5d22c5"
  },
  {
    "url": "help-me/index.html",
    "revision": "27264a7dc1fd2e98610955f3f8897eb1"
  },
  {
    "url": "index.html",
    "revision": "0a8829f031d30b51a0ee2cdebe717efa"
  },
  {
    "url": "menstruation-info/index.html",
    "revision": "191fcee9c3d0bc152df040e8dfe75cab"
  },
  {
    "url": "need-do/index.html",
    "revision": "a7cb4e4979887c3247bb96cdce882594"
  },
  {
    "url": "zh-tw/index.html",
    "revision": "1fbb5d9b58527276498a8dd510aaf5f4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
