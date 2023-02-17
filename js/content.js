let startTime;

function handleClick(event) {
  const url = event.target.href;
  const duration = (Date.now() - startTime) / 1000;

  chrome.runtime.sendMessage({
    type: 'linkClicked',
    url,
    duration
  });
}

function handleLoad() {
  const links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', handleClick);
  }
}

window.addEventListener('load', handleLoad);
