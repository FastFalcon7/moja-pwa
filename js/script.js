if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('Service Worker zaregistrovaný:', reg))
    .catch(err => console.error('Chyba pri registrácii SW:', err));
}

// Pridanie event listenera na tlačidlo "Ďakujem"
const thankYouButton = document.getElementById('thankYouButton');
thankYouButton.addEventListener('click', () => {
  // Zachováme štruktúru centrovaného obsahu
  document.body.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
      <h1>... a teraz klikni na tlačidlo Restart pre restartovanie aplikacie.</h1>
      <button id="restartButton">Restart</button>
    </div>
  `;
  
  // Pridanie event listenera na tlačidlo "Restart"
  document.getElementById('restartButton').addEventListener('click', () => {
    window.location.reload();
  });
});