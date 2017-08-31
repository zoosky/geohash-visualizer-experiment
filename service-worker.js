/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/font-roboto/roboto.html","8b9218ffd40ebb430e7f55674cf55ffd"],["bower_components/google-apis/google-maps-api.html","6249af7af609a6efde092ab38e6808f1"],["bower_components/google-map/google-map-directions.html","60093fe811ec64557a51fd1cfbc68e7d"],["bower_components/google-map/google-map-elements.html","05dc07afd3bf075d38dc185196d5e76b"],["bower_components/google-map/google-map-marker.html","06524e94cb2857d18bf3b881b704f9f8"],["bower_components/google-map/google-map-point.html","eecc0bf89071c6fe66300a62acc83a5b"],["bower_components/google-map/google-map-poly.html","f0a4172ae58357b4c2241afd1aa2bf0c"],["bower_components/google-map/google-map-search.html","3dbd26a955d148bbd2ba80b5c4f76b71"],["bower_components/google-map/google-map.html","c305ffb973d266463f3b51e1fdb8b13e"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","032ddccbe04fadf233db599b63b171b9"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","e416e843a80e32d5ac1cf3d99f92a290"],["bower_components/iron-behaviors/iron-control-state.html","26408b231f3184ed4c861a77090782d0"],["bower_components/iron-flex-layout/iron-flex-layout.html","ff9477722c978e3fdd3fbf292cc3f2fc"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","8ea5b57ab9067df1c61dc124c496120b"],["bower_components/iron-input/iron-input.html","c534697639484286f9cd62bf3bb6929d"],["bower_components/iron-jsonp-library/iron-jsonp-library.html","166554153f8620e2b25b884d5e484677"],["bower_components/iron-meta/iron-meta.html","c4214b55b5f4bdeee84c0caa675bb9d5"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","26731b518fc39146a6ef617bf2446cab"],["bower_components/iron-selector/iron-multi-selectable.html","d4765be6d51eb9e5e170b7191b222aec"],["bower_components/iron-selector/iron-selectable.html","033c526023ee6429bb66dab8407497f5"],["bower_components/iron-selector/iron-selection.html","d38a136db111dc594d0e9b27c283a47a"],["bower_components/iron-selector/iron-selector.html","fd5fa9e6f3bf894b065f43d2711bba45"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","3fb306c07a03ea899a4a29b582e75567"],["bower_components/paper-input/paper-input-addon-behavior.html","9f7c79f09b3e662a7a0a0ec2210c5331"],["bower_components/paper-input/paper-input-behavior.html","331835b778a46441f5266916bcf58efa"],["bower_components/paper-input/paper-input-char-counter.html","3afc53a558e36ccdbb0718b8da52b33a"],["bower_components/paper-input/paper-input-container.html","d90f28b41fbe59cfaae6433e4998716d"],["bower_components/paper-input/paper-input-error.html","270d241c108123335bf6dbe30d9e768f"],["bower_components/paper-input/paper-input.html","66a89eddb35c26f75fa78e894b0773af"],["bower_components/paper-styles/color.html","2b6b926e5bd4005bdbdcd15a34a50b95"],["bower_components/paper-styles/default-theme.html","9480969fcd665e90201b506a4737fa1a"],["bower_components/paper-styles/element-styles/paper-material-styles.html","b0a38bd2eb6f4c4844d4903a46268c92"],["bower_components/paper-styles/shadow.html","2fbe595f966eebe419b9b91611d6392a"],["bower_components/paper-styles/typography.html","772d86cecdd75864b7d5f6760255665c"],["bower_components/polymer/lib/elements/array-selector.html","76795ff2fb9aa8a158593896c4ab9932"],["bower_components/polymer/lib/elements/custom-style.html","b53cfc0076f0ecf00dc085f37bfbc115"],["bower_components/polymer/lib/elements/dom-bind.html","06633e6255127c6d39f9be371679c60d"],["bower_components/polymer/lib/elements/dom-if.html","42ffc412d545727f3de48ccd4fca741f"],["bower_components/polymer/lib/elements/dom-module.html","fd86800656c22674753f8b0b337d3e9f"],["bower_components/polymer/lib/elements/dom-repeat.html","e98e3ddcb866a5e9e279be9ce7b0e4ee"],["bower_components/polymer/lib/legacy/class.html","d3a207b2f872ae857b7db5e9d5ebfd81"],["bower_components/polymer/lib/legacy/legacy-element-mixin.html","ff864d9a4443bc1cdde84c9cb0beb3e6"],["bower_components/polymer/lib/legacy/mutable-data-behavior.html","219f20e24c7657cfd3d0672b1ee4c94e"],["bower_components/polymer/lib/legacy/polymer-fn.html","af1e8d5c6d5932154ded79a94c6ef15b"],["bower_components/polymer/lib/legacy/polymer.dom.html","622cd4cdd0a2aecaa1a7f04dab818268"],["bower_components/polymer/lib/legacy/templatizer-behavior.html","5f6455c42f1f81b88611d9091a80b51f"],["bower_components/polymer/lib/mixins/element-mixin.html","ca34f9502190aee81e4654204ca86ddf"],["bower_components/polymer/lib/mixins/gesture-event-listeners.html","ec4cce6813390dba9c9aeeb986d42803"],["bower_components/polymer/lib/mixins/mutable-data.html","b42e9fd5a0d21d0ea6d7e50837967424"],["bower_components/polymer/lib/mixins/property-accessors.html","d12c81195e98f2dcd6039fe29e2fc668"],["bower_components/polymer/lib/mixins/property-effects.html","e98a3a508191392bfbb7f3cffd1fb3c9"],["bower_components/polymer/lib/mixins/template-stamp.html","e9b5e3b58329dc5038857892f9ab7ae2"],["bower_components/polymer/lib/utils/array-splice.html","922f105e9326b3ebf23aca1029d8ad3c"],["bower_components/polymer/lib/utils/async.html","3b3dcc5b21c647d59ab4a491e81299ba"],["bower_components/polymer/lib/utils/boot.html","147a4a658cdf19e3b59b212acfa9e9c7"],["bower_components/polymer/lib/utils/case-map.html","61c3f85b8314adf2d309fdf3e97fddba"],["bower_components/polymer/lib/utils/debounce.html","b0b62601369d6a3aa7ec6d7e1cfd5e57"],["bower_components/polymer/lib/utils/flattened-nodes-observer.html","7ea457f79bf15ccd439edc0a5fb45509"],["bower_components/polymer/lib/utils/flush.html","2b4324e1cab5c4388ea129e7b17c11c9"],["bower_components/polymer/lib/utils/gestures.html","3dc1af8677716aaa0aba154a8c3a3b1d"],["bower_components/polymer/lib/utils/import-href.html","8728c208c7aca91d2f316d36bc712563"],["bower_components/polymer/lib/utils/mixin.html","fb1660a2c823d8c257022365291e69a2"],["bower_components/polymer/lib/utils/path.html","cdff0976cf841e50c7236a6c1b32a8a0"],["bower_components/polymer/lib/utils/render-status.html","9a929f20dbe0cb11548c404f1d1a6f55"],["bower_components/polymer/lib/utils/resolve-url.html","6baaaa13b817dad19102148d51a894ec"],["bower_components/polymer/lib/utils/style-gather.html","e0c98e6237a3cb3905e4a125545f18dc"],["bower_components/polymer/lib/utils/templatize.html","48b525a256281f1f677e6ab8c866e48f"],["bower_components/polymer/lib/utils/unresolved.html","a1ede4a050418cf897d096dcc8b3bc01"],["bower_components/polymer/polymer-element.html","9619497e9a7e27277c73e31cdb5f2301"],["bower_components/polymer/polymer.html","b20eb4dd015d93b8153cc6c3d79662c4"],["bower_components/shadycss/apply-shim.html","f220299c2be1b5040111843d640b70a5"],["bower_components/shadycss/apply-shim.min.js","6808f3a48f80ac2b146ec02f04180ce2"],["bower_components/shadycss/custom-style-interface.html","0a68ea0f3af7bcb1ca6617e512f720cb"],["bower_components/shadycss/custom-style-interface.min.js","c90d496b7679f4ad67095dc008531c5f"],["bower_components/webcomponentsjs/webcomponents-loader.js","a07d21bee1a7a2548e337d9e315be543"],["index.html","976d13bf48eaafb0a02ac934e00d6c1f"],["src/main/js/pli-geovis-app.html","fb4ffc0510a199b92656be3728ca121f"],["src/main/js/pli-geovis-control.html","70c8b990928b7d3a7cbf91a37b903fe6"],["src/main/js/pli-geovis-map.html","38c14a929b432d90e52dbe908c635511"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







