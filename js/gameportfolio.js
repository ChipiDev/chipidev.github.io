
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
            if (video == data.id) {
                const videoSection = document.getElementById("video-section");
                const videoPlayer = document.getElementById("video-player");

                videoSection.classList.remove("hidden");

                var sources = videoPlayer.getElementsByTagName('source');
                sources[0].src = data.url;
                videoPlayer.load();
                videoPlayer.play();

                videoPlayer.volume = 0.2;
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

                const customButton = document.getElementById("card-button-custom");
                console.log(customButton)
                console.log(data);
                if (data.downloadText.length > 0){
                    customButton.style.position = "relative";
                    customButton.style.visibility = "visible";
                    customButton.innerHTML = data.downloadText;
                    customButton.href = data.downloadLink;
                }else {
                    customButton.style.visibility = "hidden";
                    customButton.style.position = "absolute";
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
