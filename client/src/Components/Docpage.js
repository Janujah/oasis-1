import React, { useState } from 'react';

function DoctorForm({ doctor, onUpdate }) {
    const [name, setName] = useState(doctor.name);
    const [position, setPosition] = useState(doctor.position);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://oasis-r62g.onrender.com/Doctors/view/${doctor._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, position })
        })
        .then(response => response.json())
        .then(data => {
            onUpdate(data); // Assume the backend returns all updated doctors
        })
        .catch(error => console.error('Error updating doctor:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={position} onChange={e => setPosition(e.target.value)} placeholder="Position" />
            <button type="submit">Update Doctor</button>
        </form>
    );
}

export default DoctorForm;
