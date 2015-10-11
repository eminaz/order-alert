// counter starts at 0
Session.setDefault('counter', 0);

Meteor.startup(function () {
  // Populate html element with Id using given React class's render method
  React.render(<Login />, document.getElementById('login-page'))
})