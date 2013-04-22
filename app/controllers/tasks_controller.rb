class TasksController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def create
    @task = Task.new(params[:task])

    if @task.save
      render :json => @task
    else
      render :json => @task.errors, :status => 442
    end
  end

  def index
    @task = Task.all
    respond_to do |format|
      format.html {render :index}
      format.json {render :json => @tasks}
    end
  end

end
