const handleValidateQuestion = () => {

 let btn = document.querySelector(".question-index-form-submit");
 if (btn){
     let chosenProp;
     let inputs = document.querySelectorAll('input');
     // on selectionne l'input qui a été coché
     inputs.forEach(function(input){
          input.addEventListener('click', function(){
              chosenProp = document.querySelector('input[name = "question"]:checked');
          })
      })
     let answerDiv = document.querySelector('.question-index-answer');
     let answerExp = document.querySelector('.answer-explanation');
     let rightAnswer = document.querySelector('.right-answer');
     btn.addEventListener('click', function(event){
          event.preventDefault();
          // si aucne case n'a été cochée et qu'on clic sur le btn valider
          // message d'alerte
          if (chosenProp === undefined){
              alert('Vous devez choisir une réponse avant de valider !');
          }
          // si l'input coché est la bonne réponse, on passe l'input en vert
          // on ajoute un texte "bonne reponse" et on montre l'explication
          // on scroll au niveau de la pagination
          else if (chosenProp.dataset.value === answerExp.dataset.value){
              let p = document.createElement('p');
              p.style.fontSize = '1.1rem';
              p.style.color = 'green';
              p.textContent = 'Bonne réponse !'
              answerDiv.prepend(p);
              answerDiv.classList.toggle('hide-element');
              btn.classList.toggle('hide-element');
              document.querySelector('.apple_pagination').scrollIntoView();
           }
           // si l'input coché est la mauvaise réponse, on passe l'input en rouge
          // on ajoute un texte "mauvaise reponse", on affiche un texte indiquant
          // la bonne reponse on montre l'explication, on scroll au niveau de la pagination
           else {
              let p = document.createElement('p');
              p.style.fontSize = '1.1rem';
              p.style.color = 'red';
              p.textContent = 'Mauvaise réponse...'
              answerDiv.prepend(p);
              answerDiv.classList.toggle('hide-element');
              rightAnswer.classList.toggle('hide-element');
              btn.classList.toggle('hide-element');
              document.querySelector('.apple_pagination').scrollIntoView();
           }
       })
  }
}

export { handleValidateQuestion }
