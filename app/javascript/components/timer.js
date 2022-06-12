const timer = () => {

    const level = document.querySelector('.qcm-title').dataset.level
    const minSpan = document.querySelector('.minutes')
    const secSpan = document.querySelector('.seconds')

    if(level) {
        level === 'départemental' ? minSpan.innerHTML = 19 : minSpan.innerHTML = 29
        secSpan.innerHTML = 59;
        function updateTimer(){
            let seconds = 59;
            let minutes;
            level === 'départemental' ? minutes = 19 : minutes = 29
            var timer = setInterval(function(){
                secSpan.innerHTML = seconds;
                seconds--;
                if (seconds === -1) {
                    seconds = 59;
                    minutes--;
                    minSpan.innerHTML = minutes;
                }
                if (minutes === 0) {
                    clearInterval(timer);
                }
            }, 1000);
        }
        updateTimer();
    }
}

export { timer }
