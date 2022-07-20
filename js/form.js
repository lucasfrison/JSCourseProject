let botaoAdicionar = document.querySelector("#adicionar-paciente");
let form    = document.querySelector("#form-adiciona");

botaoAdicionar.addEventListener("click", function(ev) {
	ev.preventDefault();
	let paciente   = cadastrarPaciente(form);
	
    let erros = validarPaciente(paciente);

    if (erros.length > 0){
    	exibeMensagensErro(erros);
        return;
    }
	
	adicionarPaciente(paciente);
	
	form.reset();
	
	let mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
});

function exibeMensagensErro(erros) {
	
	let ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro) {
		let li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
	
}

function cadastrarPaciente(form) {
	
	let paciente = {
		nome    : form.nome.value,
		peso    : form.peso.value,
		altura  : form.altura.value,
		gordura : form.gordura.value,
		imc     : calcularImc(form.peso.value, form.altura.value)
	}
	
	return paciente;
	
}

function adicionarPaciente(paciente) {
	let pacienteTr = montarTr(paciente);
	let tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function montarTr(paciente) {
	let pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	
	pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));
	
	return pacienteTr;
}

function montarTd(dado, classe) {
	let td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validarPaciente(paciente) {

    let erros = [];

    if (paciente.nome.length == 0) {
    	erros.push("Preencha o campo nome!");
    }
    
    if (!validarPeso(paciente.peso)) {
        erros.push("Peso é inválido!");
    }

    if (!validarAltura(paciente.altura)) {
        erros.push("Altura é inválida!");
    }
    
    if (paciente.gordura.length == 0) {
    	erros.push("Preencha o campo gordura!");
    }
    
    if (paciente.peso.length == 0) {
    	erros.push("Preencha o campo peso!");
    }
    
    if (paciente.altura.length == 0) {
    	erros.push("Preencha o campo altura!");
    }

    return erros;
}