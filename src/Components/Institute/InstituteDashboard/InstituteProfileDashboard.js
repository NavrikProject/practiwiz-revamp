import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../InstituteProfile/institute.css";
import "swiper/css";
import "swiper/css/navigation";

const InstituteProfileDashboard = () => {
  return (
    <>
      <div className="col-lg-10 ps-0">
        <div className="difuhtre_content">
          {/* <div className="dfknhguyfdgf"> */}
          <div className="container-fluid px-5">
            <div className="gtyfdgfgf">
              <div className="col-lg-8">
                <div className="ndfhjvdfv">
                  <h2>Brainware Group Of Institution</h2>

                  <div className="fhghgdgg">
                    <h3>
                      <i className="fa-solid me-2 fa-sign-hanging"></i> Est. 2006
                    </h3>
                  </div>
                </div>
              </div>
              <div className="container_intdashboard">
                <div className="item_intdashboard bg-img bg1">
                  <i className="fa-solid fa-graduation-cap iconsize"></i>
                  <h3 className="text-1"> Mentee Register</h3>
                  <div className="valuedash text-1">49,444</div>
                </div>
                <div className="item_intdashboard bg-img bg2">
                  <i className="fa-solid fa-list-check iconsize"></i>
                  <h3 className="text-1 "> Alums session Completed</h3>{" "}
                  <div className="valuedash text-1">49,444</div>
                </div>
                <div className="item_intdashboard bg-img bg3">
                  <i className="fa-solid fa-calendar-week iconsize"></i>
                  <h3 className="text-1"> Session in next week</h3>
                  <div className="valuedash text-1">49,444</div>
                </div>
              </div>

              <div className="animation">
                <Bar
                  data={{
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apl",
                      "May",
                      "Jun",
                      "July",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    datasets: [
                      {
                        label: "Mentor",
                        data: [200, 300, 400],
                      },
                      {
                        label: "session Completed",
                        data: [250, 200, 300],
                      },
                      {
                        label: "Next session",
                        data: [350, 500, 800],
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstituteProfileDashboard;
