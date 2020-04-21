const buttonsContainer = document.querySelector('.ytp-right-controls');
const buttonClass = 'ytp-holotools';
const buttonHtml = `
  <button class="${buttonClass} ytp-button" title="Open in HoloTools">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.3721 17.43L25.3722 17.43C25.669 17.5826 25.8357 17.7318 25.9206 17.8399C26 17.9413 26 17.9939 26 18.0008L26 18.0009L26 18.001C26 18.0079 26 18.0606 25.9206 18.1619C25.8357 18.27 25.669 18.4192 25.3722 18.5718L11.3812 25.768C10.7774 26.0786 10.4237 26.0095 10.2912 25.9414C10.1953 25.8922 10 25.7327 10 25.1971L10 10.8029C10 10.2673 10.1953 10.1078 10.2912 10.0586C10.4237 9.99046 10.7774 9.92143 11.3811 10.2319C11.3812 10.232 11.3812 10.232 11.3812 10.232L25.3721 17.43Z" stroke="white" stroke-width="2"/>
    </svg>
  </button>
`;

if (buttonsContainer) {
  // This injection breaks all other ytp-right-control buttons
  buttonsContainer.innerHTML = buttonHtml + buttonsContainer.innerHTML;
  const button = document.querySelector(`.${buttonClass}`);
  button.onclick = () => {
    chrome.runtime.sendMessage({});
  };
}
