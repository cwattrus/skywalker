Router.route("/", {
  name:"home",
  template:"home",
  layout: "applicationLayout",
  action: function () {
    // render all templates and regions for this route
    this.render();
  }
});

Router.route("/skills", {
  name:"skills",
  template:"skills",
  layout: "applicationLayout",
  action: function () {
    // render all templates and regions for this route
    this.render();
  }
});
