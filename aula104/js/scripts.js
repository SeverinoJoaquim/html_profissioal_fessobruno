function mostrarDropdown(){
	document.getElementsByClassName("dropdownConteudo")[0].classList.toggle("mostrarDropdown");
}

window.onclick=function(event){
	if(!event.target.matches('.btnDropdown')){
		var dropdowns=document.getElementsByClassName("dropdownConteudo");
		var i;
		for(i=0;i<dropdowns.length;i++){
			var abertoDropdown=dropdowns[i];
			if(abertoDropdown.classList.contains('mostrarDropdown')){
				abertoDropdown.classList.remove('mostrarDropdown');
			}
		}
	}
}

const menus=document.querySelectorAll('[data-menu]');
const cssAtivo='ativo';

menus.forEach(function(e){
	e.addEventListener('click',function(){
		for(i=0;i<menus.length;i++){
			menus[i].classList.remove(cssAtivo);
		}
		e.classList.add(cssAtivo);
	})
});