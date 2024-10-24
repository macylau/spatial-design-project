fullscreenTarget.addEventListener('click', event=> {
    try {
        fullscreenTarget.requestFullscreen();
    } catch(error) {
        //handle error fracfully
    }
});
