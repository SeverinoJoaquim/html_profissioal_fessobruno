function controleMenu(){
	const menu=document.getElementById("menu");
	if(menu.style.display=="block"){
		menu.style.display="none";
	}else{
		menu.style.display="block";
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