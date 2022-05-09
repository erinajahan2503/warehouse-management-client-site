import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InvemtoryItem.css'

const InventoryItem = ({ inventoryitem }) => {
    const { _id, name, img, description, price } = inventoryitem;
    // const navigate = useNavigate();

    // const navigateToServiceDetail = id => {
    //     navigate(`/service/${id}`);
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            {/* <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button> */}
        </div>
    );
};

export default InventoryItem;