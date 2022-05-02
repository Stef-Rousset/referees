const homePageButtons = () => {

  var selectButton = document.querySelector('.select-questions');
  var filterDiv = document.querySelector('.filters-questions');
  var filterDivQcm = document.querySelector('.filters-questions-qcm');
  var qcmButton = document.querySelector('.complete-qcm');
  var backButton = document.querySelector('fa-backward');
  if (selectButton) {
      selectButton.addEventListener('click', function(){
        filterDiv.classList.toggle('hide-element');
        qcmButton.classList.toggle('hide-element');
        selectButton.classList.toggle('hide-element');
      })
  }
  if (backButton) {
      backButton.addEventListener('click', function(){
        filterDiv.classList.toggle('hide-element');
        qcmButton.classList.toggle('hide-element');
        selectButton.classList.toggle('hide-element');
      })
  }
  if (qcmButton) {
      qcmButton.addEventListener('click', function(){
        filterDivQcm.classList.toggle('hide-element');
        qcmButton.classList.toggle('hide-element');
        selectButton.classList.toggle('hide-element');
      })
  }
}

export { homePageButtons }
