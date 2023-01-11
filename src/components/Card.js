import React from 'react';


const Card = (props) => {
    const {name,email, id} = props; 

    return (
        //This is JSX
        <div className= ' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='picture' src={`https://robohash.org/{${props.id}150x150`} />
            <div>
                <h2> {props.name} </h2>
                <p> {props.email} </p>
            </div>
        </div>

        
    );
}

export default Card;

// // or
// const Card = ({name,email,id}) => {

//     return (
//         //This is JSX
//         <div className= ' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt='picture' src={`https://robohash.org/{${id}150x150`} />
//             <div>
//                 <h2> {name} </h2>
//                 <p> {email} </p>
//             </div>
//         </div>

        
//     );
// }

// export default Card;