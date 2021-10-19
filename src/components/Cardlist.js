import React, {useContext} from 'react';
import Card from './Card';
import {AppContext} from '../context';

const Cardlist = () => {
    const data = useContext(AppContext)
    // console.log(data.cards.data)
    return (
        <div className="cardlistDiv">
            {data.cards.data.map((item) => {
                // console.log('iteemmmmm')
                // console.log(item)
                return <Card key={item.id} {...item}/>
            })}
            
        </div>
    );
};

export default Cardlist;