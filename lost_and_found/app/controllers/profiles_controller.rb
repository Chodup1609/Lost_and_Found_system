class ProfilesController < ApplicationController
  def show
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update(profile_params)
      redirect_to profile_path, notice: "Profile updated successfully."
    else
      render :show, alert: "There was an error updating your profile."
    end
  end

  private

  def profile_params
    params.require(:user).permit(:name, :contact_number, :department, :course, :occupation, :profile_image)
  end
end
