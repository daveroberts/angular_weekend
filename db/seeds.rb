# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

admin_group = Group.create({name:'Admin'})
casual_group = Group.create({name:'Casual'})
users = User.create([{username: 'Dave', group: admin_group},{username: 'Jen', group: casual_group}])
control_user_permission = Permission.create({name: 'Control other users'})
play_games_permission = Permission.create({name: 'Play video games'})
admin_group.permissions << control_user_permission
admin_group.permissions << play_games_permission
admin_group.save
casual_group.permissions << play_games_permission
casual_group.save
