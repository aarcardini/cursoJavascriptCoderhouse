const progressBar = document.querySelector("#progressBar div");
const openButtons = document.querySelectorAll("main button");

let investment = 0;

// ABRIR MODAL

const toggleModal = () => {
    modal.classList.toggle("active");
};

const resetModal = () => {
    setTimeout(() => {
        clearSelect();
        closeModal.scrollIntoView();
    }, 500);
};

openButtons.forEach(b => {
    b.addEventListener("click", () => {
        toggleModal();
        toggleOverlay();
        if (b.classList.contains("specific")) {
            const inputID = specificButtons[b.id];
            const checkedOption = document.querySelector(inputID);
            checkedOption.checked = true;
            selectNew(checkedOption);
        };
    });
});

closeModal.addEventListener("click", () => {
    resetModal();
    toggleModal();
    toggleOverlay();
});

// -----------> CREACIÓN DE INVERSION <-----------
class Inversion{
    constructor(mInv){
        this.inv = mInv;
    }
}

let arrayInversion = [];


let buttonSubmit = document.getElementById('confirmButton');
buttonSubmit.addEventListener("click", function(event){
    event.preventDefault();

    let mInv = document.getElementById('montoInversion').value;


    let inversion = new Inversion (mInv);

    arrayInversion.push (inversion);
    localStorage.setItem(1, JSON.stringify(arrayInversion));

    document.getElementById('newInv').submit();
});

console.log(JSON.parse(localStorage.getItem(1)));