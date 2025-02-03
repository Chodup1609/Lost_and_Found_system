class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:root]

  def index
  end

  def root
  end
end
