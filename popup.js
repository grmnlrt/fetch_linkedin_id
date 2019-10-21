chrome.tabs.executeScript(null, {file: 'scripts/send-data.js'}, function(urls) {
  const container = document.getElementById('ids');
  urls.flat().forEach(data => {
    const li = `<li><input type="text" value="${data.id}"><a href="${data.url}" target="_blank">open</a></li>`;
    container.insertAdjacentHTML('beforeend', li);
  })
});
