TD.Routers.TasksRouter = Backbone.Router.extend({
  initialize: function (rootEl, tasks) { //this method is needed? we never call it. Is a backbone Method
    this.$rootEl = $(rootEl);             //like ruby initialize. always called when creating new instance
    this.tasks = tasks; 
  },

  routes: {
    "": "index",            //in router - the order matters. i put /new underneath /:id and it picked up
    "tasks/new": "new",     // the show method when I tried to render new

    "tasks/:id": "show" //like rake routes, url > action(function). when we hit tasks/:id, call the
                        // show action. Remove the listeneres in the view events
  },                    


  index: function(){
    var that = this;
    // var tasksListView = new TD.Views.TasksListView({
    //   collection: that.tasks
    // });

    that.$rootEl.empty();
    // that.$rootEl.html(tasksListView.render().$el); //originally this index function was 
    //always called when we initialized TD. However, we will have many pages.
  },

  show: function(id){
    var that = this;
    var task = that.tasks.get(id); //get retrieves a single model from a collection

    var taskDetailView = new TD.Views.TaskDetailView({
      model: task
    });
    that.$rootEl.html(taskDetailView.render().$el);
  },

  new: function(){
    var that = this;
    var newTaskView = new TD.Views.NewTaskView({
    collection: that.tasks}); //form - don't pass anything in? what about on fail?

    that.$rootEl.html(newTaskView.render().$el);
  }
});