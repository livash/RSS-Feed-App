class FeedsController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => Feed.all, :include => :entries }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
  
  def show
    feed = Feed.find(params[:id])
    feed.reload
    render json: feed
  end
end
