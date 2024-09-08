import React from 'react';
import './AddItemButton.css';

const AddItemButton = () => {
    return (
        <div className="add-item-btn-container">
            <button className="add-item-btn">
                <i className="fa fa-plus"></i> Add Item
            </button>
        </div>
    );
};

export default AddItemButton;
