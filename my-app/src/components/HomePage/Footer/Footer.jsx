import React from "react";
import "./Footer.css";
import { Button } from "reactstrap";
import { SocialIcon } from "react-social-icons";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Footer() {
  return (
    <>
      <footer>
        <div className="container" id="footercontainer">
          <div className="aboutside">
            <h4>ABOUT US</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="socialicons">
              <SocialIcon
                url="https://www.instagram.com/rehimabbas0v/"
                network="instagram"
                fgColor="white"
                bgColor=" rgba(255, 255, 255, 0.05)"
                style={{ height: 45, width: 45, margin: "6px" }}
              />
              <SocialIcon
                network="twitter"
                fgColor="white"
                url="https://twitter.com/"
                bgColor=" rgba(255, 255, 255, 0.05)"
                style={{ height: 45, width: 45, margin: "6px" }}
              />
              <SocialIcon
                network="facebook"
                fgColor="white"
                bgColor=" rgba(255, 255, 255, 0.05)"
                url="https://www.facebook.com/ "
                style={{ height: 45, width: 45, margin: "6px" }}
              />
            </div>
          </div>
          <div className="blogside">
            <h4>RECENT BLOG</h4>
            <div className="blogdiv1">
              <div className="imgside">
                <img
                  src="https://themewagon.github.io/coffee1/images/image_1.jpg"
                  alt=""
                />
              </div>
              <div className="infoside">
                <h4>Even the all-powerful Pointing has no control about</h4>
                <p>
                  Sept 10, 2018 Admin
                  <span>
                    {" "}
                    <SpeakerNotesIcon id="commenticon" />{" "}
                  </span>{" "}
                  3
                </p>
              </div>
            </div>
            <div className="blogdiv2">
              <div className="imgside">
                <img
                  src="https://themewagon.github.io/coffee1/images/image_2.jpg"
                  alt=""
                />
              </div>
              <div className="infoside">
                <h4>Even the all-powerful Pointing has no control about</h4>
                <p>
                  Sept 10, 2018 Admin
                  <span>
                    {" "}
                    <SpeakerNotesIcon id="commenticon" />{" "}
                  </span>{" "}
                  3
                </p>
              </div>
            </div>
          </div>
          <div className="serviceside">
            <h4>SERVICES</h4>
            <ul>
              <li>Cooked</li>
              <li>Deliver</li>
              <li>Quality Foods</li>
              <li>Mixed</li>
            </ul>
          </div>
          <div className="questionside">
            <h4>HAVE A QUESTIONS?</h4>
            <div className="questionicons">
              <div className="info1">
                <LocationOnIcon id='infoicon' />
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div className="info1">
                <LocalPhoneIcon id='infoicon'/>
                <p>
                +2 392 3929 210
                </p>
              </div>
              <div className="info1">
                <MailOutlineIcon id='infoicon'/>
                <p>
                info@yourdomain.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
