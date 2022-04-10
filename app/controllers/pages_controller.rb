class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :references ]

  def home
  end

  def references
  end
end
