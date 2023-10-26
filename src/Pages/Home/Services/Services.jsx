import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices] = useState([])
    useEffect (()=>{
fetch('services.json')
.then(res=> res.json())
.then(data => setServices(data))
    },[])
    return (
        <div className="my-10 ">
            <div className="text-center space-y-3">
                <h1 className="text-[#FF3811] font-bold text-xl">Services</h1>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
              
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;