require 'spec_helper'

RSpec.describe Team, :type => :model do
	it {should belong_to(:user)}
	it {should have_many(:seasons)}

end
