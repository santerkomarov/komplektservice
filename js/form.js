"use strict"


const btn = document.getElementById('customerOrder');

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		
		e.preventDefault();
		
		form.classList.add('_sending');
		btn.disabled = true;
		btn.innerHTML = "ЖДИТЕ";

		let formData = new FormData(form);

		let responce = await fetch('mail.php', {
			method : 'POST',
			body : formData
		});

		if (responce.ok) {
			let result = await responce.json();
			form.classList.remove('_sending');
			modalShow(yes);
			// alert(result.message);
			form.reset();
			setTimeout(function(){
				btn.innerHTML = "ОТПРАВИТЬ";
				btn.disabled = false;
				},6000);		


		} else {
			form.classList.remove('_sending');
			// alert('Ошибка отправки');
			modalShow(no);
			form.reset();
			setTimeout(function(){
				btn.innerHTML = "ОТПРАВИТЬ";
				btn.disabled = false;
				},6000);

		}	
	}
})

// ========= modal =======
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];
const yes = document.getElementById('yes');
const no = document.getElementById('no');


function modalShow(value) {
    modal.style.display = "block";
    document.body.style.position = 'fixed';

    if (value == yes) {
    	yes.style.display = "block";
    } else {
    	no.style.display = "block";
    }

}

span.onclick = function() {
   modal.style.display = "none";
   document.body.style.position = 'initial';
  
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.position = 'initial';
      
    }
}
// ========== end modal ==========