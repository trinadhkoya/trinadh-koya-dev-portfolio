import Me from "../../img/me.png";
import './Intro.css'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Trinadh Koya</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Dreamer</div>
                            <div className="i-title-item">Mobile/Web Developer</div>
                            <div className="i-title-item">UI Engineer</div>
                            <div className="i-title-item">Photographer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        A self-starter with 6+ years of Experience in Software Development. Have a good passion for
                        learning new technologies and motivated to accept challenges in Programming. I have the ability
                        to adapt the design quickly and code for the same. Keeping Professional standards make my code
                        beautiful. Always take my work as my asset so I love to decorate it.

                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"/>
                <img src={Me} alt="" className="i-img"/>
            </div>
        </div>
    );
};

export default Intro;