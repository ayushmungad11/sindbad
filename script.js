function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,

    };
    emailjs.send("service_1hzvyyq","template_ctco35r",parms).then(alert("Email Sent!!"));
}