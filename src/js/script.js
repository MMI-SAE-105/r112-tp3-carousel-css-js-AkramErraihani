//// CSS : Style pour rendre le défilement fluide. \\\\

document.addEventListener('DOMContentLoaded', () => {
  console.log('Le script JS est bien chargé et en cours d’exécution.');

  // Sélectionne les éléments du DOM
  const carousel = document.querySelector('.carousel__container');
  const prevButton = document.querySelector('.carousel__button--prev');
  const nextButton = document.querySelector('.carousel__button--next');

  // Vérifie si les éléments existent
  if (carousel && prevButton && nextButton) {
    console.log('Carousel trouvé :', carousel);

    const scrollAmount = document.querySelector('.carousel__item').clientWidth;

    // Gère le clic sur le bouton "Précédent"
    prevButton.addEventListener('click', () => {
      console.log('Bouton Précédent cliqué');
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Gère le clic sur le bouton "Suivant"
    nextButton.addEventListener('click', () => {
      console.log('Bouton Suivant cliqué');
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  } else {
    console.error('Certains éléments du carrousel ne sont pas trouvés.');
  }
});
