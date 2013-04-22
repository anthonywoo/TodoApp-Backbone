TD.Views.TasksListView = Backbone.View.extend({ //
  // events: {
  //   "click li.task": "showTask" //event handler, when click li.task -> run showTask
  // },

  initialize: function(){
    var that = this;
    var renderCallback = that.render.bind(that);
    that.collection.on("add", renderCallback); //what is this?      first call
    that.collection.on("change", renderCallback); //2 calls?        second call
    that.collection.on("remove", renderCallback);
  },

  render: function(){
    var that = this;
    console.log("LIST RENDER")
    console.log(that.collection)
    var renderedContent = JST["tasks/list"]({
      tasks: that.collection //we pass in the collection
    });
    // var ul = $("<ul></ul>");
    // _(that.collection).each(function (task) {
    //   ul.append(
    //     $("<li></li>").text(task.title)
    //   )
    // });

    that.$el.html(renderedContent); 
    return that //return the view with the data in the provided $el
  },

  // showTask: function(el){
  //   console.log("You clicked task #" + $(el.target).attr("data-id") + "!! nice job!")
  // }

});