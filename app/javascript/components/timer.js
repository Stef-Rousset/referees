const timer = () => {

    const level = document.querySelector('.qcm-title')
    const minSpan = document.querySelector('.minutes')
    const secSpan = document.querySelector('.seconds')

    if(level) {
        let time;
        level.dataset.level === 'départemental' ? time = 1200 : time = 1800 // nb de min en secondes

        setInterval(function() {
            let minutes = parseInt(time / 60, 10);
            let seconds = parseInt(time % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            secSpan.innerHTML = seconds
            minSpan.innerHTML = minutes

            if (--time < 0) {
                time = 0;
                // ajouter la logique de soumission du qcm, avec modal informant du résultat
            }
        }, 1000);
    }
}

export { timer }
