import './About.css';
import profilePic from '../../assets/Profile-About-Pic.jpg';

function About() {
    return (
        <div className="about-page">
            <div className='about'><strong>ABOUT</strong></div>
            <div className='about-content'>
                <img src={profilePic} alt="profile" />
                <div className='about-text'>
                    <h1>👋 Hey there</h1>    
                    <p>
                    I'm Yash, a passionate software developer. I specialize in Web Development, crafting seamless user experiences and robust backend solutions. With a knack for problem-solving, I thrive on creating elegant code that makes an impact. I'm always exploring new tools and techniques to stay at the forefront of the ever-evolving tech landscape.
                    </p>

                    <p>
                    📫 Open to collaborations and exciting projects, I'm eager to connect with fellow developers and tech enthusiasts. Let's build something amazing together!
                    <p>
                        Happy coding! 🖥️
                    </p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;