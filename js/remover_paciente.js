let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(ev) {
	ev.target.parentNode.classList.add("fadeOut");
	setTimeout(function() {
		ev.target.parentNode.remove();
	}, 500);
	
});
