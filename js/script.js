if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('Service Worker zaregistrovaný:', reg))
    .catch(err => console.error('Chyba pri registrácii SW:', err));
}

// Pridanie event listenera na tlačidlo "Ďakujem"
const thankYouButton = document.getElementById('thankYouButton');
thankYouButton.addEventListener('click', () => {
  document.body.innerHTML = ''; // Vymaže celý obsah tela stránky
});
