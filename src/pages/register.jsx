import logo from "../assets/images/online-courses.png";
import Login from "../features/identity/components/login";
const Register = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-evenly align-items-center vh-100">
        <div className="col-6">
          <img className="w-75" src={logo} alt="online-courses" />
        </div>
        <div className="col-6">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Register;
