require 'spec_helper'

RSpec.describe Stat, :type => :model do
	it {should belong_to(:game)}
end
