Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

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

Router.route("/work", {
  name:"work",
  template:"work",
  layout: "applicationLayout",
  action: function () {
    // render all templates and regions for this route
    this.render();
  }
});

Router.route("/projects", {
  name:"projects",
  template:"projects",
  layout: "applicationLayout",
  action: function () {
    // render all templates and regions for this route
    this.render();
  }
});
