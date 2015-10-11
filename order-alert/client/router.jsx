FlowRouter.route('/', {
    triggersEnter: [function(context, redirect) {
	    redirect('/login');
	  }]
});

FlowRouter.route('/login', {
    action: function(params, queryParams) {
    	// if(typeof Login !== 'undefined') {
	   	//   ReactLayout.render(Login, {someParams: "something"});
	   	// }
	   	BlazeLayout.render('accounts');
    }
});