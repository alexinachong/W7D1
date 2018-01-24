Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api do
    resources :todos, except: [:new, :edit], defaults: {format: :json}
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
