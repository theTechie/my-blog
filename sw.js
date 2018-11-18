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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-f67c33673702329fe5ea.js"
  },
  {
    "url": "app-a62563401937c60eb2ef.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-3254da32e5c411d35f0b.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8fc453729d7cd5c7a5bdf89d42837863"
  },
  {
    "url": "2.5bb4825c1a314648bdfd.css"
  },
  {
    "url": "0-e44e4a592e82b02d56df.js"
  },
  {
    "url": "1-3c05ab3df80a6dcede44.js"
  },
  {
    "url": "2-e65b3894de725057781e.js"
  },
  {
    "url": "component---src-pages-404-jsx-7cc86239415d72cc799e.js"
  },
  {
    "url": "static/d/957/path---404-html-516-62a-M4F9we4oErTOOTPUNY5HW2DEPA.json",
    "revision": "6e92f3dbeb3787ab9c076b4c6cc533f5"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^([^.?]*|[^?]*\.([^.?]{5,}|html))(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/(\.js$|\.css$|\/static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');
// noop
"use strict";