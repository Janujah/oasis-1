import React from 'react'
import '../CSS/About.css'

function ServiceCard({ imageUrl, title, description }) {
    return (
        <div className="service-card">
            <img src={imageUrl} alt="Service" className="service-image"/>
            <div className="service-info">
                <h3 className="service-title" style={{fontSize:'20px'}}>{title}</h3>
                <p className="service-description">{description}</p>
                {/* <a href="#" className="service-link">Learn More</a> */}
            </div>
        </div>
    );
}

export default ServiceCard
