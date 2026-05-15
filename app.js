let news = [];
let current = 0;

fetch('news.json')
  .then(res => res.json())
  .then(data => {
    news = data;
    showNews();
  });

function showNews() {
  document.getElementById('title').textContent =
    news[current].title;

  document.getElementById('content').textContent =
    news[current].content;

  speak(news[current].title + news[current].content);
}

function nextNews() {
  current = (current + 1) % news.length;
  showNews();
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  speechSynthesis.speak(utterance);
}
