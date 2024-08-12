// ==UserScript==
// @name         Pur-Abo hide
// @namespace    Violentmonkey Scripts
// @version      2024-08-12
// @description  Remove 'sp-message-open' class and elements with IDs starting with 'sp_message_container'
// @author       scotty86
// @match        https://*.heise.de/*
// @match        https://*.handelsblatt.com/*
// @match        https://*.t-online.de/*
// @match        https://*.zeit.de/*
// @match        https://*.fr.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log(window.document.body.innerHTML);
    // Function to remove the consent elements
    function remove_consent_elements() {
        // Remove the 'sp-message-open' class from elements
        const elements_with_class = document.querySelectorAll('.sp-message-open');
        elements_with_class.forEach(element => element.classList.remove('sp-message-open'));

        // Remove elements with IDs starting with 'sp_message_container'
        const elements_with_id = document.querySelectorAll('[id^="sp_message_container"]');
        elements_with_id.forEach(element => element.remove());
    }

    // Initial removal of consent elements when the page loads
    remove_consent_elements();

    // Create a MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Ensure the node is an element
                    const node_as_element = node;
                    // Check if the added node matches the selectors
                    if (node_as_element.matches('.sp-message-open') || node_as_element.matches('[id^="sp_message_container"]')) {
                        remove_consent_elements();
                    }
                }
            });
        });
    });

    // Observe the entire document for changes in the DOM
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
