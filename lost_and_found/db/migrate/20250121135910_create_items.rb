class CreateItems < ActiveRecord::Migration[8.0]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :description
      t.string :location, null: false
      t.string :contact_information, null: false
      t.string :found_location
      t.string :owner_name
      t.string :finder_name
      t.integer :status, default: 0, null: false # Enum for lost/found/returned
      t.timestamps
    end
  end
end

