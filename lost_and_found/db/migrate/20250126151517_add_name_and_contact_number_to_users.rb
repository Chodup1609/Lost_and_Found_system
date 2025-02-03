class AddNameAndContactNumberToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :name, :string
    add_column :users, :contact_number, :string
    add_column :users, :department, :string
    add_column :users, :course, :string
    add_column :users, :occupation, :string
  end
end
