// import "./sidebar.css";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
export default function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className=" px-sm-2 px-0 bg-app-primary">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline bg-text-color fw-bold ">
                App_name
              </span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item mt-5">
                <a href="#" className="nav-link align-middle px-0">
                  <BiHomeAlt color="white" fontSize={20} />
                  <span className="ms-1 d-none d-sm-inline bg-text-color text-white">
                    Home
                  </span>
                </a>
              </li>
              <li className="nav-item mt-3">
                <a href="#" className="nav-link align-middle px-0">
                  <BsFillPersonLinesFill color="white" fontSize={19} />
                  <span className="ms-1 d-none d-sm-inline bg-text-color text-white">
                    Candidates
                  </span>
                </a>
              </li>

              <li className="nav-item mt-3">
                <a href="#" className="nav-link px-0 align-middle">
                  <FiSettings color="white" fontSize={19} />
                  <span className="ms-1 d-none d-sm-inline bg-text-color text-white">
                    Settings
                  </span>
                </a>
              </li>

              <li className="nav-item mt-5">
                <a href="#" className="nav-link px-0 align-middle">
                  <AiOutlineLogout color="white" fontSize={20} />
                  <span className="ms-1 d-none d-sm-inline bg-text-color text-white">
                    Logout
                  </span>
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
