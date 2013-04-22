TD.Views.TaskDetailView = Backbone.View.extend({
  render: function(){
    var that = this;

    var renderedContent = JST["tasks/detail"]({
      task: that.model //pass in the model
    });

    that.$el.html(renderedContent); //put rendered content into the provided $el by backbone
    return that;

  }
});