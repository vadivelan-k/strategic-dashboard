class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :title
      t.string :telegram_ref_id
      t.string :first_name
      t.string :last_name
      t.string :cognizant_user_id, limit: 50
      t.string :cognizant_username, limit: 150
      t.boolean :reading_username, default: false
      t.boolean :reading_user_id, default: false
      t.string :team_name, limit: 500
      t.boolean :reading_team_name, default: false

      t.timestamps null: false
    end

    add_index :users, :telegram_ref_id
  end
end
