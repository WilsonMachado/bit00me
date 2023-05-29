// * Para determinar si el formulario está vacío

let contactForm = document.querySelector(".send-email");

contactForm.addEventListener("submit", submitForm);

function submitForm(e){     

    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        showErrorModal();        
    } else {       
        contactForm.reset();
        showSuccessModal(name);
      }
}

function showSuccessModal(nombre){
    
    let backgroudModal = document.createElement("div");
    backgroudModal.className = "modal-bg";
    backgroudModal.id = "modal-bg";

    let modal = document.createElement("div");
    modal.className = "modal-content";

    document.getElementById("contact").appendChild(backgroudModal);
    
    backgroudModal.appendChild(modal);
    modal.insertAdjacentHTML("beforeend", `<h3>Thanks for your message, ${nombre}!</h3>`);
    modal.insertAdjacentHTML("beforeend", "<p>I have received your message. I will contact you as soon as possible.</p>");
    modal.insertAdjacentHTML("beforeend", "<div class='contact-button button-modal'><a href='javascript:hideModal()'>Okay!</a></div>");


    document.getElementById("body").classList.add("no-scroll");
}

function showErrorModal(){

    let backgroudModal = document.createElement("div");
    backgroudModal.className = "modal-bg";
    backgroudModal.id = "modal-bg";

    let modal = document.createElement("div");
    modal.className = "modal-content";

    document.getElementById("contact").appendChild(backgroudModal);
    
    backgroudModal.appendChild(modal);
    modal.insertAdjacentHTML("beforeend", `<h3>Please complete all the fields in the form</h3>`);
    modal.insertAdjacentHTML("beforeend", "<p>All the fields requested in the form are mandatory.</p>");
    modal.insertAdjacentHTML("beforeend", "<div class='contact-button button-modal'><a href='javascript:hideModal()'>Got it!</a></div>");


    document.getElementById("body").classList.add("no-scroll");
    
}

function hideModal(){
    let modal = document.getElementById("modal-bg");
    document.getElementById("contact").removeChild(modal);
    document.getElementById("body").classList.remove("no-scroll");
}
