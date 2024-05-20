import React from 'react';
import ServicesCards from './ServicesCards';

const UniqueServices = () => {
    return (
        <section className='unique_service container'>
            <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}><img src='\images\svg\Star.svg' />
                    <p> Michigan State Approved Trainer</p>
                    <img src='\images\svg\Star.svg' />
                </div>
                <h4 style={{textAlign:"center", marginBottom:"60px"}} className='title'>
                    What Makes Us Unique
                </h4>
            </div>
            <ServicesCards/>
        </section>
    );
};

export default UniqueServices;