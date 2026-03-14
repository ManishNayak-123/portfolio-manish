//Social login means -> Instead of using name, password manually we can use Auth via third party modules.
// Like google
// like facebook
// like chatgpt
// linkedin
// like twittter
// GitHub
import {GoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
function SocialLogin(){
    const handleSuccess = (credentialRespone) =>{
        const user = jwtDecode(credentialRespone.credential);
        console.log(user);

        localStorage.setItem("user", JSON.stringify(user));
    }

    const handleError = () =>{
        console.log("Google login failed");
    }
    return(
        <div>
            <h1>Google login</h1>
        <GoogleLogin onSuccess = {handleSuccess}
                     onError = {handleError}
        />
        </div>
    )
}
export default SocialLogin;