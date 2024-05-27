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
        title: 'Internists',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNPbC7Nc6FInRTsDZMSYSpHDxPhEG_KpDqF9TD8ENJzw&s'
    },
    {
        id: 3,
        title: 'General Pediatricians',
        imageUrl: 'https://www.pediatrics.wisc.edu/wp-content/uploads/2022/03/Mathur-with-patient-300x200.jpg'
    },
    {
        id: 3,
        title: 'General Surgeons',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9NTlPKZKB-gf_xsEJTCIK2ZIwUvpWhXpKfCrZM-AmQ&s'
    },
    {
        id: 3,
        title: 'Orthopedic Surgeons',
        imageUrl: 'https://assets-global.website-files.com/6419c6455bd31b5d09bbe049/641c81bff32a256d5fc1119a_orthopedic-surgeon-in-dallas-explain-spine-surgery.jpeg'
    },
    {
        id: 3,
        title: 'Neurosurgeons',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOP3fOKafAC1KTdD3wB6GMiRWVtK6MVFd7qB2ACpyTg&s'
    },
    {
        id: 3,
        title: 'Cardiothoracic Surgeons',
        imageUrl: 'Https://mangalahospital.in/wp-content/uploads/2023/10/cardiology.jpg'
    },
    {
        id: 3,
        title: 'Plastic Surgeons',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEX3JVD220dr_zTrgV5oXdmBRDRlcylsobtZuP7nO9w&s'
    },
    {
        id: 3,
        title: 'Obstetricians',
        imageUrl: 'https://sa1s3optim.patientpop.com/assets/docs/327264.jpg'
    },
    {
        id: 3,
        title: 'Gynecologists',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnMF-EA0P7VVBR8c-4DuJeq4JoFhUa8SLZA&s'
    },
    {
        id: 3,
        title: 'Cardiologists',
        imageUrl: 'https://wmimages.uzleuven.be/styles/57eef194148f5468c7316818506af58a703ab731/2023-01/afbeelding_cardiologie.jpg?style=W3sianBlZyI6eyJxdWFsaXR5Ijo3NX19LHsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxMzIwLCJoZWlnaHQiOjgwMCwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfX1d&sign=fb271b526bfe7cd325199fd78eb3276a6323b8c339bbb62c2554254828c07b21'
    },
    {
        id: 3,
        title: 'Endocrinologists',
        imageUrl: 'https://www.usnews.com/dims4/USNEWS/a8a15cb/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F09%2Fd4%2Fcdc7e62142e9b2dae4592382114d%2Fgettyimages-1326326607.jpg'
    },
    {
        id: 3,
        title: 'Oncologists',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJmFVnt8O4taNXmN9Nu624Bm-xx1os3rJxHEj-YdWDg&s'
    },
    {
        id: 3,
        title: 'Nephrologists',
        imageUrl: 'https://www.durhamnephrology.com/wp-content/uploads/2020/08/Durham-Nephrology_What-Does-a-Nephrologist-Do-1024x536.jpeg'
    },
    {
        id: 3,
        title: 'Pulmonologists',
        imageUrl: 'https://mcr.health/wp-content/uploads/2021/12/Pulmonology-Blog-Image-scaled.jpeg'
    },

   
    // Add more services as needed
];

function ServicesDisplay() {
    return (
        <div className="services-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {serviceData.map(service => (
                <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                />
            ))}
        </div>
    );
}

export default ServicesDisplay;