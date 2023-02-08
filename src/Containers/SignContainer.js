import { useParams } from "react-router";
import Login from "../components/login/Login";
import WlRegister from "../components/wl-register/WlRegister";
import Register from "../components/register/Register";

const SignContainer = () => {
  const params = useParams();
  return (
    <div>
      {params.data === "login" ? (
        <Login />
      ) : params.data === "register" ? (
        <WlRegister />
      ) : (
        params.data === "form" && <Register />
      )}
    </div>
  );
};

export default SignContainer;
