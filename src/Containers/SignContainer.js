import { useParams } from "react-router";
import Login from "../components/login/Login";
import WlRegister from "../components/wl-register/WlRegister";


const SignContainer = () => {
  const params = useParams();
  return (
    <section>
      {params.data === "login" ? (
        <Login />
      ) : params.data === "register" && (
        <WlRegister />
      )
      }
    </section>
  );
};

export default SignContainer;
