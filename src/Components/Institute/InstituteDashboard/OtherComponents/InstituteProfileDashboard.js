import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// import "../DashboardCSS/institute.css";
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
                  <h2> Indian Institute of Management (IIM) Lucknow</h2>

                  {/* <div className="fhghgdgg">
                    <h3>
                      <i className="fa-solid me-2 fa-sign-hanging"></i> Est. 2006
                    </h3>
                  </div> */}
                </div>
              </div>
              <div className="container_intdashboard">
                <div className="item_intdashboard bg-img bg1">
                  <i className="fa-solid fa-graduation-cap iconsize"></i>
                  <h3 className="text-1"> students Registered</h3>
                  <div className="valuedash text-1">600</div>
                </div>
                <div className="item_intdashboard bg-img bg2">
                  <i className="fa-solid fa-list-check iconsize"></i>
                  <h3 className="text-1 "> Mentor sessions completed</h3>{" "}
                  <div className="valuedash text-1">235</div>
                </div>
                <div className="item_intdashboard bg-img bg3">
                  <i className="fa-solid fa-calendar-week iconsize"></i>
                  <h3 className="text-1"> Upcoming sessions in next week</h3>
                  <div className="valuedash text-1">37</div>
                </div>
              </div>

              <div className="container_intdashboard">
                <div className="item_intdashboard bg-img bg1">
                  <i className="fa-solid fa-graduation-cap iconsize"></i>
                  <h3 className="text-1"> Top 5 Alumns</h3>
                  <div style={{ fontSize: "1rem" }}>
                    <div className="text-2">Aman Choudhary</div>
                    <div className="text-2">Gagan Verma</div>
                    <div className="text-2">Ankit Singh</div>
                    <div className="text-2">Raghv Verma</div>
                    <div className="text-2">Govind Raj</div>
                  </div>
                </div>
                <div className="item_intdashboard bg-img bg2">
                  <i className="fa-solid fa-percent iconsize"></i>
                  <h3 className="text-1 "> Percentage Of Total Alumns</h3>{" "}
                  <div className="valuedash text-1">75%</div>
                </div>
                <div className="item_intdashboard bg-img bg3">
                  <i className="fa-solid fa-calendar-week iconsize"></i>
                  <h3 className="text-1"> Guest Lectures Completed</h3>
                  <div className="valuedash text-1">108</div>
                </div>
              </div>
              <br />
              <br />

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
