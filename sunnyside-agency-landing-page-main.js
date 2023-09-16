'use strict'; 

const colors ={
	'Almost White': 'hsl(0, 0%, 98%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
	'Overlay': 'hsla(8, 24%, 2%, 0.5)',
};

$(window).resize(function(){
	location.reload();
});
const onClick = (selector, handler) => {
  document.querySelector(selector).addEventListener('click', handler,false);
};

const addCss =(selector,css)=>{
	$(selector).css(css);
}

$(window).on('load',function(){
	 const nav = document.querySelector('#nav');
	 const btn = document.querySelector('#menubutton');
	 
	 onClick('#menubutton',function(){
		//addCss(nav,{'position':'relative','right':'140px'});
     });
});