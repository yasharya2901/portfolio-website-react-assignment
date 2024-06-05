import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactPage.css'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Socials from '../../components/Socials/Socials';
import { faInstagram, faLinkedin, faTelegram, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons';

function ContactPage() {
    return (
        <div className='contact-page'>
            <div className='contact-details'>
                <h1>Let's discuss something <span style={{color: '#d53f8c'}}>cool</span> together</h1>
                <div className='contact-information'>
                    <div className="email">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:yasharya2901@gmail.com">yasharya2901@gmail.com</a>
                    </div>
                    <div className="location">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Bengaluru, India</span>
                    </div>
                </div>
                <div className="socials">
                    <Socials logo={faLinkedin} link='https://www.linkedin.com/in/yash-arya-2901/' />
                    <Socials logo={faInstagram} link='https://www.instagram.com/yasharya2901/' />
                    <Socials logo={faTwitter} link='https://www.x.com/yasharya2901/' />
                </div>
            </div>
            <div className='contact-form'>
                <h2> Just drop a message</h2>
                <form>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <textarea placeholder='Message' />
                    <button type='submit'><FontAwesomeIcon icon={faTelegram} /> Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;