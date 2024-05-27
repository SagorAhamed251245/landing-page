import React from 'react';

const BootcampCompletion = () => {
    return (
        <section className='bootcamp_completion_container container'>
            <div className='bootcamp_completion'>
            <div className='left_bootcamp'>
                <h4 className='title'>
                Salary for this role
                </h4>

                <p style={{marginTop:"30px"}}>
                Take one of Schools Hub’s range of Python courses and learn how to code using this incredibly useful language. It's simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. 
                </p>

               <div style={{display:"flex", marginTop:"30px", marginBottom:"20px", gap:"10px"}}>
               <img className='green-tik' src='\images\svg\check-circle 4.svg'/> <p>Low Salary $5000</p>
               </div>
               <div style={{display:"flex", marginTop:"30px", marginBottom:"20px", gap:"10px"}}>
               <img className='green-tik' src='\images\svg\check-circle 4.svg'/> <p>Average Salary $10000</p>
               </div>
               <div style={{display:"flex", marginTop:"30px", marginBottom:"20px", gap:"10px"}}>
               <img className='green-tik' src='\images\svg\check-circle 4.svg'/> <p>Top Salary $15000</p>
               </div>
            </div>

            
               <img className='right_img' src='\images\svg\image 575.png'/>
            
        </div>
        </section>
    );
};

export default BootcampCompletion;