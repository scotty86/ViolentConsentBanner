// ==UserScript==
// @name         PONS Banner Remover
// @namespace    Violentmonkey Scripts
// @version      2024-08-25-17-15
// @description  Remove consent banner from pons.com
// @author       scotty86
// @match        https://*.pons.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Function to remove the consent elements
    function remove_consent_elements() {
        // Remove elements with IDs strtaing with 'sp_message_container'
        const elements_with_id = document.querySelectorAll('[id="feature-guard"]');
        elements_with_id.forEach(element => element.remove());
    }

    // Create a MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Ensure the node is an element
                    const node_as_element = node;
                    // Check if the added node matches the selectors
                    if (node_as_element.matches('[id="feature-guard"]')) {
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

    // Initial remove
    remove_consent_elements();

    // Function to check and remove overflow property if necessary
    function check_and_remove_overflow() {
        const html_element = document.documentElement;
        const style = window.getComputedStyle(html_element);
        if (style.overflow === 'hidden'){
            html_element.style.overflow = 'auto';
        }

        if (style.overflowY === 'hidden') {
            html_element.style.overflowY = 'auto';
        }
    }

    // MutationObserver to monitor changes to the style attribute of the <html> tag
    const observer_overlow = new MutationObserver((mutations_list) => {
        for (const mutation of mutations_list) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                check_and_remove_overflow();
            }
        }
    });

    // Start observing the <html> tag for attribute changes
    observer_overlow.observe(document.documentElement, {
        attributes: true // Configure it to listen to attribute changes
    });

    // Initial check in case the style is already set
    check_and_remove_overflow();

})();
