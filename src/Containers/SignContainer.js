import { useParams } from "react-router";
import Footer from "../components/footer/Footer";
import PasswordRecovery from "../components/PasswordRecovery/PasswordRecovery";
import Landing from "../pages/Landing";

const SignContainer = () => {

    const params = useParams()
    return(
        <div>
            {
                params.data === "passwordRecovery" ? (
                    <PasswordRecovery/>
                ) : params.data === "token" ? (
                    <Landing/>
                ) : params.data === "holis" && (
                    <Footer/>
                )
            }
        </div>
    )
}

export default SignContainer;