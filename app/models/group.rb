class Group < ActiveRecord::Base
  has_many :users
  has_many :group_permissions
  has_many :permissions, through: :group_permissions
end
