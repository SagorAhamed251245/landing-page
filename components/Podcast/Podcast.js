import React from 'react';
import PodcastCard from './PodcastCard';

const Podcast = () => {
    return (
        <section className='podcast'>
            <div>
                 <h1 style={{textAlign:"center", marginBottom:"60px"}} className='title'>
            Podcast of TS4U’s Innovative Bootcamp 
            </h1>
            <PodcastCard/>
            </div>
        </section>
    );
};

export default Podcast;