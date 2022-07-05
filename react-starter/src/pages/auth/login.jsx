import LoginForm from "../../components/auth/loginForm";
import "./login.css";
export default function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 left">
          <div className="left-content">
            <div className="slogan text-left">
              <h3>App_name slogan</h3>
            </div>
            <div className="descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla
              velit quisquam quo at repellendus blanditiis. Accusamus eveniet
              consectetur quaerat sapiente rem sunt architecto ducimus
              praesentium quas, nobis facere dolore.
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="login">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
