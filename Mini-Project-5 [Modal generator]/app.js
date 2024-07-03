let openBtn = document.querySelector("#openbtn");
let closeBtn = document.querySelector("#closebtn");
let contaioner = document.querySelector("#contaioner");

openBtn.addEventListener("click", function () {
    contaioner.style.display = 'block';
});

closeBtn.addEventListener("click", function () {
    contaioner.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target===contaioner) {
        contaioner.style.display = 'none';
    }
});
