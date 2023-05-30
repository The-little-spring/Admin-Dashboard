import FormInput from "./formInput";
import { persianPhrases } from "@features/authentication/constants/persionPhrases";

const Login = () => {
  const {
    title,
    help,
    notRegisteredYet,
    createAccount,
    login,
    password,
    mobile,
  } = persianPhrases;
  return (
    <>
      <div className="text-center mt-4">
        <h1 className="h2">{title}</h1>
        <p className="lead"> {help}</p>
        <p className="lead">
          {notRegisteredYet}
          <a className="me-2"> {createAccount} </a>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form>
              <FormInput name="mobile" placeholder={mobile} type="text" />
              <FormInput
                name="password"
                placeholder={password}
                type="password"
              />
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">
                  {login}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
