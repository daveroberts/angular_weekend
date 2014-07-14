Rails.application.routes.draw do
  resources :users
  resources :groups
  resources :permissions
  root "main#index"
end
