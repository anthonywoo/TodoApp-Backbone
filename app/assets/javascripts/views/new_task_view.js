TD.Views.NewTaskView = Backbone.View.extend({
  events: {
    "click button.submit": "submit"
  },

  render: function(){
    var that = this
    var renderedContent = JST["tasks/new"]();
    that.$el.html(renderedContent);
    return that
  },

  submit: function() {

    var that = this;
    var task = new TD.Models.Task({
      title: that.$("input[name=task\\[title\\]]").val() //is this the best way to get the value?
    });
    task.save(); //where is my id? asynchronous call - so we can't see the id after we do a 'save'
    that.collection.add(task);
    // task.save();
    Backbone.history.navigate("#/"); //look at history
  }

});