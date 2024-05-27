import React, { useRef } from 'react';
import '../CSS/About.css'
import ServiceCard from '../Components/card'

const serviceData = [
    {
        id: 1,
        title: 'Family Physicians',
        imageUrl: 'https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/456/2022/08/iStock-1351391195-1.jpg'
    },
    {
        id: 2,
        title: '',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS485q8k50nnA88E6MvlajvmxTzRsKx-M6LJMExF7iABpe_ilCkxXEwpQNwTeH1-7viQP8&usqp=CAU'
    },
    {
        id: 3,
        title: 'General Pediatricians',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWu_w10AFDN3JnQDawu5jvHxxKKpHMYootXt98lijIQg&s'
    },
    {
        id: 2,
        title: 'name',
        imageUrl: 'https://orthoimplantsindia.com/wp-content/uploads/2023/02/Orthopedic-Implants-Manufacturer.jpg'
    },
    {
        id: 2,
        title: 'name',
        imageUrl: 'https://orthoimplantsindia.com/wp-content/uploads/2023/02/Orthopedic-Implants-Manufacturer.jpg'
    },
    {
        id: 2,
        title: 'name',
        imageUrl: 'https://orthoimplantsindia.com/wp-content/uploads/2023/02/Orthopedic-Implants-Manufacturer.jpg'
    },
    {
        id: 2,
        title: 'name',
        imageUrl: 'https://orthoimplantsindia.com/wp-content/uploads/2023/02/Orthopedic-Implants-Manufacturer.jpg'
    },
    {
        id: 2,
        title: 'name',
        imageUrl: 'https://orthoimplantsindia.com/wp-content/uploads/2023/02/Orthopedic-Implants-Manufacturer.jpg'
    },
    {
        id: 2,
        title: 'name',
        imageUrl: 'https://orthoimplantsindia.com/wp-content/uploads/2023/02/Orthopedic-Implants-Manufacturer.jpg'
    },
    
 
   
    // Add more services as needed
];

function ServicesDisplay() {
    return (
        <div className="services-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {serviceData.map(service => (
                <a href='/Ortho/Profile' style={{textDecoration:'none'}}><ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                /></a>
            ))}
        </div>
    );
}

export default ServicesDisplay;