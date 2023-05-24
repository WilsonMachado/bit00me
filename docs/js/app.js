// Listen for a submit

document.querySelector(".send-email").addEventListener("submit", submitForm);

function submitForm(e){     // Capture data

    e.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    sendEmail(name, email, message);

}

function sendEmail(name, email, message){   // Send email
    Email.send({
        SecureToken : "1f8df477-1a8d-450e-a84f-b73565fe3ba4",
        To : 'wilson.machado@correounivalle.edu.co',
        From : "wdmachado.portfolio@gmail.com",
        Subject : `${name} sent you a message`,
        Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`    
    }).then(
        message => alert("Message has been sent! :)"))

    console.log("Email sent!");
}
