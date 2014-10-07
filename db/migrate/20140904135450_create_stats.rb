class CreateStats < ActiveRecord::Migration
  def change
    create_table :stats do |t|
    	t.integer :game_id, :x_coord, :y_coord
    	t.boolean :made
    	t.integer :stat_type

      t.timestamps
    end
  end
end
