import React from 'react';
import ReactLoading from 'react-loading';
 
const Load = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={400} width={300} />
);
 
export default Load;