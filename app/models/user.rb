class User < ActiveRecord::Base
  attr_accessible :password_digest, :session_token, :username
end
