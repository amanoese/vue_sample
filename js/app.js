var html = require('../app.html');
document.body.innerHTML += html;
require('../css/style.css');
require('../css/app.css');

var Vue = require('vue');
var vm = new Vue({
	el: '#app',
	data: {
		text: "hoge"
	},
	methods : {
		alert :function(){
			alert(this.text);
		}
	}
});
