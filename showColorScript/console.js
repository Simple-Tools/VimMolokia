const body = document.getElementsByTagName('body')[0];
const content = body.innerText;
let colorReg = /#\w{6}/g;
const showInConsole = function(){
	const colorArray = content.match(colorReg);
	for(let color of colorArray){
		console.log('%c '+color,'background:'+color,color);
	}
};
showInConsole();
