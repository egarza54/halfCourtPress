class Game < ActiveRecord::Base

	has_many :stats
	belongs_to :season

end
