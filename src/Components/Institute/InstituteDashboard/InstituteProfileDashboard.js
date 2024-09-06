import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../InstituteProfile/institute.css";
import "swiper/css";
import "swiper/css/navigation";

const InstituteProfileDashboard = () => {
  return (
    <>
      <div ClassName="col-lg-10 ps-0">
        <div ClassName="difuhtre_content">
          {/* <div ClassName="dfknhguyfdgf"> */}
          <div ClassName="container-fluid px-5">
            <div ClassName="gtyfdgfgf">
              <div ClassName="col-lg-8">
                <div ClassName="ndfhjvdfv">
                  <h2>Brainware Group Of Institution</h2>

                  <div ClassName="fhghgdgg">
                    <h3>
                      <i ClassName="fa-solid me-2 fa-sign-hanging"></i> Est. 2006
                    </h3>
                  </div>
                </div>
              </div>
              <div className="container_intdashboard">
                <div className="item_intdashboard bg-img bg1">
                  <i ClassName="fa-solid fa-graduation-cap iconsize"></i>
                  <h3 className="text-1"> Mentee Register</h3>
                  <div className="valuedash text-1">49,444</div>
                </div>
                <div className="item_intdashboard bg-img bg2">
                  <i ClassName="fa-solid fa-list-check iconsize"></i>
                  <h3 className="text-1 "> Alums session Completed</h3>{" "}
                  <div className="valuedash text-1">49,444</div>
                </div>
                <div className="item_intdashboard bg-img bg3">
                  <i ClassName="fa-solid fa-calendar-week iconsize"></i>
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
