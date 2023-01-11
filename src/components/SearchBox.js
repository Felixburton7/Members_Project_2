import React from 'react';

const SearchBox = ({searchChange}) => 
{
    return (
        <div className = 'pa2 '>
        <input
        className=' pa3 ba b--green bg-lightest-blue '
         type ='search' 
         placeholder ='Search Members' 
         onChange = {searchChange} //Every time theres a change the searchChange function is called. This is how onChange eventlistener works.
         
         />
         </div>

    );
}

export default SearchBox


//onChange function in HTML (we are listening to when the event changes)

// The searchChange function is a prop >> onSearchChange function that is defined in App.

// event triggered >> run the prop >> run the function >> directly relate the eventListener to the function that relates to the Robots.js (list)
