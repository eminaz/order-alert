Template.sideMenu.rendered = function() {
	var checkForIonsideInterval = Meteor.setInterval(function checkForAPI() {
	  if(IonSideMenu.snapper && typeof IonSideMenu.snapper.state !== 'undefined') {
	    IonSideMenu.snapper.disable();
	    Meteor.clearInterval(checkForIonsideInterval);
	  }
	}, 100);
}