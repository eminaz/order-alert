Template.layout.rendered = function() {
	if(IonSideMenu.snapper) {
		IonSideMenu.snapper.disable();
	}	
	Session.set('layoutReady', true);
}