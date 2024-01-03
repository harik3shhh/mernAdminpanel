import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const Login = () =>{

    const navigate = useNavigate();

    const [user, setUser] = useState({
       
        email:"",
        
        password:"",
    });

    const {storeTokenInLS} = useAuth();


    // handling the input values
    const handleInput =(e)=>{
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    };

    const url = "http://localhost:8000/api/auth/login";
    const handleSubmit = async(e)=>{
        e.preventDefault();
        // alert(user);
        // console.log(user);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        const res_data = await response.json();

        if(response.ok){
            storeTokenInLS(res_data.token);


            setUser({ email:"", password:"",});
            toast.success("Login Successful");
            navigate("/");

        }else{
            toast.error("Invalid email or password");
                console.log("Invalid Creadentials!!!");
        }
    };
   
    return <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img src="/images/login.jpg" alt="image" width="650" height="500" />
                    </div>

                    {/* let tackle registration form */}
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Login</h1>
                        <br />

                        <form onSubmit={handleSubmit}>
  
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="Enter Your Email" id="email" required autoComplete="off" 
                                value={user.email} onChange={handleInput}/>
                            </div>



                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" name="password" placeholder="password" id="password" required autoComplete="off" 
                                value={user.password} onChange={handleInput}/>
                            </div>
                            <br />

                            <button type="submit" className="btn btn-submit">Login</button>
                        </form>
                    </div>
                </div> 
            </div>
        </main>
    </section>
    </>

};

export default Login;