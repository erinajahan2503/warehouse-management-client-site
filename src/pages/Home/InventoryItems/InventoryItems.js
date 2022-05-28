import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'
const InventoryItems = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://stark-savannah-71086.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Inventory Items</h1>
                <div className="services-container">
                    {
                        items.map(item => <InventoryItem
                            key={item._id}
                            item={item}
                        >

                        </InventoryItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;