var html = require('../selectrender.html');
document.body.innerHTML += html;

var Vue = require('vue');
var vm = new Vue({
	el: '#ok',
	data: {
		ok : true
	},
	methods : {
		toggle :function(){
			this.ok = !this.ok;
		}
	}
});
