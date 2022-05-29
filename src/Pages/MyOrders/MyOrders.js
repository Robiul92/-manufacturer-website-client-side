import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [oders, setOders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://serene-harbor-07570.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        
                    }
                    return res.json()
                })
                .then(data => {

                    setOders(data);
                });
        }
    }, [user])
    return (
        <div>
            <h2>My Orders: {oders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Quantity</th>
                            
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            oders.map((a, index) => <tr
                            key= {index}>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                
                                <td>{a.quantity}</td>
                                <td>{a.email}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;