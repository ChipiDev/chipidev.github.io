function getElementByAttribute(attr, value, root) {
    root = root || document.body;
    if(root.hasAttribute(attr) && root.getAttribute(attr) == value) {
        return root;
    }
    var children = root.children, 
        element;
    for(var i = children.length; i--; ) {
        element = getElementByAttribute(attr, value, children[i]);
        if(element) {
            return element;
        }
    }
    return null;
}


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




// window.onload = function () {
//     console.log("On load");
//     var card1 = getElementByAttribute("data-card", "Card1", document.body);
//     var card2 = getElementByAttribute("data-card", "Card2", document.body);
//     var card3 = getElementByAttribute("data-card", "Card3", document.body);

//     card1.addEventListener("mouseover", (event) => {

//         console.log("dfglikjhbdfsg")
//     });
    
//     console.log(card1);
//     console.log(card2);
//     console.log(card3);

// }