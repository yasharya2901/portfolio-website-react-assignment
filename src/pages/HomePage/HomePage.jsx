import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import './Homepage.css';

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