import hero from "../../assets/munar.png";
import react from "../../assets/react.png";
import java from "../../assets/javascript.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate frontend Developer | Transforming Ideas into Seemless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={react} alt="" />
          </div>
          <img src={hero} alt="" />
        </div>
        <div>
          <div>
            <div className="tech-icon">
              <img className="htjs" src={html} alt="" />
            </div>
          </div>
          <div>
            <div className="tech-icon">
              <img src={css} alt="" />
            </div>
          </div>
          <div>
            <div className="tech-icon">
              <img className="htjs" src={java} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
