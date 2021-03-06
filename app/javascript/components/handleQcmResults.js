const handleQcmResults = () => {
  const submitButton = document.querySelector('.question-qcm-form-submit')

  if (submitButton){
      const correctionButton = document.querySelector('.correction-qcm')
      const homePageButtonModal = document.querySelector('.homepage-qcm')
      const modalBody = document.querySelector('.modal-body')
      const level = document.querySelector('.qcm-title').dataset.level
      const answers = document.querySelectorAll('.answer-qcm-question')
      const goodAnswersAre = document.querySelectorAll('.good-answer-is')
      const homePageLink = document.querySelector('.question-qcm-homepage-return')

      submitButton.addEventListener('click', function(event){
          event.preventDefault;
          const arrayGeneral = []
          const arraySpecific = []
          let resultGe;
          let resultSpe;
          let total;
          // on ajoute 1 ds arrayGeneral à chq bonne reponse pr la partie generale et
          // on attribue une class couleur en fonction de bonne ou mauvaise reponse ou
          // pas de réponse
          const formsGe = document.querySelectorAll('.question-qcm-forms-general')
          formsGe.forEach(function(form){
              let indexForm = form.dataset.index;
              let goodAnswer = form.dataset.goodAnswer;
              const inputs = document.querySelectorAll(`input[name=question-general-${indexForm}]`);
              inputs.forEach(function(input){
                  if (input.checked && goodAnswer === input.value){
                      arrayGeneral.push(1)
                      input.classList.add('green')
                  }
                  else if (input.checked && goodAnswer !== input.value){
                      input.classList.add('red')
                  }
                  else if (input.checked === false){
                      input.classList.add('blue')
                  }
              })
          })
          // on ajoute 1 ds arraySpecific à chq bonne reponse pr la partie specifique et
          // on attribue une class couleur en fonction de bonne ou mauvaise reponse ou
          // pas de reponse
          const formsSpe = document.querySelectorAll('.question-qcm-forms-specific')
          formsSpe.forEach(function(form){
              let indexForm = form.dataset.index;
              let goodAnswer = form.dataset.goodAnswer;
              const inputs = document.querySelectorAll(`input[name=question-specific-${indexForm}]`);
              inputs.forEach(function(input){
                  if (input.checked && goodAnswer === input.value){
                      arraySpecific.push(1)
                      input.classList.add('green')
                  }
                  else if (input.checked && goodAnswer !== input.value){
                      input.classList.add('red')
                  }
                  else if (input.checked === false){
                      input.classList.add('blue')
                  }
              })
          })
          // on fait le total des points et on l'affiche dans une modal
          resultGe = arrayGeneral.reduce((acc, currentV) => acc + currentV, 0)
          resultSpe = arraySpecific.reduce((acc, currentV) => acc + currentV, 0)
          total = resultGe + resultSpe
          const content = document.createTextNode(level === 'départemental' ? `Vous avez ${total} bonnes réponses sur 20 questions` : `vous avez ${total} bonnes réponses sur 30 questions`)
          modalBody.appendChild(content)
          // au clic sur le btn retour à l'accueil, on redirect sur homepage
          homePageButtonModal.addEventListener('click', function(){
            window.location = "/"
          })
          // au clic sur le btn voir correction, on affiche les div d'explications
          // et on passe les mauvaises réponses en rouge et les bonnes en vert
          // si mauvaise reponse ou pas de reponse, on affiche le p qui indique la bonne reponse
          // on cache le btn valider les reponses et on display le lien retour accueil
          // on scroll au début du qcm
          correctionButton.addEventListener('click', function(){
              const inputs = document.querySelectorAll('input')
              document.querySelectorAll('.green').forEach(elem => elem.parentElement.style.color = "green")
              document.querySelectorAll('.red').forEach(elem => elem.parentElement.style.color = "red")
              answers.forEach(answer => answer.classList.toggle('hide-element'))
              inputs.forEach(function(input){
                  if (input.classList.contains('red') || input.classList.contains('blue')){
                    // on recup le p qui donne la bonne reponse
                    input.parentElement.parentElement.lastElementChild.firstElementChild.classList.toggle('hide-element')
                  }
              })
              submitButton.classList.toggle('hide-element')
              homePageLink.classList.toggle('hide-element')
              document.querySelector('.main-container').scrollTop = 0
          })
      })
  }
}

export { handleQcmResults }
