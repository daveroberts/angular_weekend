class User < ActiveRecord::Base
  belongs_to :group
  has_many :permissions, through: :group
end
