addEventListener("scroll", (event) => {

    
    // Iluminación de botones de la navbar
    const HomeButton = document.getElementById("HomeButton");
    const HighlightsButton = document.getElementById("HighlightsButton");
    const AboutButton = document.getElementById("AboutButton");

    if (HomeButton) {
        if (scrollY < 900){
            HighlightsButton.classList.remove("is-active") ;
            AboutButton.classList.remove("is-active") ;
            HomeButton.classList.add("is-active");
        } else if (scrollY < 2200){
            HomeButton.classList.remove("is-active") ;
            AboutButton.classList.remove("is-active") ;
            HighlightsButton.classList.add("is-active");
        } else {
            HomeButton.classList.remove("is-active") ;
            HighlightsButton.classList.remove("is-active") ;
            AboutButton.classList.add("is-active");
        }
    }
});