class AddUserToItem < ActiveRecord::Migration[8.0]
  def change
    add_reference :items, :user
  end
end
