import './Profile.css';
import Avatar from '../../assets/avatar.png';

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
                I am a Full Stack Developer
            </div>
        </div>
    );
}

export default Profile;