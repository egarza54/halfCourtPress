class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.datetime :date
      t.string :location, :default => "home"
      t.string :opponent
      t.string :win, :default => nil
      t.integer :team_score, :default => nil
      t.integer :season_id
      t.boolean :gameover, :default => false

      t.timestamps
    end
  end
end
