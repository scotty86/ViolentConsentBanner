// ==UserScript==
// @name         Violent Consent Banner
// @namespace    Violentmonkey Scripts
// @version      2024-08-18-12-45
// @description  Removes banner for: PUR-Abo; consentmanager.net
// @author       scotty86
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove consentmanager.net elements
    function remove_consent_manager_elements() {
        const links = document.querySelectorAll('link');
        const scripts = document.querySelectorAll('script');

        const consent_manager_links = Array.from(links).filter(link =>
            /https?:\/\/.*\.consentmanager\.net\/.*/.test(link.href)
        );
        const consent_manager_scripts = Array.from(scripts).filter(script =>
            /https?:\/\/.*\.consentmanager\.net\/.*/.test(script.src || script.href)
        );

        consent_manager_links.forEach(element => element.remove());
        consent_manager_scripts.forEach(element => element.remove());
    }

    // Function to remove PUR-Abo Banner elements
    function remove_pur_banner_elements() {
        const elements_with_class = document.querySelectorAll('.sp-message-open');
        const elements_with_id = document.querySelectorAll('[id^="sp_message_container"]');

        elements_with_class.forEach(element => element.classList.remove('sp-message-open'));
        elements_with_id.forEach(element => element.remove());
    }

    // Initial removal of elements
    remove_consent_manager_elements();
    remove_pur_banner_elements();

    // Create a MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Ensure the node is an element
                    const node_as_element = node;

                    // Check for consentmanager.net elements
                    if (node_as_element.tagName === 'SCRIPT' && /https?:\/\/.*\.consentmanager\.net\/.*/.test(node_as_element.src)) {
                        node_as_element.remove();
                    } else if (node_as_element.matches('[id^="cmpwrapper"]')) {
                        node_as_element.remove();
                    }
                    else if (node_as_element.matches('.sp-message-open') || node_as_element.matches('[id^="sp_message_container"]')) { // Check for PUR-Abo Banner elements
                        remove_pur_banner_elements();
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