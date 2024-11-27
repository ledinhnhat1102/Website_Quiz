import { useDispatch } from "react-redux";
import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/usersService";
import {useNavigate} from "react-router-dom"
import { checkLogin } from "../../actions/login";
import "./Login.scss"

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) =>{
        e.preventDefault(); //ngan chan load lai trang, vi form sub load lại trang
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        const response =await login(email, password);
        if(response.length > 0){
            setCookie("id", response[0].id,1);
            setCookie("fullName", response[0].fullName,1);
            setCookie("email", response[0].email,1);
            setCookie("token", response[0].token,1);
            dispatch(checkLogin(true));
            navigate("/")
        }else{
            alert("Tài khoản hoặc mật khẩu không chính xác!");
        }
        
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="login-form-custom" >
            <h2>Login</h2>
            <div>
                <input type="email" placeholder="Enter email" />
            </div>
            <div>
                <input type="password" placeholder="Enter password" />
            </div>
            <button type="submit">Login</button>
        </form>
        </>
    )
}
export default Login;