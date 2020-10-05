importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

workbox.precaching.precacheAndRoute([
  {
    "url": "/sounds/30_laune1.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/34_laune2.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/50_laune3.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/36_laune4.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/35_laune5.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/37_laune6.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/38_laune7.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/39_laune8.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/40_laune9.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/feier_bis_ich_kotze.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/supergeil.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/love_is_in_the_air.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/einfach_einfach_und_einfach.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/super_3x.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/what_a_weather_wow.mp3",
    "revision": "kfwabymw.p2p"
  },
  {
    "url": "/sounds/31_laune10.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/41_laune11.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/32_laune12.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/33_laune13.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/47_laune14.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/43_laune15.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/44_laune16.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/45_laune17.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/46_laune18.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/42_laune19.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/48_laune20.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/51_laune21.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/49_laune22.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/12_laune23.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/11_laune24.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/28_laune25.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/29_laune26.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/27_laune27.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/53_laune28.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/58_laune29.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/52_laune30.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/56_laune31.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/57_laune32.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/55_laune33.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/54_laune34.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/13_together.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/14_1234.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/15_fuckme.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/16_crazy.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/17_10000.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/18_bwiu.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/19_athmo.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/20_gocrazy.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/21_wasnlos.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/22_wobinich.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/23_redalert.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/24_ichverab.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/25_feelinfree.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/26_wirfeiern.mp3",
    "revision": "kfwabymo.p2"
  },
  {
    "url": "/sounds/continue_the_mission.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/sounds/party_with_us_us_us.mp3",
    "revision": "kfwabyms.p2e"
  },
  {
    "url": "/fonts/Keania_One/KeaniaOne-Regular.woff2",
    "revision": 1
  },
  {
    "url": "/fonts/Keania_One/KeaniaOne-Regular.ttf",
    "revision": 1
  }
], {
  "cacheId": "the-shrine-ng-prod",
  "directoryIndex": "/"
})

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('/_nuxt/'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkFirst ({}), 'GET')
