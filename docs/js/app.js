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
        alert("Gracias por contactarte con nosotros.");
        contactForm.reset();
      }
}
