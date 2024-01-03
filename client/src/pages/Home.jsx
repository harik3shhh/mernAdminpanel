import { NavLink } from "react-router-dom";

const Home = () =>{
    return <>
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p>We are the world Best it company</p>
                    <h1>Welcome To India Tourism</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ab similique debitis ipsam minus, voluptates recusandae aperiam porro, eos mollitia asperiores non voluptatem. Iure, fugiat?
                    </p>
                    <div className="btn btn-group">
                        <NavLink to="/contact"><button className="btn">Connect Now</button></NavLink>
                        <NavLink to="/services"><button className="btn secondary-btn">learn more</button></NavLink>
                    </div>
                </div>

                {/* hero images */}
                <div className="hero-image">
                    <img src="/images/tour.jpg" alt="image" width={800} height={400}/>
                </div>
            </div>
        </section>
    </main>

    <section className="section-analytics">
        <div className="container grid grid-four-cols">
            <div className="div1">
                <h2>50+</h2>
                <p>registered companies</p>
            </div>

            <div className="div1">
                <h2>10000+</h2>
                <p>Happy Clients</p>
            </div>

            <div className="div1">
                <h2>500+</h2>
                <p>Well known Developers</p>
            </div>

            <div className="div1">
                <h2>24/7</h2>
                <p>services</p>
            </div>
        </div>
    </section>


    <section className="section-hero">
            <div className="container grid grid-two-cols">

            <div className="hero-image">
                    <img src="/images/car.jpg" alt="image" width={800} height={400}/>
                </div>

                <div className="hero-content">
                    <p>We are the world Best it company</p>
                    <h1>Get started today</h1>
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

export default Home;