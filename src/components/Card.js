import React, {useContext} from 'react';
import {AppContext} from '../context';


const Card = ({...item}) => {
    const data = useContext(AppContext)

    // console.log(item)
    return (
        <div className="singleCard" key={item.id} onClick={() => data.cardClickHandler(item.id)}>
            <h2>{item.name}</h2>

            <img src={item.img} alt={item.name}/>

            
        </div>
    );
};

export default Card;