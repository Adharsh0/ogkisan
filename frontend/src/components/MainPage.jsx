import React from 'react';
import Header from './Header';
import WeatherInfo from './WeatherInfo';
import Categories from './Categories';
import AddItemButton from './AddItemButton';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="main-page">
            <Header />
            <WeatherInfo />
            <Categories />
            <AddItemButton />
        </div>
    );
};

export default MainPage;
