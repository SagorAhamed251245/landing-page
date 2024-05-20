import React from 'react';
import Vector from '../SVG/Vector';

const ServicesCard = ({ i, url, text,margin }) => {
    // Determine the position based on the index
    const position = i !== 0 && i % 2 === 1 ? 'down' : 'up';

    // Inline styles for the 'down' position
    const sectionStyle = position === "down" ? { marginBottom: '-30px' } : {};

    return (
        <section style={{marginBottom:margin}}>
            <div className='service_card'>
                <div>
                    <img src={url} alt={`Service ${i}`} />
                </div>
                <p>{text}</p>
                <Vector color={i === 0 ? "#0065FF" : "#C0D1FE"} />
            </div>
        </section>
    );
};

export default ServicesCard;
