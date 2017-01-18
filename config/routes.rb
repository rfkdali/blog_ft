Rails.application.routes.draw do
  root "articles#index"
  resources :articles

  get 'js_articles' => "articles#js_articles"
end
