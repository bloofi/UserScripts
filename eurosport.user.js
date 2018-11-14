// ==UserScript==
// @name         Eurosport - Experience Enhancer
// @include      http*://www.eurosport.*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

GM_addStyle(' \
body { \
  padding-top : 142px !important; \
} \
.storylist-promobox.promo-player-geoloc.show { \
  display  : none ; \
} \
.crylnk.betclic-btn.betclic-btn--event { \
  display : none ; \
} \
.sport-wrapper .sport a > h2 { \
  padding-top : 20px ; \
  margin : 0 ; \
} \
.sport-wrapper .event-wrapper { \
  margin-bottom : 0 !important ; \
} \
.ad.no-ad-mobile { \
  padding : 0 ; \
} \
.storylist-latest__main-title, .storylist-feed__main-title { \
  font-size : 0.9em ; \
} \
.storylist-container-latest, .storylist-container-feed { \
  padding : 10px 0 ; \
} \
#top > header#header { \
  display : none; \
} \
');
})();
