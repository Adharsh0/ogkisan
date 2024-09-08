
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import './Categories.css';

// const Categories = () => {
//     const navigate = useNavigate(); 

//     const handleCategoryClick = (category) => {
//         if (category === 'Vegetables') {
//             navigate('/contract-dashboard'); 
//         }
       
//     };

//     return (
//         <div className="categories">
//             <button className="category-btn" onClick={() => handleCategoryClick('Vegetables')}>
//                 Vegetables
//             </button>
//             <button className="category-btn" onClick={() => handleCategoryClick('Fruits')}>
//                 Fruits
//             </button>
//             <button className="category-btn" onClick={() => handleCategoryClick('Wheat')}>
//                 Wheat
//             </button>
//             <button className="category-btn" onClick={() => handleCategoryClick('Rice')}>
//                 Rice
//             </button>
//         </div>
//     );
// };

// export default Categories;
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Categories.css';

const Categories = () => {
    const navigate = useNavigate(); 

    const handleCategoryClick = (category) => {
        if (category === 'Vegetables') {
            navigate('/contact-dashboard'); // Correct route for ContactDashboard
        }
        // Add more conditions here if you need to navigate to other components
    };

    return (
        <div className="categories">
            <button className="category-btn" onClick={() => handleCategoryClick('Vegetables')}>
                Vegetables
            </button>
            <button className="category-btn" onClick={() => handleCategoryClick('Fruits')}>
                Fruits
            </button>
            <button className="category-btn" onClick={() => handleCategoryClick('Wheat')}>
                Wheat
            </button>
            <button className="category-btn" onClick={() => handleCategoryClick('Rice')}>
                Rice
            </button>
        </div>
    );
};

export default Categories;
