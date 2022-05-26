Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/dashboard', to: 'questions#dashboard'
  get '/ressources', to: 'pages#ressources'
  get 'qcm', to: 'questions#qcm'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :questions do
    resources :answers, only: [:edit, :update]
  end
end
