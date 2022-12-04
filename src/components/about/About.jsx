import "./about.css";
import Award from "../../img/award.png";
import Pic from "../../img/mypic.jpg";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Pic}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I often go with destructive code over constructive to prove myself as a geek.
        </p>
        <p className="a-desc">
          Tech Enthusiastic..  
        </p>
        <p className="a-desc">
          Gaming Freak
        </p>
        <p className="a-desc">
         Photography
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">District champion Badminton</h4>
            <p className="a-award-desc">
              District champion for 3 years.. Wanna know my profession
            </p>
          </div>
          <div className="about__button d__flex align__items__center">
                <a href="https://docs.google.com/document/d/13wHi2QUGy9GlubpF0c-MUZD4GurWbpJ3b899XHR8O1w/edit?usp=sharing">
                  <button className="about btn pointer">Download Cv</button>
                </a>
              </div>
        </div>
      </div>
    </div>
  );
};

export default About;