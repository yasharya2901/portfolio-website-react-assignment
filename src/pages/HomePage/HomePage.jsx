import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import './Homepage.css';
import '../../components/Socials'
import Socials from "../../components/Socials/Socials";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function HomePage() {
    return (
      <div className="home">
        <div className="profile-holder">
          <Navbar />
          <Profile />
          

        </div>
      </div>
    );
  }


export default HomePage;