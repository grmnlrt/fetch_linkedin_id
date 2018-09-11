function fetchData() {
  const title = document.querySelector('title').innerText;
  const url = window.location.href;

  return {
    title: title,
    url: url
  }
}

function sendData(data) {
  const url = 'https://wagon-chat.herokuapp.com/engineering/messages';
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "author": "Le Wagon chrome extension",
      "content": `I've found something cool: ${data.title} on ${data.url}`
    })
  })
}

console.log(fetchData());
sendData(fetchData());
