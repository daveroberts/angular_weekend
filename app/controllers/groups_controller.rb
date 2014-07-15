class GroupsController < ApplicationController
  def index
    @groups = Group.all
    render json: @groups.to_json(include: :permissions)
  end
  def show
    @group = Group.find params[:id]
    render :json => @group.to_json(:include => :permissions)
  end
end
