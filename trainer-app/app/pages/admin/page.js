// @/app/pages/admin/page.js
import { useEffect, useState } from 'react';

const AdminDashboard = () => {
    // const [customers, setCustomers] = useState([]);
    // const [trainers, setTrainers] = useState([]);

    // useEffect(() => {
    //     // Fetch customers
    //     fetch('/api/customers')
    //         .then(response => response.json())
    //         .then(data => setCustomers(data))
    //         .catch(error => console.error('Error fetching customers:', error));

    //     // Fetch trainers
    //     fetch('/api/trainers')
    //         .then(response => response.json())
    //         .then(data => setTrainers(data))
    //         .catch(error => console.error('Error fetching trainers:', error));
    // }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Admin Dashboard</h1>
            {/* <section>
                <h2>Customers</h2>
                <ul>
                    {customers.map(customer => (
                        <li key={customer.id}>{customer.name}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Trainers</h2>
                <ul>
                    {trainers.map(trainer => (
                        <li key={trainer.id}>{trainer.name}</li>
                    ))}
                </ul>
            </section> */}
        </div>
    );
};

export default AdminDashboard;