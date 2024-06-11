import React from "react";

const MentorChangePwd = () => {
  return (
    <div class="col-lg-10 ps-0">
      <div class="hiniertvrer_change_password">
        <div class="container">
          <div class="mentor-prf-settings py-5">
            <h3>Change Your Password</h3>

            <h5 class="mb-3">Update your Password</h5>

            <form>
              <div class="mb-3">
                <label class="label-control">Old Password</label>

                <input class="form-control" placeholder="Old Password" />
              </div>

              <div class="mb-3">
                <label class="label-control">New Password</label>

                <input class="form-control" placeholder="New Password" />
              </div>

              <div class="mb-3">
                <label class="label-control">Confirm New Password</label>

                <input
                  class="form-control"
                  placeholder="Confirm New Password"
                />
              </div>

              <button class="btn btn-main">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorChangePwd;
