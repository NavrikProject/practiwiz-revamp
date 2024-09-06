import React from "react";

const MentorSessionSetup = () => {
  return (
    <div ClassName="col-lg-10 ps-0">
      <div ClassName="difuhtre_content">
        <div ClassName="ghdfgdfgfg">
          <div ClassName="container my-4">
            <p ClassName="h1">Choose your favorable Class Timing </p>
            <p>
              Our classes are flexible and designed to benefit our students and
              mentees looking for the best personalized training.{" "}
            </p>
            <div ClassName="card my-4 shadow">
              <div ClassName="card-body">
                <form action="" method="post">
                  <div ClassName="row" style={{ alignItems: "center" }}>
                    <div ClassName="col-md-10 dynamic-field" id="dynamic-field-1">
                      <div ClassName="row">
                        <div ClassName="col-md-4">
                          <div ClassName="staresd">
                            <div ClassName="imgup">
                              <label for="field" ClassName="hidden-md">
                                <b>Month</b>
                              </label>
                              {/* <!--<input type="file" ClassName="form-control">--> */}
                              <select ClassName="form-control" name="" id="">
                                <option>January</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div ClassName="col-md-4">
                          <div ClassName="form-group">
                            <label for="field" ClassName="hidden-md">
                              <b>Day</b>
                            </label>
                            <select ClassName="form-control" name="" id="">
                              <option>01</option>
                            </select>
                          </div>
                        </div>
                        <div ClassName="col-md-4">
                          <div ClassName="form-group">
                            <label>
                              <b>Time</b>
                            </label>
                            <input type="time" ClassName="form-control" name="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div ClassName="col-md-2 mt-30 append-buttons">
                      <div ClassName="clearfix">
                        <button
                          type="button"
                          id="add-button"
                          ClassName="btn btn-secondary float-left text-uppercase shadow-sm"
                        >
                          <i ClassName="fa fa-plus fa-fw"></i>
                        </button>
                        <button
                          type="button"
                          id="remove-button"
                          ClassName="btn btn-secondary float-left text-uppercase ml-1"
                          disabled="disabled"
                        >
                          <i ClassName="fa fa-minus fa-fw"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* <!--<footer>-->
                            <!--    Designed by &nbsp; <a ClassName="class-link" href="https://www.instagram.com/pradeeptomar21/" target="blank">Pradeep Singh Tomar</a>-->
                            <!--  </footer>--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSessionSetup;
