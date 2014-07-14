class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_bcrypt
      t.string :group_id
      t.timestamps
    end
  end
end
