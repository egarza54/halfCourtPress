class CreateSeasons < ActiveRecord::Migration
  def change
    create_table :seasons do |t|
    	t.string :name
      t.integer :team_id
      t.timestamps
    end
  end
end
