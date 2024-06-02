import './Profile.css';
import Avatar from '../../assets/avatar.png';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Socials from '../Socials/Socials';
import Typewriter from 'typewriter-effect';

const socials = [
    {
        profileLink: "https://www.linkedin.com/in/yash-arya-428933193/",
        logo: faLinkedin,
        color: "blue"
    },
    {
        profileLink: "https://www.x.com/yasharya2901",
        logo: faTwitter,
        color: "black"
    },
    {
        profileLink: "https://www.github.com/yasharya2901",
        logo: faGithub,
        color: "black"
    }
];
function Profile() {

    return (
        <div className="profile">
            <div className='profile-avatar'>
                <img src={Avatar} alt="Avatar" />
            </div>
            <div className='name-intro'>
                Hi, my name is
            </div>
            <div className='name'>
                Yash Arya
            </div>
            <div className='profession'>
                I am a{' '}
                <span style={{marginLeft: '10px'}}>
                    <Typewriter
                        options={{
                            strings: ['FullStack Developer', 'Tech Enthusiast'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
            </div>
            <div className="social-logos">
                {socials.map((social) => (
                    <Socials profileLink={social.profileLink} logo={social.logo} color={social.color} />
                ))}
            </div>
        </div>
    );
}

export default Profile;