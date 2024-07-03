let accordion = document.getElementsByClassName("contaioner");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", () => {
        console.log("clicked");
        accordion[i].classList.toggle("active");
        
    });
    
}
