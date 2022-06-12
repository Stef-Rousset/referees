const backToTop = () => {
    const topButton = document.querySelector('.top-button');
    const container = document.querySelector('.main-container');
    // quand le scroll à l'interieur du container dépasse 200, on affiche le btn
    // de retour rapide en haut de container
    function addButton(){
        if (container.scrollTop >= 600 && topButton) {  //scrollTop renvoit le nb de px dont le container est scrollé
            topButton.style.visibility = 'visible';
        } else if (container.scrollTop < 600  && topButton.style.visibility === 'visible') {
            topButton.style.visibility = 'hidden';
        }
    }
    container.addEventListener('scroll', addButton);

    if (topButton){
        topButton.addEventListener('click', function(){
            document.querySelector('.banner-container').scrollIntoView({behavior: "smooth"});
        });
    };
}
export { backToTop };
