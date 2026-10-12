/*
  Contact page map: swaps the placeholder for the Google Maps embed when
  "Show map" is tapped. The embed is not loaded in the background because
  on iPhones it moved the page while the visitor was scrolling.
*/

(function () {
  'use strict';

  var map = document.querySelector('[data-map]');
  if (!map) return;
  var button = map.querySelector('[data-map-show]');
  if (!button) return;

  button.addEventListener('click', function () {
    var frame = document.createElement('iframe');
    frame.src = map.getAttribute('data-map-src');
    frame.title = map.getAttribute('data-map-title');
    frame.referrerPolicy = 'no-referrer-when-downgrade';

    map.textContent = '';
    map.classList.add('is-loaded');
    map.appendChild(frame);

    // The button has gone, so keep keyboard focus on the map area.
    map.setAttribute('tabindex', '-1');
    map.focus({ preventScroll: true });
  });
})();
