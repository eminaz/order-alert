FlowRouter.route('/', {
    triggersEnter: [function(context, redirect) {
	    redirect('/login')
	  }]
})

FlowRouter.route('/login', {
    action: function(params, queryParams) {
	   	ReactLayout.render(Login)
    }
})

FlowRouter.route('/edit-menu', {
    action: function(params, queryParams) {
	   	ReactLayout.render(EditMenu)
    }
})