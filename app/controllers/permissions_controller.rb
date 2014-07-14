class PermissionsController < ApplicationController
  def index
    @permissions = Permission.all
    render json: @permissions.to_json
  end
  def show
    @permission = Permission.find params[:id]
    render :json => @permission.to_json
  end
end
