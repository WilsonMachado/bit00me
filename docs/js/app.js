// * Para determinar si el formulario está vacío

let contactForm = document.querySelector(".send-email");

contactForm.addEventListener("submit", submitForm);

function submitForm(e){     

    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        
        alert("Por favor, completa todos los campos del formulario.");
      
    } else {       
        contactForm.reset();
        showModal(name);
      }
}

function showModal(nombre){
    
    let backgroudModal = document.createElement("div");
    backgroudModal.className = "modal-bg";

    let modal = document.createElement("div");
    modal.className = "modal-content";
    modal.id = "modal-content";

    document.getElementById("contact").appendChild(backgroudModal);
    
    backgroudModal.appendChild(modal);
    modal.insertAdjacentHTML("beforeend", `<h3>Thanks for your message, ${nombre}!</h3>`);
    modal.insertAdjacentHTML("beforeend", "<p>I have received your message. I will contact you as soon as possible.</p>");
    modal.insertAdjacentHTML("beforeend", "<div class='contact-button'><a href='javascript:hideModal()'>Okay!</a></div>");


    document.getElementById("body").classList.add("no-scroll");
}

function hideModal(){
    console.log("Listo, mi papá! Cerrando el modal");
}
