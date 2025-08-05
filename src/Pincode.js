import React, { useEffect, useState } from 'react'
//import './Pincode.css';

const Pincode = () => {

    const[data,setData]=useState(null);
    
    useEffect(()=>{

       (async function () {
        try{
            const response= await fetch("https://api.postalpincode.in/pincode/508255");
            const data=await response.json();
           setData(data);

        }
        catch(err){
            setData({error: "some error occure"});

        }
        
       })();
    },[]);

    if(data ===null) return <p>Loading ..</p>;

  return (
    <div className='container'>
      <h1>Pincode details</h1>
      <div style={{width:"300px"}}>
        {JSON.stringify(data)}
      </div>
    </div>
  );
};

export default Pincode;
