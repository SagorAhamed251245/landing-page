import React from 'react';
import VideoCard from '../StudentsExperience/VideoCard';

const ResourcesForYou = () => {
    return (
        <section className="container">
            <h1 style={{marginBottom:"50px"}} className='title'>
                Resources For You
            </h1>
      <div className="students_experience">
        <VideoCard />
      </div>
    </section>
    );
};

export default ResourcesForYou;