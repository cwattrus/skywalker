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
  },
  onAfterAction: function() {
    if (!Meteor.isClient) {
      return;
    }
    SEO.set({
      title: "Hello Human - Craig Wattrus",
    });
  }
});

Router.route("/skills", {
  name:"skills",
  template:"skills",
  layout: "applicationLayout",
  action: function () {
    // render all templates and regions for this route
    this.render();
  },
  onAfterAction: function() {
    if (!Meteor.isClient) {
      return;
    }
    SEO.set({
      title: "My Skillset - Craig Wattrus",
    });
  }

});

Router.route("/work", {
  name:"work",
  template:"work",
  layout: "applicationLayout",
  action: function () {
    // render all templates and regions for this route
    this.render();
  },
  onAfterAction: function() {
    if (!Meteor.isClient) {
      return;
    }
    SEO.set({
      title: "My Work - Craig Wattrus",
    });
  }

});

Router.route("/projects", {
  name:"projects",
  template:"projects",
  layout: "applicationLayout",
  action: function () {
    // render all templates and regions for this route
    this.render();
  },
  onAfterAction: function() {
    if (!Meteor.isClient) {
      return;
    }
    SEO.set({
      title: "Side Projects - Craig Wattrus",
    });
  }

});
