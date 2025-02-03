class NotificationsController < ApplicationController
  def index
    @notifications = current_user.notifications
  end

  def clear_all
    current_user.notifications.delete_all
    @notifications = current_user.notifications.all
    render turbo_stream: turbo_stream.replace('notifications', partial: 'notifications/notifications_list')
  end
end
