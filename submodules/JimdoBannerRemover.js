
// ==UserScript==
// @name         Jimdo Banner Remover
// @namespace    Violentmonkey Scripts
// @version      2024-08-13-16-03
// @description  ALPHA DO NOT USE - Remove elements with class 'cc-individual-cookie-settings' or 'cc-individual-cookie-settings-overlay'
// @author       scotty86
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Ensure the node is an element
                    const node_as_element = node;
                    // Check if the added node matches the selectors
                    if (node_as_element.matches('.cc-individual-cookie-settings') || node_as_element.matches('.cc-individual-cookie-settings-overlay')) {
                        node_as_element.remove();
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
