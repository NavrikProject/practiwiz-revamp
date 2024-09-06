import React from "react";

const MentorSessionSetup = () => {
  return (
    <div class="col-lg-10 ps-0">
      <div class="difuhtre_content">
        <div class="ghdfgdfgfg">
          <div class="container my-4">
            <p class="h1">Choose your favorable Class Timing </p>
            <p>
              Our classes are flexible and designed to benefit our students and
              mentees looking for the best personalized training.{" "}
            </p>
            <div class="card my-4 shadow">
              <div class="card-body">
                <form action="" method="post">
                  <div class="row" style={{ alignItems: "center" }}>
                    <div class="col-md-10 dynamic-field" id="dynamic-field-1">
                      <div class="row">
                        <div class="col-md-4">
                          <div class="staresd">
                            <div class="imgup">
                              <label for="field" class="hidden-md">
                                <b>Month</b>
                              </label>
                              {/* <!--<input type="file" class="form-control">--> */}
                              <select class="form-control" name="" id="">
                                <option>January</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label for="field" class="hidden-md">
                              <b>Day</b>
                            </label>
                            <select class="form-control" name="" id="">
                              <option>01</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>
                              <b>Time</b>
                            </label>
                            <input type="time" class="form-control" name="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2 mt-30 append-buttons">
                      <div class="clearfix">
                        <button
                          type="button"
                          id="add-button"
                          class="btn btn-secondary float-left text-uppercase shadow-sm"
                        >
                          <i class="fa fa-plus fa-fw"></i>
                        </button>
                        <button
                          type="button"
                          id="remove-button"
                          class="btn btn-secondary float-left text-uppercase ml-1"
                          disabled="disabled"
                        >
                          <i class="fa fa-minus fa-fw"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* <!--<footer>-->
                            <!--    Designed by &nbsp; <a class="class-link" href="https://www.instagram.com/pradeeptomar21/" target="blank">Pradeep Singh Tomar</a>-->
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
