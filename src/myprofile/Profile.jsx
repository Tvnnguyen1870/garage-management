import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const updateProfile = () => {
    navigate('/updateprofile');
  };

  const changePass = () => {
    navigate('/changepassword');
  };
  return (
    <div>
      <h1 className="headingProfile">My Profile</h1>
      <div className="profile">
        <div>
          <table>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <td></td>
              <td></td>
            </thead>
            <thead>
              <th>Phone</th>
              <th>DOB</th>
              <td></td>
              <td></td>
            </thead>
            <thead>
              <th>Gender</th>
              <th>Role</th>
              <td></td>
              <td></td>
            </thead>
          </table>
        </div>
        <div className="buttonProfile">
          <button className="btnUp" onClick={updateProfile}>
            Update Profile
          </button>
          <button className="btnChange" onClick={changePass}>
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
