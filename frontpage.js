'use strict';

(function() {

  window.addEventListener('load', init);
  window.addEventListener('load', startType);

  /**
   * Generates user interactivity for the page.
   */
  function init() {

    setTimeout(function() {
      startType(qs('.text-row'), "Gunner Dohrenwend", 0);
      qs('.text-cursor').remove();
    }, 1000);

    $(window).on('beforeunload', function() {
      $('body').hide();
      $(window).scrollTop(0);
    });

    setButtons();
  }

  function startType(textDiv, text, i) {

    textDiv.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => startType(textDiv, text, i + 1), 50);
  }

  /**
   * Queries the document for the first element that matches the given selector.
   *
   * @param {string} selected - The CSS selector to query the document.
   * @returns {Element | null} The first element that matches CSS selector,
   * or null if none is found.
   */
  function qs(selected) {
    return document.querySelector(selected);
  }

  /**
   * Queries the document for all elements that matches the given selector.
   *
   * @param {string} selected - The CSS selector to query the document.
   * @returns {Element | null} All elements that match CSS selector,
   * or null if none is found.
   */
  function qsa(selected) {
    return document.querySelectorAll(selected);
  }

  /**
   * Finds an element in a document by ID.
   *
   * @param {string} selected - The CSS selector with the correct id.
   * @returns {Element | null} An element that matches CSS selector,
   * or null if none is found.
   */
  function id(selected) {
    return document.getElementById(selected);
  }

})();
