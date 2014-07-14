class Permission < ActiveRecord::Base
  has_many :group_permissions
  has_many :groups, through: :group_permissions
end
