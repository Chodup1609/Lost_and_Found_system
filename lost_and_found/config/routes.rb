Rails.application.routes.draw do
  get "notifications/index"
  get "home/index"
  get "home/root"

  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations",
    passwords: "users/passwords"
  }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  root "home#root"

  resource :profile, only: [:show, :update]

  resources :items, only: %i[index] do
    get :report_lost_items, on: :collection, to: "items#new_lost_items"
    post :report_lost_items, on: :collection, to: "items#create_lost_items"
    get :view_lost_items, on: :collection, to: "items#view_lost_items"

    get :report_found_items, on: :collection, to: "items#new_found_items"
    post :report_found_items, on: :collection, to: "items#create_found_items"
    get :view_found_items, on: :collection, to: "items#view_found_items"

    get :report_returned_items, on: :collection, to: "items#new_returned_items"
    post :report_returned_items, on: :collection, to: "items#create_returned_items"
    get :view_returned_items, on: :collection, to: "items#view_returned_items"
    get :search, on: :collection, to: "items#search"
  end
  resources :notifications, only: [:index] do
    post :clear_all, on: :collection
  end
end
