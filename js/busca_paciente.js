let botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
	
	xhr.addEventListener("load", function() {
		let erroAjax = document.querySelector("#erro-ajax");
		if (xhr.status == 200) {
			erroAjax.classList.add("invisivel");
			let pacientes = JSON.parse(this.responseText);
		
			pacientes.forEach(function(paciente) {
				adicionarPaciente(paciente);
			});
		} else {
			console.log(xhr.status);
			console.log(xhr.response);
			erroAjax.classList.remove("invisivel");
		}
		
	});
	
	xhr.send();
	
});