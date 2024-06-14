import React from "react";
import "./institutemessage.css";
const InstituteMessages = () => {
  return (
    <div class="col-lg-10 ps-0">
      <div class="mentor_dash_msge">
        <div id="frame">
          <div id="sidepanel">
            <div id="contacts">
              <ul class="ps-0">
                <li class="contact">
                  <div class="wrap">
                    <span class="contact-status online"></span>

                    <img
                      src="http://emilcarlsson.se/assets/louislitt.png"
                      alt=""
                    />

                    <div class="meta">
                      <p class="name">Louis Litt</p>
                    </div>
                  </div>
                </li>

                <li class="contact active">
                  <div class="wrap">
                    <img
                      src="http://emilcarlsson.se/assets/harveyspecter.png"
                      alt=""
                    />

                    <div class="meta">
                      <p class="name">Harvey Specter</p>
                    </div>
                  </div>
                </li>

                <li class="contact">
                  <div class="wrap">
                    <span class="contact-status away"></span>
                    <img
                      src="http://emilcarlsson.se/assets/rachelzane.png"
                      alt=""
                    />
                    <div class="meta">
                      <p class="name">Rachel Zane</p>
                    </div>
                  </div>
                </li>

                <li class="contact">
                  <div class="wrap">
                    <span class="contact-status online"></span>
                    <img
                      src="http://emilcarlsson.se/assets/donnapaulsen.png"
                      alt=""
                    />
                    <div class="meta">
                      <p class="name">Donna Paulsen</p>
                    </div>
                  </div>
                </li>

                <li class="contact">
                  <div class="wrap">
                    <span class="contact-status busy"></span>
                    <img
                      src="http://emilcarlsson.se/assets/jessicapearson.png"
                      alt=""
                    />
                    <div class="meta">
                      <p class="name">Jessica Pearson</p>
                    </div>
                  </div>
                </li>

                <li class="contact">
                  <div class="wrap">
                    <span class="contact-status"></span>
                    <img
                      src="http://emilcarlsson.se/assets/haroldgunderson.png"
                      alt=""
                    />
                    <div class="meta">
                      <p class="name">Harold Gunderson</p>
                    </div>
                  </div>
                </li>

                <li class="contact">
                  <div class="wrap">
                    <span class="contact-status"></span>
                    <img
                      src="http://emilcarlsson.se/assets/danielhardman.png"
                      alt=""
                    />
                    <div class="meta">
                      <p class="name">Daniel Hardman</p>
                    </div>
                  </div>
                </li>

                <li class="contact">
                  <div class="wrap">
                    <span class="contact-status busy"></span>
                    <img
                      src="http://emilcarlsson.se/assets/katrinabennett.png"
                      alt=""
                    />
                    <div class="meta">
                      <p class="name">Katrina Bennett</p>
                    </div>
                  </div>
                </li>

                <li class="contact">
                  <div class="wrap">
                    <span class="contact-status"></span>
                    <img
                      src="http://emilcarlsson.se/assets/charlesforstman.png"
                      alt=""
                    />
                    <div class="meta">
                      <p class="name">Charles Forstman</p>
                    </div>
                  </div>
                </li>

                <li class="contact">
                  <div class="wrap">
                    <span class="contact-status"></span>
                    <img
                      src="http://emilcarlsson.se/assets/jonathansidwell.png"
                      alt=""
                    />
                    <div class="meta">
                      <p class="name">Jonathan Sidwell</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="content">
            <div class="contact-profile d-flex align-items-center p-2">
              <img
                src="http://emilcarlsson.se/assets/harveyspecter.png"
                class="me-2"
                alt=""
              />

              <p class="mb-0">Harvey Specter</p>
            </div>

            <div class="messages">
              <ul>
                <li class="sent">
                  <img
                    src="http://emilcarlsson.se/assets/mikeross.png"
                    alt=""
                  />
                  <p>
                    How the hell am I supposed to get a jury to believe you when
                    I am not even sure that I do?!
                  </p>
                </li>

                <li class="replies">
                  <img
                    src="http://emilcarlsson.se/assets/harveyspecter.png"
                    alt=""
                  />
                  <p>
                    When you're backed against the wall, break the god damn
                    thing down.
                  </p>
                </li>

                <li class="replies">
                  <img
                    src="http://emilcarlsson.se/assets/harveyspecter.png"
                    alt=""
                  />
                  <p>Excuses don't win championships.</p>
                </li>

                <li class="sent">
                  <img
                    src="http://emilcarlsson.se/assets/mikeross.png"
                    alt=""
                  />
                  <p>Oh yeah, did Michael Jordan tell you that?</p>
                </li>

                <li class="replies">
                  <img
                    src="http://emilcarlsson.se/assets/harveyspecter.png"
                    alt=""
                  />
                  <p>No, I told him that.</p>
                </li>

                <li class="replies">
                  <img
                    src="http://emilcarlsson.se/assets/harveyspecter.png"
                    alt=""
                  />
                  <p>
                    What are your choices when someone puts a gun to your head?
                  </p>
                </li>

                <li class="sent">
                  <img
                    src="http://emilcarlsson.se/assets/mikeross.png"
                    alt=""
                  />
                  <p>
                    What are you talking about? You do what they say or they
                    shoot you.
                  </p>
                </li>

                <li class="replies">
                  <img
                    src="http://emilcarlsson.se/assets/harveyspecter.png"
                    alt=""
                  />
                  <p>
                    Wrong. You take the gun, or you pull out a bigger one. Or,
                    you call their bluff. Or, you do any one of a hundred and
                    forty six other things.
                  </p>
                </li>
              </ul>
            </div>

            <div class="message-input">
              <div class="wrap">
                <input type="text" placeholder="Write your message..." />

                <button class="submit">
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteMessages;
