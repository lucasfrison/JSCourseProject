let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

	let paciente = pacientes[i];
	let tdPeso   = paciente.querySelector(".info-peso");
	let tdAltura = paciente.querySelector(".info-altura");
	let tdImc    = paciente.querySelector(".info-imc");

	let peso   = tdPeso.textContent;
	let altura = tdAltura.textContent;

	let pesoEhValido = validarPeso(peso);
	let alturaEhValida = validarAltura(altura);
	
	if (!pesoEhValido) {
	    //console.log("Peso inválido!");
	    pesoEhValido = false;
	    tdImc.textContent = "Peso inválido!";
	    paciente.classList.add("paciente-invalido");
	}
	
	 if (!alturaEhValida) {
	    //console.log("Altura inválida!");
	    alturaEhValida = false;
	    tdImc.textContent = "Altura inválida!";
	    paciente.classList.add("paciente-invalido");
	}

	if (alturaEhValida && pesoEhValido) {
	    let imc = calcularImc(peso, altura);
	    tdImc.textContent = imc;
	} else {
		paciente.classList.add("paciente-invalido");
	    tdImc.textContent = "Altura e/ou peso inválidos!"
	}
}

function calcularImc(peso, altura) {
	let imc = peso / (altura * altura);
	return imc.toFixed(2);
}


function validarPeso(peso) {
	if (peso < 0 || peso >= 1000)
		return false
	else return true;
}

function validarAltura(altura) {
	if (altura < 0 || altura > 3)
		return false;
	else return true;
}
