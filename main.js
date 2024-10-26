fullscreenTarget.addEventListener('click', event=> {
    try {
        fullscreenTarget.requestFullscreen();
    } catch(error) {
        //handle error fracfully
    }
});

const viewer = new PhotoSphereViewer.Viewer({
            container: document.getElementById('viewer'),
            panorama: 'panorama.jpg', 
