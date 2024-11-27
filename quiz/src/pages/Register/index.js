import { generateToken } from "../../helpers/generateToken";
import {checkExits, register} from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import "./Register.scss"; 

function Register() {
            const navigate = useNavigate();

            const handleSubmit = async (e) =>{
                e.preventDefault(); //ngan chan load lai trang, vi form sub load lại trang
                const fullName = e.target[0].value;
                const email = e.target[1].value;
                const password = e.target[2].value;

                const checkExitsEmail = await checkExits("email", email);
                if(checkExitsEmail.lennth > 0){
                    alert("Email da ton tai!");
                }else{
                    const options = {
                        fullName: fullName,
                        email: email,
                        password: password,
                        token: generateToken(),
                    };

                    const response =await register(options);
                        if(response){
                            navigate("/login")
                        }else{
                            alert("Dang ky khong thanh con");
                        }

                        }
                    
            }
            return (
                <>
                    <form onSubmit={handleSubmit} className="login-form-custom">
                        <h2>Register</h2>
                        <div>
                            <input type="text" placeholder="Enter fullname" required />
                        </div>
                        <div>
                            <input type="email" placeholder="Enter email" required />
                        </div>
                        <div>
                            <input type="password" placeholder="Enter password" required />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </>
            );
}
export default Register;