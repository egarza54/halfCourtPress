
class User < ActiveRecord::Base
	has_many :teams
	has_secure_password
	validates :email, uniqueness: true, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, message: "has wrong format"}
  validates :name, presence: true
  validates :password, :length => {:minimum => 6}
end
