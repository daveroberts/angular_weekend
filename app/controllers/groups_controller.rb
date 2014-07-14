class GroupsController < ApplicationController
  def show
    @group = Group.find params[:id]
    render :json => @group.to_json(:include => :permissions)
  end
end
