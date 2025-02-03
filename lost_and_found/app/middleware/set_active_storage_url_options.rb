module Middleware
  class SetActiveStorageUrlOptions
    def initialize(app)
      @app = app
    end

    def call(env)
      request = ActionDispatch::Request.new(env)
      ActiveStorage::Current.url_options = { host: request.base_url }
      @app.call(env)
    end
  end
end