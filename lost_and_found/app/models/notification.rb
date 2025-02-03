class Notification < ApplicationRecord
  validates :title, presence: true
  validates :message, presence: true

  belongs_to :user
  belongs_to :item
end
