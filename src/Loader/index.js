import React from 'react';
import './loader.scss'

const Loader = () => {
    return (
        <div className="container">
            <div id="loader-container">
                <div id="loader">
                    <div id="circles"/>
                </div>
                <div id="loader-circle"/>
            </div>
        </div>
    );
};

export default Loader;