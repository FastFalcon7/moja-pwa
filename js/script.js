if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('Service Worker zaregistrovaný:', reg))
    .catch(err => console.error('Chyba pri registrácii SW:', err));
}

// Pridanie event listenera na tlačidlo "Ďakujem"
const thankYouButton = document.getElementById('thankYouButton');
thankYouButton.addEventListener('click', () => {
  // Úprava pre lepšie zobrazenie na mobiloch
  document.body.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
      text-align: center;
      box-sizing: border-box;
    ">
      <h1 style="margin-bottom: 20px; font-size: 24px;">... a teraz klikni na tlačidlo Restart pre restartovanie aplikacie.</h1>
      <button id="restartButton" style="
        padding: 10px 20px;
        font-size: 18px;
        background-color: #0078d7;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      ">Restart</button>
    </div>
  `;
  
  // Pridanie event listenera na tlačidlo "Restart"
  document.getElementById('restartButton').addEventListener('click', () => {
    window.location.reload();
  });
});