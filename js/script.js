if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('Service Worker zaregistrovaný:', reg))
    .catch(err => console.error('Chyba pri registrácii SW:', err));
}

// Pridanie event listenera na tlačidlo "Ďakujem"
const thankYouButton = document.getElementById('thankYouButton');
thankYouButton.addEventListener('click', () => {
  document.body.innerHTML = `
    <h1>... a teraz klikni na tlačidlo Restart pre restartovanie aplikacie.</h1>
    <button id="restartButton">Restart</button>
  `;
  
  // Pridanie event listenera na tlačidlo "Restart"
  document.getElementById('restartButton').addEventListener('click', () => {
    window.location.reload();
  });
});