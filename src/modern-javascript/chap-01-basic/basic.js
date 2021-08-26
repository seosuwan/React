import React from 'react';

var man = {} //es5

const Basic = () => {
    const letSample = () => {
        let tom = 'Tom' //es6 에서 variable
        const james = 'James' //es6 -> constant
    }
    const dynamictype = () => {
        let userId = 12;
        //console.log("USER ID is" + userId) // --> Template String
        console.log(`USER ID is ${userId} `) // --> Template String
    }
    return (
        <>
        <button onClick={dynamictype}>Dynamic Type Test</button>
        </>
    )
}
export default Basic