import { useState } from "react";
// import "../index.css"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Contact = () =>{

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [userData, setUserData] = useState(true);

    const {user} = useAuth();

    if(userData && user){
        setContact({
            username:user.username,
            email:user.email,
            mesage: "",
        });

        setUserData(false);
    }

    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name] : value,
        });
    }

    const url = "http://localhost:8000/api/form/contact";

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log("users data",contact);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact),
        });

        if(response.ok){
            setContact({ username: "", email: "", message: "",});
            toast.success("Response sent successfully");
        }
    }

    return <>
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading">Contact Us</h1>
            </div>

            {/* contact page main */}
            <div className="container grid grid-two-cols">
                <div className="contact-image">
                    <img src="/images/tour.jpg" alt="image" width={780} height={400} />
                </div>

                {/* contact content form */}
                <section className="section-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input type="text" name="username" id="username" autoComplete="off" required 
                            value={contact.username}  onChange={handleInput} />
                        </div>

                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" id="email" autoComplete="off" required 
                            value={contact.email}  onChange={handleInput} />
                        </div>

                        <div>
                            <label htmlFor="message">message</label>
                            <textarea   name="message" id="message" cols="30" rows="5"
                            autoComplete="off" required 
                            value={contact.message}  onChange={handleInput}></textarea>
                        </div>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </section>
            </div>

            <section className="mb-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.261317329505!2d73.91411401026161!3d18.56225398246654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1703000862352!5m2!1sen!2sin" width="100%" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </section>
    </>
};

export default Contact;