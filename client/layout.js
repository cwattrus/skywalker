Template.nav.helpers({
  isActive: function(template){
    var currentRoute = Router.current();
    console.log(template);

    return currentRoute &&
      template.toLowerCase() === currentRoute.route.getName().toLowerCase() ? 'active' : '';
  }
});
