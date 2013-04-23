Backbone.View => responsible for rendering the view

Backbone.View provides $el which is the div area for that view.

Pretty much all Views should have a render function which returns the html of that view portion

Views are about creating the html. In our router, it will put the html into the browser =>
(that.$rootEl.html(tasksListView.render().$el);)

ROUTER - in the methods called from the routes, it should create a new view and call render and then insert the html

MODELS = like AR Model. Model#escape -> to escape html such as < or >, and get the html safe character

COLLECTION = a collection of model objects. Pass a collection into the router when you instantiate it.


ON SAVE:
it will detect a new model in the collection so it'll render the list once. 
However, the id is not set yet.
Once the save is done - it'll update the task at which case it'll detect a change on the collection so it will rerender it correctly.


Backbone.history.start() looks for changes in the url fragment. Must be started to get things started


###########################################################

VIEW 
VIEWS manage a model or a collection
1. render function, will run a JST, set the returned html to your view.$el. Then return the View so you can chain events/set it to your actual html.
2. Views can also have events. Set events and define the function in your view
3. Views can also detect changes on a collection and perform a callback.

ROUTER
1. You should initialize your parameters in an initialize function. Define your collection and your root element.
2. Define your routes (rake routes)
3. 

MODEL:
1. pretty bare. You can pass in initial values in an initialize function (optional)

COLLECTION:
1. specify its model. You usually pass a collection plain objects. You will pass your collection object to the router


#################################

1. Create top level namespace at the top level (nothing backbone related)
  1. In the top level - Create blank models, collections, views, routers
  2. Have initialize method which takes some dom element + data
  3. In initialize - create a new router + start backbone history

2. Create the Collection

3. Create the Model

4. Create the View

5. Create the Template

