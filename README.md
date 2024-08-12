# ViolentConsentBanner

[Deutsche Readme / German readme](https://github.com/scotty86/ViolentConsentBanner/blob/main/README.de.md)

**Description**

The **ViolentConsentBanner** project is a collection of scripts designed to block intrusive consent banners on websites, allowing access to content without requiring user consent. The scripts are intended for developers and researchers who want to analyze and understand the mechanisms of such banners.

**Disclaimer**

These scripts are developed solely for research and educational purposes. They are intended to help understand and analyze technological mechanisms and their functionality. Using the scripts to bypass tracking mechanisms or consent banners that require user approval may be illegal and could violate the terms of service of the affected websites.

The authors assume no responsibility for any misuse or illegal activities that may arise from using these scripts. Users are responsible for complying with the legal regulations in their country and ensuring that they use these tools only in accordance with applicable laws and the terms of service of the websites they visit.

These scripts are not intended for permanent or regular use and should only be used in controlled environments and for scientific purposes.

## Installation

### Requirements

- **Browser**: A modern web browser like Firefox, Chrome, or Edge.
- **Extension**: Install the [Violentmonkey](https://violentmonkey.github.io/) extension.

### Step-by-Step Guide

1. **Install Violentmonkey**:
   - Download and install the Violentmonkey extension from your browser's extension store.

2. **Add a Script**:
   - Open Violentmonkey by clicking on the extension icon in your browser.
   - Select "Create a new script" or go to the Violentmonkey Dashboard.
   - Click on "Import from URL".

3. **Enter the Script URL**:
   - Paste the URL of the script you want to use into the input field. For example, to use the PUR subscription banner remover script, enter the following URL:
     ```
     https://raw.githubusercontent.com/scotty86/ViolentConsentBanner/main/PurAboBannerRemover.js
     ```
   - Confirm by clicking "OK".
   
4. **Save and Activate**:
   - After importing the script, save it and ensure it is activated.

5. **Manage Updates**:
   - Violentmonkey automatically checks for updates for your installed scripts.
   - To manually check for updates, go to the Violentmonkey Dashboard, find the relevant script, and click "Check for updates".

## Available Scripts

- **PUR Subscription Banner Remover**: Removes subscription banners that block access to content without a PUR subscription.  
  URL: `https://raw.githubusercontent.com/scotty86/ViolentConsentBanner/main/PurAboBannerRemover.js`
  
  Additional scripts will be available in the future to remove other types of banners on various websites.

## Support

For questions or issues, please contact us via the [Issues page](https://github.com/scotty86/ViolentConsentBanner/issues) of the repository.
