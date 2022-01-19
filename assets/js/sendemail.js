
(function() {
	emailjs.init("user_wKAdwdv5nPAqQiCtV5mVe");
	emailjs.sendForm("service_62xzi6z", "template_s4ndxlo", "#emailForm")
})();

document.getElementById("emailForm")
		.addEventListener("submit", function (event) {
		
			event.preventDefault();

			if (document.getElementById("email").value != "" && document.getElementById("name").value != "" && document.getElementById("subject").value != "" && document.getElementById("message").value != "" )
			{

			    const serviceID = "service_62xzi6z";
			    const templateID = "template_s4ndxlo";

			    // send the email here
			    emailjs.sendForm(serviceID, templateID, this).then(
			      (response) => {
			        alert("EMAIL INVIATA");
			      },
			      (error) => {
			        alert("ERRORE, RIPROVA DI NUOVO O UN'ALTRA VOLTA", error);
			      }
			    );
			}   

});


function sendMail(){
	window.location.href = "mailto:info.montanari.nicolo@gmail.com"
}