class CreateLeaves < ActiveRecord::Migration[7.1]
  def change
    create_table :leaves do |t|
      t.integer :user_id
      t.string :leave_type
      t.datetime :start_date
      t.datetime :end_date
      t.text :half_days
      t.boolean :editable, default: true
      t.string :partial_days, default: 'None'
      t.string :gcal_event_id, limit: 255

      t.timestamps null: false
    end
  end
end
