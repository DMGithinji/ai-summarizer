console.log('Business Daily Reader: content script is running');

// Function to remove a specific HTML element
function removeElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.remove();
    console.log(`Successfully removed element with selector: ${selector}`);
  } else {
    console.log(`Element with selector "${selector}" not found`);
  }
}

// Function to remove a class from multiple elements
function removeClassFromMultiple(selector, className) {
  const elements = document.querySelectorAll(selector);
  if (elements.length > 0) {
    elements.forEach(element => {
      if (element.classList.contains(className)) {
        element.classList.remove(className);
      }
    });
    console.log(`Processed ${elements.length} elements`);
  } else {
    console.log(`No elements found with selector "${selector}"`);
  }
}

function removePaywallElements() {
  removeElement('#prime-content-loading-spinner');
  removeElement('#paywall');
  removeElement('#newsletter_signup');

  // Remove 'nmgp' class from all paragraph-wrapper divs
  removeClassFromMultiple('.paragraph-wrapper', 'nmgp');

  removeElement('.promo');
  removeElement('.na__calc_form');

  console.log('Business Daily Reader: content script finished');
}

setTimeout(removePaywallElements, 1000);
