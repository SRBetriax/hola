import { useParams } from "react-router";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

const SignContainer = () => {

    const params = useParams()
    return(
        <div>
           {
            params.data === "login" ? (
                <Login/>
            ) : params.data === "register" && (
                <Register/>
            )
           }
        </div>
    )
}

export default SignContainer;