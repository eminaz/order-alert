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

FlowRouter.route('/register', {
    action: function(params, queryParams) {
	   	ReactLayout.render(Register)
    }
})

FlowRouter.route('/edit-menu', {
	action: function(params, queryParams) {
		ReactLayout.render(EditMenu)
	}
})

FlowRouter.route('/order', {
	action: function(params, queryParams) {
		ReactLayout.render(Order)
	}
})

