const handleValidateQuestion = () => {

 let btn = document.querySelector(".question-index-form-submit");
 if (btn){
     let chosenProp;
     let inputs = document.querySelectorAll('input');
     inputs.forEach(function(input){
          input.addEventListener('click', function(){
              chosenProp = document.querySelector('input[name = "question"]:checked');
          })
      })
     let answerDiv = document.querySelector('.question-index-answer');
     let goodAnswer = document.querySelector('.answer-explanation');
     btn.addEventListener('click', function(event){
          event.preventDefault();
          if (chosenProp === undefined){
            alert('Vous devez choisir une réponse avant de valider !');
          }
          else if (chosenProp.dataset.value === goodAnswer.dataset.value){
             let p = document.createElement('p');
             p.style.fontSize = '1.1rem';
             p.style.color = 'green';
             p.textContent = 'Bonne réponse !'
             answerDiv.prepend(p);
             answerDiv.classList.toggle('hide-element');
             btn.classList.toggle('hide-element');
           }
           else {
             let p = document.createElement('p');
             p.style.fontSize = '1.1rem';
             p.style.color = 'red';
             p.textContent = 'Mauvaise réponse...'
             answerDiv.prepend(p);
             answerDiv.classList.toggle('hide-element');
             btn.classList.toggle('hide-element');
           }
       })
  }
}

export { handleValidateQuestion }
