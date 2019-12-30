const nav=document.getElementsByTagName("nav")[0];
const topoNav=nav.offsetTop;

window.onscroll=function(){
	fixarMenuNoTopo();
}

function fixarMenuNoTopo(){
	if(window.pageYOffset >= topoNav){
		nav.classList.add("fixoNoTopo");
	}else{
		nav.classList.remove("fixoNoTopo");
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