import { NavLink } from "react-router-dom";

const About = () =>{
    return <>

    <section className="section-hero">
            <div className="container grid grid-two-cols">

            <div className="hero-image">
                    <img src="/images/car.jpg" alt="image" width={800} height={400}/>
                </div>

                <div className="hero-content">
                    <p>We are the world Best it company</p>
                    <h1>Who Am I?</h1>
                    <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum similique illo nihil pariatur velit. Exercitationem libero non corporis pariatur, dignissimos saepe quisquam animi repellat. Reiciendis similique, explicabo asperiores est laboriosam consequatur impedit fuga et, hic quia porro nostrum maiores provident sapiente tempora ex aspernatur incidunt earum nemo at animi delectus?
                    </p>
                    <div className="btn btn-group">
                        <NavLink to="/contact"><button className="btn">Connect Now</button></NavLink>
                        <NavLink to="/services"><button className="btn secondary-btn">learn more</button></NavLink>
                    </div>
                </div>

                {/* hero images */}
                
            </div>
        </section>
    </>
};

export default About;