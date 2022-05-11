const homePageButtons = () => {

  const selectButton = document.querySelector('.select-questions');
  const filterDiv = document.querySelector('.filters-questions');
  const filterDivQcm = document.querySelector('.filters-questions-qcm');
  const qcmButton = document.querySelector('.complete-qcm');
  const backButton = document.querySelector('fa-backward');
  const inputsLevel = document.querySelectorAll('input[name=level]')
  const inputsCategory = document.querySelectorAll('input[name=category]')
  const submitQuestionsChoice = document.querySelector('.submit-questions-choice');
  const submitQcmChoice = document.querySelector('.submit-qcm-choice');
  let checkedLevel = false
  let checkedCategory = false
  // empecher le click sur le btn Commencer si les 2 inputs de choix ne sont pas sélectionnés
  if (inputsLevel && inputsCategory ) {
      inputsLevel.forEach(function(input){
          input.addEventListener('click', function(){
              if (input.checked){
                  checkedLevel = true
                  if (checkedLevel === true && checkedCategory === true){
                        submitQuestionsChoice.classList.toggle('not-allowed')
                        submitQcmChoice.classList.toggle('not-allowed')
                  }
              }
          })
      })
      inputsCategory.forEach(function(input){
          input.addEventListener('click', function(){
              if (input.checked){
                  checkedCategory = true
                  if (checkedLevel === true && checkedCategory === true){
                        submitQuestionsChoice.classList.toggle('not-allowed')
                        submitQcmChoice.classList.toggle('not-allowed')
                  }
              }
          })
      })
  }
  // au clic sur le btn Selectionner des questions, montrer le form de choix du level&&category
  // et cacher le btn qcm
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
