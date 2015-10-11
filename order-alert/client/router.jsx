FlowRouter.route('/', {
    triggersEnter: [function(context, redirect) {
	    redirect('/login');
	  }]
});

FlowRouter.route('/login', {
    action: function(params, queryParams) {
	   	BlazeLayout.render('accounts');
	   	ReactLayout.render(EditMenu);
    }
});