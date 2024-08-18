// ==UserScript==
// @name         consentmanager.net Remover
// @namespace    Violentmonkey Scripts
// @version      2024-08-13-12-44
// @description  Remove consentmanager.net
// @author       scotty86
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove the consent elements
    function remove_initial_dom_elements() {
        // select all link-tags
        const links = document.querySelectorAll('link');

        // filter link tags by domain 'consentmanager.net'
        const consentManagerLinks = Array.from(links).filter(link =>
            /https?:\/\/.*\.consentmanager\.net\/.*/.test(link.href)
        );

        consentManagerLinks.forEach(element => element.remove());

        // select all script-tags
        const scripts = document.querySelectorAll('script');

        // filter script tags by domain 'consentmanager.net'
        const consentManagerScripts = Array.from(scripts).filter(script =>
            /https?:\/\/.*\.consentmanager\.net\/.*/.test(script.href)
        );

        consentManagerScripts.forEach(element => element.remove());

    }

    // Initial removal of preconnect link tags
    remove_initial_dom_elements();


    // Create a MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Ensure the node is an element
                    const node_as_element = node;

                    // Check if the added node is a script tag and if it contains 'consentmanager.net'
                    if (node_as_element.tagName === 'SCRIPT' && /https?:\/\/.*\.consentmanager\.net\/.*/.test(node_as_element.src)) {
                        node_as_element.remove();
                    } // Check if added node is wrapper
                    else if (node_as_element.matches('[id^="cmpwrapper"]')) {
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
