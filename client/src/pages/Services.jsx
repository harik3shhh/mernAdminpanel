import { useAuth } from "../store/auth";

const Services = () =>{

    const {services} = useAuth();

    return <>
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>

            <div className="container grid grid-three-cols">

            {
                services.map((curElem, index)=>{
                    const {price, description, provider, service} = curElem;

                    return (
                    <div className="card" key={index}>
                    <div className="card-img">
                        <img src="images/car.jpg" alt="image" width="200px" height="200px"/>
                    </div>

                    <div className="card-details">
                        <div className="grid grid-two-cols">
                            <p>{provider}</p>
                            <p>{price}</p>
                        </div>
                        <h2>{service}</h2>
                        <p>{description}</p>
                    </div>
                </div>) 
                })
            }

                
            </div>
        </section>
    </>
};

export default Services;