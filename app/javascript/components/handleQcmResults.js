const handleQcmResults = () => {
  const submitButton = document.querySelector('.question-qcm-form-submit')
  if (submitButton){
      submitButton.addEventListener('click', function(event){
          event.preventDefault;
          const arrayGeneral = []
          const arraySpecific = []
          let resultGe;
          let resultSpe;
          let total;
          // on ajoute 1 ds arrayGeneral à chq bonne reponse pr la partie generale
          const formsGe = document.querySelectorAll('.question-qcm-forms-general')
          formsGe.forEach(function(form){
              let indexForm = form.dataset.index;
              let goodAnswer = form.dataset.goodAnswer;
              const inputs = document.querySelectorAll(`input[name=question-general-${indexForm}]`);
              inputs.forEach(function(input){
                  if (input.checked && goodAnswer === input.value){
                      arrayGeneral.push(1)
                  }
              })
          })
          // on ajoute 1 ds arraySpecific à chq bonne reponse pr la partie specifique
          const formsSpe = document.querySelectorAll('.question-qcm-forms-specific')
          formsSpe.forEach(function(form){
              let indexForm = form.dataset.index;
              let goodAnswer = form.dataset.goodAnswer;
              const inputs = document.querySelectorAll(`input[name=question-specific-${indexForm}]`);
              inputs.forEach(function(input){
                  if (input.checked && goodAnswer === input.value){
                      arraySpecific.push(1)
                  }
              })
          })
          // on fait le total des points et on l'affiche dans une alert
          resultGe = arrayGeneral.reduce((acc, currentV) => acc + currentV, 0)
          resultSpe = arraySpecific.reduce((acc, currentV) => acc + currentV, 0)
          total = resultGe + resultSpe
          alert(`vous avez ${total} bonnes réponses sur 20 questions`)
          window.location = "/"
          // RAF :
            // modal à la place de l'alert ou
            // div qui apparait avec le résultat et les bonnes reponses en vert/ mauvaises en rouge
            // au clic sur la fermeture de la modal, rediriger vers homepage

      })
  }
}

export { handleQcmResults }
