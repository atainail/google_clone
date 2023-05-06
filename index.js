let lucky = document.querySelector(".lucky");
let luckyArr = [`I'm Feeling Artistic`,
`I'm Feeling Stellar`, `I'm Feeling Hungry`,`I'm Feeling Trendy`,
`I'm Feeling Playful`, `I'm Feeling Generous`, `I'm Feeling Artistic`,
`I'm Feeling Doodley`];

lucky.addEventListener('mouseover', function(e){
    let randomNum = Math.floor((Math.random() * luckyArr.length));
    lucky.innerHTML = luckyArr[randomNum];
    
});
lucky.addEventListener('mouseout', function(e){
    lucky.innerHTML = "I'm Feeling Lucky";
});


let dropdownButton = document.querySelector(".dropdown-button");
let dropdownContent = document.querySelector(".dropdown-content");
let appSymbol = document.querySelector(".material-symbols-outlined");

dropdownContent.style.display = "none";

dropdownButton.addEventListener('click', function(e) {
    if (dropdownContent.style.display == "none") {
        dropdownContent.style.display = "block";
      } else {
        dropdownContent.style.display = "none";
      }
});

document.addEventListener('click', function(e){
     const outsideClick = !dropdownContent.contains(e.target);
      const outsideClick2 = !appSymbol.contains(e.target);
        if(outsideClick && outsideClick2) {
        dropdownContent.style.display = "none";
    }
})

dropdownButton.addEventListener('mouseover', function(e) {
    dropdownButton.style.cursor = "pointer";

});