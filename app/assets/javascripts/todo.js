window.TD = {

  Models: {}, //namespacing, eventually we'll create TD.Models.Tasks?
  Collections: {},
  Views: {},
  Routers: {},

  // initialize: function (rootEl, tasks) {
  //   var tasksListView = new TD.Views.TasksListView({
  //     collection: tasks
  //   });
    
  //   $(rootEl).html(tasksListView.render().$el);
  // }

  initialize: function ($sidebar, $content, tasksData) {

    var tasks = new TD.Collections.Tasks(tasksData); //so we pass into the collection all the tasks
    this.installSidebar($sidebar, tasks);

    new TD.Routers.TasksRouter($content, tasks); // we are now passing in the collection to the router
    Backbone.history.start();
  },

  installSidebar: function($sidebar, tasks){
    var that = this;
    var tasksListView = new TD.Views.TasksListView({
      collection:tasks
    });

    $sidebar.html(tasksListView.render().$el);

  }
};