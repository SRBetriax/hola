import { useParams } from "react-router";
import PasswordRecovery from "../components/PasswordRecovery/PasswordRecovery";

const SignContainer = () => {

    const params = useParams()
    return(
        <div>
            {
                params.data === "passwordRecovery" && (
                    <PasswordRecovery/>
                )
            }
        </div>
    )
}

export default SignContainer;