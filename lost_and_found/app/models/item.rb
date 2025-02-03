class Item < ApplicationRecord
  has_many_attached :images

  enum :status, { lost: 0, found: 1, returned: 2 }
  has_many :notifications
  belongs_to :user
end
