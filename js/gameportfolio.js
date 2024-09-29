
// Nos aseguramos que la página ha cargado
window.onload = function () {


    // Load portfolio data
    var GamePortfolioData = [];

    fetch('./assets/GamePortfolioData.json')
        .then((response) => response.json())
        .then((json) => {

            GamePortfolioData = json.PortfolioVideos;

        });

    function openVideo(video) {
        GamePortfolioData.forEach(data => {
            if (video == data.title) {
                const videoSection = document.getElementById("video-section");
                const videoPlayer = document.getElementById("video-player");

                videoSection.classList.remove("hidden");

                var sources = videoPlayer.getElementsByTagName('source');
                sources[0].src = data.url;
                videoPlayer.load();
                videoPlayer.play();

                // Hacer scroll suave hacia la sección del video
                // videoSection.scrollIntoView({
                //     behavior: "smooth"
                // });

                const videoTitle = document.getElementsByClassName("video-title")[0];
                videoTitle.textContent = data.title;

                const videoDescription = document.getElementsByClassName("video-description")[0];
                videoDescription.textContent = data.description;

                const width = window.innerWidth;

                if (width > 450) {
                    videoDescription.scrollIntoView({
                        behavior: "smooth"
                    });
                } else {
                    videoSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });


    }


    var previousRefValue = window.location.href.split('#')[1];
    // Si cargamos la página explorando un juego, vamos directamente hacia el vídeo del juego
    setTimeout(() => {
        openVideo(previousRefValue);
    }, 100);

    // Intervalo para detectar cuando la página ha cambiado
    setInterval(function () {
        var refValue = window.location.href.split('#')[1];
        if (previousRefValue != refValue) {
            previousRefValue = refValue;
            console.log("DETECTAMOS CAMBIO");

            openVideo(previousRefValue);
        }
    }, 100)



}
