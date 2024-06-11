import React from "react";
import MenteeSavedJobCard from "./MenteeSavedJobCard";

const MenteeSavedJobs = () => {
  return (
    <div class="col-lg-10 ps-0">
      <div class="difuhtre_content p-4">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="mb-0">Your Saved Jobs</h4>
          <div class="custom-select btn btn-main" style={{ width: "10rem" }}>
            <select>
              <option value="0">Sort by</option>
              <option value="1">latest Jobs</option>
              <option value="2">Older Jobs</option>
              <option value="3">30+ Days</option>
            </select>
          </div>
        </div>

        <div class="row">
          <MenteeSavedJobCard /> <MenteeSavedJobCard /> <MenteeSavedJobCard />{" "}
          <MenteeSavedJobCard />
        </div>
      </div>
    </div>
  );
};

export default MenteeSavedJobs;
