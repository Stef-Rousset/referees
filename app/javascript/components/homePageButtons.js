const homePageButtons = () => {

  var selectButton = document.querySelector('.select-questions');
  var filterDiv = document.querySelector('.filters-questions');
  var filterDivQcm = document.querySelector('.filters-questions-qcm');
  var qcmButton = document.querySelector('.complete-qcm');
  var backButton = document.querySelector('fa-backward');
  const inputsLevel = document.querySelectorAll('input[name=level]')
  const inputsCategory = document.querySelectorAll('input[name=category]')
  let array = []
  if (inputsLevel && inputsCategory ) {
    console.log('in');
      inputsLevel.forEach(function(input){
          if (input.checked){
            array.push(1);
            console.log(input.checked);
          }
      })
      inputsCategory.forEach(function(input){
          if (input.checked){
            array.push(1)
            console.log('bli');
          }
      })
      if (array.length == 2){
        selectButton.classList.remove('not-allowed')
      }
  }
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
