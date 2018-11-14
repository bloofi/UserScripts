// ==UserScript==
// @name         20Minutes - Experience Enhancer
// @include      http*://www.20minutes.fr*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

GM_addStyle(' \
#subscribe-modal, .wp-optin-dialog-container { \
  display : none ; \
} \
');
const mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation);
      if(document.body.className.indexOf('noscroll') !== -1) {
          document.body.className = 'js-focus-visible';
      }
  });
});
mutationObserver.observe(document.body, {
  attributes: true,
  characterData: false,
  childList: false,
  subtree: false,
  attributeOldValue: false,
  characterDataOldValue: false
});
})();
