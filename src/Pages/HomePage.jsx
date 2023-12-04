import { useEffect, useState } from "react";
import { ImageCard } from "../Components/ImageCard";
import '../style/HomePage.css';

export const HomePage=()=>{

  // initialized a state variable "data" with an empty array, and a function
  // "setData' to update the state. 
  // the 'data' state will used to store the array of photos fetched from an API
  const[data,setData]=useState([]);
  const getData=async()=>{

    // here we fetch 20 image through this api endpoint
    const resp = await fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
    console.log(resp);

    // and here resp is converted to json
    const {photos} = await resp.json();

    /**the 'photos' property from the resp is extract and used to update 
     * the 'data' state 
     */
    setData(photos)
    console.log(photos)
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div id="parent">
          {
            data?.map((e,i)=>{
              return <ImageCard id={e.id} imageUrl={e.url} key={i}/>
            })
          }
    </div>
  );
}
