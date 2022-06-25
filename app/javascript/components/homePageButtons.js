const homePageButtons = () => {

  const selectButton = document.querySelector('.select-questions');
  const filterDiv = document.querySelector('.filters-questions');
  const filterDivQcm = document.querySelector('.filters-questions-qcm');
  const qcmButton = document.querySelector('.complete-qcm');
  const backButton = document.querySelector('fa-backward');

  // au clic sur le btn Selectionner des questions, montrer le form de choix du
  // level&&category et cacher le btn qcm
  if (selectButton) {
      selectButton.addEventListener('click', function(){
        filterDiv.classList.toggle('hide-element');
        qcmButton.classList.toggle('hide-element');
        selectButton.classList.toggle('hide-element');
      })
  }
  // au clic sur le btn Qcm complet, montrer le form de choix du level&&category
  // et cacher le btn Selectionner des questions
  if (qcmButton) {
      qcmButton.addEventListener('click', function(){
        filterDivQcm.classList.toggle('hide-element');
        qcmButton.classList.toggle('hide-element');
        selectButton.classList.toggle('hide-element');
      })
  }
  // au clic sur le btn back, cacher le form et montrer à nouveau les 2 btns
  if (backButton) {
      backButton.addEventListener('click', function(){
        filterDiv.classList.toggle('hide-element');
        qcmButton.classList.toggle('hide-element');
        selectButton.classList.toggle('hide-element');
      })
  }
}

export { homePageButtons }
