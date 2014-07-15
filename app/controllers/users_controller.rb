class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users.to_json(include: [:group, :permissions])
  end
  def show
    @user = User.find params[:id]
    render json: @user.to_json(include: [:permissions, :group])
  end
end
