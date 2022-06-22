const timer = () => {

    const level = document.querySelector('.qcm-title')
    const timerDiv = document.querySelector('.timer')
    const minSpan = document.querySelector('.minutes')
    const secSpan = document.querySelector('.seconds')
    const submitButton = document.querySelector('.question-qcm-form-submit')

    if(level) {
        let time;
        level.dataset.level === 'départemental' ? time = 1200 : time = 1800 // nb de min en secondes

        const interval = setInterval(handleTimer, 1000); // intervalle d'1 sec en milliseconds

        function handleTimer(){
          let minutes = parseInt(time / 60, 10);
          let seconds = parseInt(time % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes; // on affiche 09 min et pas 9 min
          seconds = seconds < 10 ? "0" + seconds : seconds; // on affiche 07 sec et pas 7 sec
          secSpan.innerHTML = seconds
          minSpan.innerHTML = minutes

          // on décrémente time de 1 et quand on arrive sous 60 sec, la div devient rouge
          // quand on arrive à zero, on arrête l'intervalle et on soumet le formulaire
          if (time == 0){
              clearInterval(interval)
              submitButton.click()  //submit le form
          } else if (time-- < 60 ) {
              timerDiv.style.backgroundColor = "red";
          }
        }
        // au clic sur le btn valider, on stoppe le timer
        submitButton.addEventListener('click', clearInterval(interval));
    }
}

export { timer }
