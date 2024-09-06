import React from "react";

const MentorChangePwd = () => {
  return (
    <div ClassName="col-lg-10 ps-0">
      <div ClassName="hiniertvrer_change_password">
        <div ClassName="container">
          <div ClassName="mentor-prf-settings py-5">
            <h3>Change Your Password</h3>

            <h5 ClassName="mb-3">Update your Password</h5>

            <form>
              <div ClassName="mb-3">
                <label ClassName="label-control">Old Password</label>

                <input ClassName="form-control" placeholder="Old Password" />
              </div>

              <div ClassName="mb-3">
                <label ClassName="label-control">New Password</label>

                <input ClassName="form-control" placeholder="New Password" />
              </div>

              <div ClassName="mb-3">
                <label ClassName="label-control">Confirm New Password</label>

                <input
                  ClassName="form-control"
                  placeholder="Confirm New Password"
                />
              </div>

              <button ClassName="btn btn-main">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorChangePwd;
