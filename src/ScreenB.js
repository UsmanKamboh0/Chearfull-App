import React, { Fragment } from 'react'
import './ScreenB.css'
import './ScreenA.css'
import logo from './images/logo.svg';
import dashboard from './images/Dashboard.svg';
import assesment from './images/assesment.svg';
import camera from './images/camera.svg';
import client from './images/client.svg';
import tools from './images/tools.svg';
import notes from './images/notes.svg';
import journals from './images/journals.svg';
import close from './images/close.png';
import dot from './images/dot.png';
import downarrow from './images/Down-arrow.png';
import uparrow from './images/up-arrow.png';
import pic from './images/pic.png';
import search from './images/search.png';
import pic1 from './images/pic1.png';
import sidearrow from './images/side-arrow.png';
import notification from './images/notification.png';
import user from './images/user.png';
import userdown from './images/userdown.png';
import envlope from './images/envlop.png';
import Screenshot165 from './images/Screenshot(165).png';
import Screenshot166 from './images/Screenshot (166).png';
import Screenshot169 from './images/Screenshot (169).png';
import Screenshot172 from './images/Screenshot (172).png';
import Screenshot170 from './images/Screenshot (170).png';
import { Link } from 'react-router-dom';
const ScreenB = () => {
  return (
    <Fragment>

      <div>

        <div class="frame-notes-upload-file-popup-container">
          <div class="frame-notes-upload-file-popup-frame-notes-upload-file-popup">
          <div class="frame-notes-frame-notes">
                    <div class="frame-notes-navbar-old-remove-it">
                        <div class="frame-notes-left-menu">
                            <div class="frame-notes-frame39957">
                                <img
                                    src={logo}
                                    alt="Group384853256"
                                    class="frame-notes-group38485"
                                />
                            </div>
                            <div class="frame-notes-frame39968">
                                <div class="frame-notes-navigation">
                                    <div class="frame-notes-navicondashboard">
                                        <div class="frame-notes-group">
                                            <img
                                                src={dashboard}
                                                alt="Vector3256"
                                                class=""
                                            />

                                        </div>
                                    </div>
                                    <span class="frame-notes-text"><span>Dashboard</span></span>
                                </div>
                                <div class="frame-notes-navigation1">
                                    <img
                                        src={camera}
                                        alt="videocameraalt13256"
                                        class="frame-notes-videocameraalt1"
                                    />
                                    <span class="frame-notes-text02"><span>Appointments</span></span>
                                </div>
                                <div class="frame-notes-navigation2">
                                    <div class="frame-notes-naviconuser">
                                        <div class="frame-notes-group1">
                                            <img
                                                src={client}
                                                alt="Vector3256"
                                                class=""
                                            />

                                        </div>
                                    </div>
                                    <span class="frame-notes-text04"><span>Clients</span></span>
                                </div>
                                <div class="frame-notes-navigation3">
                                    <img
                                        src={assesment}
                                        alt="fileinvoice13256"
                                        class="frame-notes-fileinvoice1"
                                    />
                                    <span class="frame-notes-text06"><span>Assessments</span></span>
                                </div>
                                <div class="frame-notes-navigation4">
                                    <img
                                        src={tools}
                                        alt="navicontoolsguide3256"
                                        class="frame-notes-navicontoolsguide"
                                    />
                                    <span class="frame-notes-text08">
                                        <span>Tools </span>
                                    </span>
                                </div>
                                <div class="frame-notes-navigation5">
                                    <div class="frame-notes-naviconblog">
                                        <div class="frame-notes-group2">
                                            <img
                                                src={notes}
                                                alt="Vector3256"
                                                class=""
                                            />

                                        </div>
                                    </div>
                                    <span class="frame-notes-text10"><span>Notes</span></span>
                                </div>
                                <div class="frame-notes-navigation6">
                                    <div class="frame-notes-naviconblog1">
                                        <div class="frame-notes-group3">
                                            <img
                                                src={journals}
                                                alt="Vector3256"
                                                class=""
                                            />

                                        </div>
                                    </div>
                                    <span class="frame-notes-text12"><span>Journal</span></span>
                                </div>
                            </div>
                        </div>

</div>
                    <div class="frame-notes-notes-default-file-list">
                        <div class="frame-notes-column01">
                            <div class="frame-notes-frame40181">
                                <div class="frame-notes-design">
                                    <span class="frame-notes-text14 Body02">
                                        <span>Client List</span>
                                    </span>
                                    <button class="frame-notes-button">
                                        <span class="frame-notes-text16">
                                            <span>Assign a Journal</span>
                                        </span>
                                    </button>
                                </div>
                                <div class="frame-notes-textbox">
                                    <div class="frame-notes-textboxwith-label-biglabel">
                                        <span class="frame-notes-text18 Body03">
                                            <span>Search by client name</span>
                                        </span>
                                        <img
                                            src={search}
                                            alt="search3254"
                                            class="frame-notes-search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="frame-notes-day">
                                <div class="frame-notes-accordion">
                                    <span class="frame-notes-text20 BodyOthersTags">
                                        <span>Assigned By You</span>
                                    </span>
                                    <div class="frame-notes-frame40207">
                                        <img
                                            src={uparrow}
                                            alt="arrow3254"
                                            class="frame-notes-arrow"
                                        />
                                    </div>
                                </div>
                                <div class="frame-notes-frame40431">
                                    <div class="frame-notes-row">
                                        <div class="frame-notes-left">
                                            <img
                                                src={pic}
                                                alt="Ellipse3523254"
                                                class="frame-notes-ellipse352"
                                            />
                                            <div class="frame-notes-detail">
                                                <span class="frame-notes-text22 Body03">
                                                    <span>Maurice Hilpert</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="frame-notes-right">
                                            <span class="frame-notes-text24 BodyOthersTags">
                                                <span>Yet To View</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="frame-notes-row01">
                                        <div class="frame-notes-left01">
                                            <img
                                                src={pic1}
                                                alt="Ellipse3523255"
                                                class="frame-notes-ellipse3521"
                                            />
                                            <div class="frame-notes-detail1">
                                                <span class="frame-notes-text26 Body03">
                                                    <span>Valerie Hickle</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="frame-notes-right1">
                                            <span class="frame-notes-text28 BodyOthersTags">
                                                <span>Viewed</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="frame-notes-row02">
                                        <div class="frame-notes-left02">
                                            <img
                                                src={pic1}
                                                alt="Ellipse3523255"
                                                class="frame-notes-ellipse3522"
                                            />
                                            <div class="frame-notes-detail2">
                                                <span class="frame-notes-text30 Body03">
                                                    <span>Brandi Fadel IV</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="frame-notes-right2">
                                            <span class="frame-notes-text32 BodyOthersTags">
                                                <span>Shared</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="frame-notes-day1">
                                <div class="frame-notes-accordion1">
                                    <span class="frame-notes-text34 BodyOthersTags">
                                        <span>Shared With You</span>
                                    </span>
                                    <div class="frame-notes-frame402071">
                                        <img
                                            src={uparrow}
                                            alt="arrow3254"
                                            class="frame-notes-arrow1"
                                        />
                                    </div>
                                </div>
                                <div class="frame-notes-frame404311">
                                    <div class="frame-notes-row03">
                                        <div class="frame-notes-left03">
                                            <img
                                                src={pic}
                                                alt="Ellipse3523255"
                                                class="frame-notes-ellipse3523"
                                            />
                                            <div class="frame-notes-detail3">
                                                <span class="frame-notes-text36 Body03">
                                                    <span>Maurice Hilpert</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="frame-notes-right3">
                                            <img
                                                src={dot}
                                                alt="Ellipse3553255"
                                                class="frame-notes-ellipse355"
                                            />
                                        </div>
                                    </div>
                                    <div class="frame-notes-row04">
                                        <div class="frame-notes-left04">
                                            <img
                                                src={pic1}
                                                alt="Ellipse3523255"
                                                class="frame-notes-ellipse3524"
                                            />
                                            <div class="frame-notes-detail4">
                                                <span class="frame-notes-text38 Body03">
                                                    <span>Brandi Fadel IV</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="frame-notes-column02">
                            <div class="frame-notes-frame40314">
                                <div class="frame-notes-design1">
                                    <span class="frame-notes-text40 Body02">
                                        <span>Journals</span>
                                    </span>
                                </div>
                                <div class="frame-notes-select">
                                    <div class="frame-notes-frame40418">
                                        <span class="frame-notes-text42 BodyOthersTags">
                                            <span>All</span>
                                        </span>
                                        <img
                                            src={downarrow}
                                            alt="arrow3255"
                                            class="frame-notes-arrow2"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="frame-notes-wrapper">
                                <div class="frame-notes-day2">
                                    <div class="frame-notes-accordion2">
                                        <span class="frame-notes-text44 BodyOthersTags">
                                            <span>Daily Journal</span>
                                        </span>
                                        <div >
                                            <img
                                                src={uparrow}
                                                alt="arrow3255"
                                                class="frame-notes-arrow2"
                                            />
                                        </div>
                                    </div>
                                    <div class="frame-notes-listofthe-journal">
                                        <div class="frame-notes-row05">
                                            <div class="frame-notes-left05">
                                                <span class="frame-notes-text46 Body03">
                                                    <span>Online Consultation</span>
                                                </span>
                                                <div class="frame-notes-row06">
                                                    <div class="frame-notes-frame40178">
                                                        <span class="frame-notes-text48 BodyOthersTags">
                                                            <span>6 July 2022 @ 3:00 PM</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="frame-notes-row07">
                                            <div class="frame-notes-left06">
                                                <span class="frame-notes-text50 Body03">
                                                    <span>Online Consultation</span>
                                                </span>
                                                <div class="frame-notes-row08">
                                                    <div class="frame-notes-frame401781">
                                                        <span class="frame-notes-text52 BodyOthersTags">
                                                            <span>6 July 2022 @ 3:00 PM</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="frame-notes-day3">
                                    <div class="frame-notes-accordion3">
                                        <span class="frame-notes-text54 BodyOthersTags">
                                            <span>Grif Journal</span>
                                        </span>
                                        <div >
                                            <img
                                                src={uparrow}
                                                alt="arrow3255"
                                                class="frame-notes-arrow2"
                                            />
                                        </div>
                                    </div>
                                    <div class="frame-notes-listofthe-journal1">
                                        <div class="frame-notes-row09">
                                            <div class="frame-notes-left07">
                                                <span class="frame-notes-text56 Body03">
                                                    <span>Entry - 01</span>
                                                </span>
                                                <div class="frame-notes-row10">
                                                    <div class="frame-notes-frame401782">
                                                        <span class="frame-notes-text58 BodyOthersTags">
                                                            <span>6th Jul 2022 @ 3:00 PM</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="frame-notes-row11">
                                            <div class="frame-notes-left08">
                                                <span class="frame-notes-text60 Body03">
                                                    <span>Entry - 02</span>
                                                </span>
                                                <div class="frame-notes-row12">
                                                    <div class="frame-notes-frame401783">
                                                        <span class="frame-notes-text62 BodyOthersTags">
                                                            <span>6th Jul 2022 @ 3:00 PM</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="frame-notes-day4"></div>
                                <div class="frame-notes-day5"></div>
                            </div>
                            <div class="frame-notes-frame40429">
                                <button class="frame-notes-button1">
                                    <span class="frame-notes-text64">
                                        <span>Assign a Journal</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="frame-notes-column03">
                            <div class="frame-notes-design2">
                                <div class="frame-notes-frame40433">
                                    <div class="frame-notes-frame40177">
                                        <img
                                            src={sidearrow}
                                            alt="arrow3255"
                                            class="frame-notes-arrow3"
                                        />
                                    </div>
                                    <span class="frame-notes-text66 Body02">
                                        <span>Morning Journal Entry</span>
                                    </span>
                                </div>
                                <div class="frame-notes-frame40427">
                                    <div class="frame-notes-adddocument3">
                                        <span class="frame-notes-text68"><span>Message</span></span>
                                    </div>
                                    <div class="frame-notes-adddocument4">
                                        <span class="frame-notes-text70">
                                            <span>Schedule a Session</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="frame-notes-design3">
                                <div class="frame-notes-left09">
                                    <img
                                        src={pic1}
                                        alt="Ellipse3523255"
                                        class="frame-notes-ellipse3525"
                                    />
                                    <div class="frame-notes-detail5">
                                        <div class="frame-notes-frame40412">
                                            <span class="frame-notes-text72 Body03">
                                                <span>Brandi Fadel IV</span>
                                            </span>
                                        </div>
                                        <div class="frame-notes-row13">
                                            <span class="frame-notes-text74 BodyOthersTags">
                                                <span>Daily Journal</span>
                                            </span>
                                            <img
                                                src="/playground_assets/ellipse3533255-ugcs-200h.png"
                                                alt="Ellipse3533255"
                                                class="frame-notes-ellipse353"
                                            />
                                            <span class="frame-notes-text76 BodyOthersTags">
                                                <span class="frame-notes-text77">Assigned on -</span>
                                                <span>6 July 2022 @ 3:00 PM</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="frame-notes-frame40185"></div>
                                </div>
                            </div>
                            <div class="frame-notes-frame40295">
                                <div class="frame-notes-textbox1">
                                    <div class="frame-notes-textboxwith-label-biglabel1">
                                        <span class="frame-notes-text79 Body03">
                                            <span>
                                                <span>
                                                    Gastropub chillwave lumbersexual umami lyft. Poke austin
                                                    direct trade, marfa raclette letterpress actually.
                                                    Chartreuse sriracha pinterest twee lo-fi try-hard.
                                                    Meditation banh mi kitsch, prism organic hot chicken
                                                    literally heirloom occupy af semiotics food truck.
                                                </span>
                                                <br />
                                                <span></span>
                                                <br />
                                                <span>
                                                    Aesthetic asymmetrical gluten-free, health goth shaman meh
                                                    lumbersexual bespoke kinfolk helvetica vaporware fashion
                                                    axe freegan. Pour-over hammock succulents disrupt
                                                    chartreuse raw denim.
                                                </span>
                                                <br />
                                                <span></span>
                                                <br />
                                                <span>
                                                    Brunch aesthetic fanny pack subway tile everyday carry
                                                    green juice neutra beard cray small batch poke yuccie
                                                    plaid pork belly. Blue bottle 8-bit flexitarian hashtag.
                                                    Scenester marfa yuccie snackwave edison bulb. VHS blog
                                                    pickled scenester venmo hashtag lo-fi.
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="frame-notes-upload-file-popup-popup">
              <div class="frame-notes-upload-file-popup-upload-file3">
                <div class="frame-notes-upload-file-popup-frame40194">
                  <span class="frame-notes-upload-file-popup-text178 Body02">
                    <span>Assign Journal</span>
                  </span>
                  <div class="frame-notes-upload-file-popup-close">
                    <Link to="/">
                    <img
                      src={close}
                      alt="CloseI325"
                      class="frame-notes-upload-file-popup-close1"
                    />
                    </Link>
                  </div>
                </div>
                <div class="frame-notes-upload-file-popup-textbox1">
                  <div
                    class="frame-notes-upload-file-popup-textboxwith-label-biglabel1"
                  >
                    <img
                      src={search}
                      alt="search3253"
                      class="frame-notes-upload-file-popup-search1"
                    />
                  </div>
                </div>
                <div class="frame-notes-upload-file-popup-frame40430">
                  <div class="frame-notes-upload-file-popup-card">
                    <span class="frame-notes-upload-file-popup-text180">
                      <span>Reflective</span>
                    </span>
                    <span class="frame-notes-upload-file-popup-text182">
                      <span>Find meaning and purpose daily</span>
                    </span>
                    <div class="frame-notes-upload-file-popup-group4">
                      <img
                        src={Screenshot165}
                        alt="Vector3251"
                        class="    margin-top: 35px;
                        width: 111px;
                        height: 89px;
                        margin-left: 45px;"
                        style={{ marginTop: "35px", width: "111px", height: "89px", marginLeft: "45px" }}
                      />

                    </div>
                  </div>
                  <div class="frame-notes-upload-file-popup-card1">
                    <span class="frame-notes-upload-file-popup-text180">
                      <span>Reflective</span>
                    </span>
                    <span class="frame-notes-upload-file-popup-text182">
                      <span>Find meaning and purpose daily</span>
                    </span>
                    <div class="frame-notes-upload-file-popup-group4">
                      <img
                        src={Screenshot170}
                        alt="Vector3251"
                        class="frame-notes-upload-file-popup-vector012"
                        style={{ marginTop: "-75px", width: "137px", height: "131px", marginLeft: "-61px" }}

                      />

                    </div>

                  </div>
                </div>
                <div class="frame-notes-upload-file-popup-frame40431">
                  <div class="frame-notes-upload-file-popup-card2">
                    <span class="frame-notes-upload-file-popup-text188">
                      <span>Goals</span>
                    </span>
                    <span class="frame-notes-upload-file-popup-text190">
                      <span>Identify your goals and objectives</span>
                    </span>
                    <div class="frame-notes-upload-file-popup-frame1">

                      <img
                        src={Screenshot172}
                        alt="Vector3251"
                        class="frame-notes-upload-file-popup-vector012"
                        style={{ marginTop: "-128px", width: "147px", height: "156px", marginLeft: "-92px" }}
                      />

                    </div>
                  </div>
                  <div class="frame-notes-upload-file-popup-card3">
                    <span class="frame-notes-upload-file-popup-text192">
                      <span>Reflective</span>
                    </span>
                    <span class="frame-notes-upload-file-popup-text194">
                      <span>Find meaning and purpose daily</span>
                    </span>
                    <div class="frame-notes-upload-file-popup-frame2">
                      <img
                        src={Screenshot169}
                        alt="Vector3251"
                        class="frame-notes-upload-file-popup-vector012"
                        style={{ marginTop: "-128px", width: "147px", height: "156px", marginLeft: "-92px" }}

                      />
                    </div>
                  </div>
                </div>
                <div class="frame-notes-upload-file-popup-frame40432">
                  <div class="frame-notes-upload-file-popup-card4">
                    <span class="frame-notes-upload-file-popup-text196">
                      <span>Reflective</span>
                    </span>
                    <span class="frame-notes-upload-file-popup-text198">
                      <span>Find meaning and purpose daily</span>
                    </span>
                    <div class="frame-notes-upload-file-popup-group6">
                      <img
                        src={Screenshot165}
                        alt="Vector3251"
                        class="frame-notes-upload-file-popup-vector012"
                        style={{ marginTop: "-75px", width: "137px", height: "131px", marginLeft: "-61px" }}

                      />

                    </div>
                  </div>
                  <div class="frame-notes-upload-file-popup-card5">
                    <span class="frame-notes-upload-file-popup-text200">
                      <span>Goals</span>
                    </span>
                    <span class="frame-notes-upload-file-popup-text202">
                      <span>Identify your goals and objectives</span>
                    </span>
                    <div class="frame-notes-upload-file-popup-frame3">
                      <img
                        src={Screenshot172}
                        alt="Vector3251"
                        class="frame-notes-upload-file-popup-vector012"
                        style={{ marginTop: "-128px", width: "147px", height: "156px", marginLeft: "-92px" }}

                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>




    </Fragment>
  )
}

export default ScreenB