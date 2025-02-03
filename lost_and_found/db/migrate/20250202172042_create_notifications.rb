class CreateNotifications < ActiveRecord::Migration[8.0]
  def change
    create_table :notifications do |t|
      t.string :title
      t.text :message

      t.timestamps
      t.belongs_to :user
      t.belongs_to :item
    end
  end
end
