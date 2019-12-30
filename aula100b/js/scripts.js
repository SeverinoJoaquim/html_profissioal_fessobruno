window.onscroll=function(){
	rolagem();
};

function rolagem(){
	if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
		document.getElementsByTagName("header")[0].style.padding="30px 10px";
		document.getElementById("logo").style.fontSize="25px";
	}else{
		document.getElementsByTagName("header")[0].style.padding="80px 10px";
		document.getElementById("logo").style.fontSize="35px";
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