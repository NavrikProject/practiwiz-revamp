import React from "react";

const MentorChangePwd = () => {
  return (
    <div className="col-lg-10 ps-0">
      <div className="hiniertvrer_change_password">
        <div className="container">
          <div className="mentor-prf-settings py-5">
            <h3>Change Your Password</h3>

            <h5 className="mb-3">Update your Password</h5>

            <form>
              <div className="mb-3">
                <label className="label-control">Old Password</label>

                <input className="form-control" placeholder="Old Password" />
              </div>

              <div className="mb-3">
                <label className="label-control">New Password</label>

                <input className="form-control" placeholder="New Password" />
              </div>

              <div className="mb-3">
                <label className="label-control">Confirm New Password</label>

                <input
                  className="form-control"
                  placeholder="Confirm New Password"
                />
              </div>

              <button className="btn btn-main">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorChangePwd;
