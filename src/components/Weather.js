import React, { useEffect, useState } from 'react'
import './Weather.css'


const Weather = () => {


    const [city, setCity] = useState(null);
    const [ search, setSearch ] = useState("Mumbai");

    useEffect(() => {
      const fetchApi = async () =>{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=25ba2af9747e0e420e4f449f72e2272a
        `
        
        const response = await fetch (url);
        const resJson = await response.json();
        // console.log(resJson);
        setCity(resJson)
      }

      fetchApi();
    },[search] )

  return (


    <div className='container1'>
        <img src="https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d" alt="" />

        <div className="main">
            <input type="search" placeholder='Mumbai' className="inputFeild" onChange={(event) => {setSearch(event.target.value)}} />


             <div className="location">
                  <h2>📍</h2> <h1>{search}</h1>
              </div>
              <div className="maintemp"><h2>5.5 Cel</h2></div>
              <div className="minimum">Min : 5.5 Cel | Max : 20.2 Cel</div>
        
        </div>
    </div>


  )


}


export default Weather