import Sidebar from "../../components/dashboard/sidebar";
import UserContext from "../../context/userContext";
import "./dashboard.css";
import { useContext } from "react";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-lg-2 sideb">
          <Sidebar />
        </div>
        <div className="col-md-10 col-lg-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit dolorum eos nesciunt ex, rem rerum corporis quaerat est,
          animi perferendis sed voluptates odio velit vitae aperiam pariatur sit
          cumque numquam.
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
}
