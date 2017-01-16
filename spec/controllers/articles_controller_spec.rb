require 'rails_helper'

RSpec.describe ArticlesController, type: :controller do

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    let(:article) { FactoryGirl.attributes_for(:article) }

    it "redirect to articles" do
      post :create, params: { article: article }
      expect(response).to redirect_to(articles_path)
    end
  end

  describe "GET #show" do
    let(:article) { FactoryGirl.create(:article) }

    it "returns http success" do
      get :show, params: { id: article }
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT #update" do
    let(:article) { FactoryGirl.create(:article) }

    it "returns http success" do
      put :update, params: { id: article, article:{ title: "Titre update" } }
      expect(response).to redirect_to(articles_path)
    end

    it "updates the title" do
      put :update, params: { id: article, article:{ title: "Titre update" } }
      article.reload
      expect(article.title).to eq('Titre update')
    end
  end


  describe "DELETE #destroy" do
    let(:article) { FactoryGirl.create(:article) }

    it "returns http success" do
      delete :destroy, params: { id: article }
      expect(response).to redirect_to(articles_path)
    end
  end

end
