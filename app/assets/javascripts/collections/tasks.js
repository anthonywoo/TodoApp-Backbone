TD.Collections.Tasks = Backbone.Collection.extend({
  model: TD.Models.Task // ??? not a instance of a new task??? 
                        // so model is provided by Backbone. Not what I think it is
                        // we are passing in an array of raw objects, since we defined the model, 
                        // the objects are converted to the specified model

})