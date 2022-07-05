import "./landing.css";
import headerImg from "./header.png";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="landing-content">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="left-content">
              <div className="slogan text-left">
                <h3>App_name slogan</h3>
              </div>
              <div className="descr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                nulla velit quisquam quo at repellendus blanditiis. Accusamus
                eveniet consectetur quaerat sapiente rem sunt architecto ducimus
                praesentium quas, nobis facere dolore.
              </div>

              <div
                className="btn btn-primary"
                onClick={() => navigate("/signUp")}
              >
                Get started
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="right-content">
              <img src={headerImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
