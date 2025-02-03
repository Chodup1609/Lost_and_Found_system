class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :validatable
  # authentication_keys: [:username]

  # validates :username, presence: true, uniqueness: true
  has_one_attached :profile_image
  has_many :notifications
  has_many :items

  validate :email_domain_valid

  private

  def email_domain_valid
    # Regex to match only emails with the pattern you're allowing
    unless email =~ /^[a-zA-Z0-9]+\.jnec@rub\.edu\.bt$/
      errors.add(:email, "must be a valid JNEC email address")
    end
  end
end
