import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUsers = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { id: 1, name: "Janujah Sivarathinam", email: "janujahsivarattinam@gmail", role: "admin", verified: false },
        { id: 2, name: "Bob Smith", email: "bob@example.com", role: "doctor", verified: false },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "doctor", verified: false }
    ]);

    const toggleVerify = (id) => {
        const updatedUsers = users.map(user => 
            user.id === id ? { ...user, verified: !user.verified } : user
        );
        setUsers(updatedUsers);
    };

    return (
        <UserContext.Provider value={{ users, toggleVerify }}>
            {children}
        </UserContext.Provider>
    );
};
