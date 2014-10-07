require 'spec_helper'

RSpec.describe User, :type => :model do
	it {should have_secure_password}
	it {should have_many(:teams)}
	it {should validate_presence_of(:name)}
	it {should validate_uniqueness_of(:email)}
end
