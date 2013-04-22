Backbone.View => responsible for rendering the view

Backbone.View provides $el which is the div area for that view.

Pretty much all Views should have a render function which returns the html of that view portion

Views are about creating the html. In our router, it will put the html into the browser =>
(that.$rootEl.html(tasksListView.render().$el);)

ROUTER - in the methods called from the routes, it should create a new view and call render and then insert the html

MODELS = like AR Model. Model#escape -> to escape html such as < or >, and get the html safe character

COLLECTION = a collection of model objects. Pass a collection into the router when you instantiate it.

TODO: FIX PHASE 7


ON SAVE:
it will detect a new model in the collection so it'll render the list once. 
However, the id is not set yet.
Once the save is done - it'll update the task at which case it'll detect a change on the collection so it will rerender it correctly.