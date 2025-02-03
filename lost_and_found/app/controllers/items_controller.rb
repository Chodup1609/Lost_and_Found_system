class ItemsController < ApplicationController
  def new_lost_items
    @lost_item = Item.new(status: 'lost')
  end

  def view_lost_items
    @items = Item.lost.page(params[:page] || 1).per(4) # Pagination: 4 items per page
  end

  def new_found_items
    @found_item = Item.new(status: 'found')
  end

  def view_found_items
    @items = Item.found.page(params[:page] || 1).per(4) # Pagination: 4 items per page
  end

  def new_returned_items
    @returned_item = Item.new(status: 'returned')
  end

  def view_returned_items
    @items = Item.returned.page(params[:page] || 1).per(4) # Pagination: 4 items per page
  end

  def create_lost_items
    Item.create!(item_params.merge(status: 'lost', user: current_user))

    flash[:notice] = "Lost Item successfully reported!"
    redirect_to view_lost_items_items_path
  end

  def create_found_items
    if params.dig(:item, :report_type) == 'existing'
      item.found!
      Notification.create!(
        title: "Item Found: #{item.name}",
        message: "A(An) #{item.name} matching your report has been found.",
        item: item,
        user: item.user
      )
    else
      Item.create!(item_params.merge(status: 'found', user: current_user))
    end

    flash[:notice] = "Found Item successfully reported!"
    redirect_to view_found_items_items_path
  end

  def create_returned_items
    item.update!(
      status: 'returned',
      owner_name: item_params[:owner_name],
      finder_name: item_params[:finder_name]
    )
    Notification.create!(
      title: "Item Returned: #{item.name}",
      message: "A(An) #{item.name} matching your report has been returned.",
      item: item,
      user: item.user
    )

    flash[:notice] = "Returned Item successfully reported!"
    redirect_to view_returned_items_items_path
  end

  def search
    @items = Item.where("LOWER(name) LIKE ?", "%#{params[:query].downcase}%").page(params[:page] || 1).per(4)
  end

  private

  def item
    @item ||= Item.find(params.dig(:item, :item_id))
  end

  def item_params
    params.require(:item).permit(
      :name,
      :description,
      :location,
      :contact_information,
      :found_location,
      :owner_name,
      :finder_name,
      images: []
    )
  end
end
