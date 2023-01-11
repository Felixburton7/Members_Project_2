import React from 'react';
import Card from './Card'
import robots from '../Robots'

const CardList = ({robots}) => {
   // if (true) {
   //    throw new Error('Noooo!');
   // }
   
    const CardArray = robots.map((user,i) => {
       return < Card key = {i} id = {robots[i].id} name = {robots[i].name} username = {robots[i].username} email = {robots[i].email} />
    })

    return (
       <div>
        {CardArray}
       </div>
    )
}

export default CardList
