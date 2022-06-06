import React from 'react'
import { useState } from 'react'

const Converter = ({ weather, temperature,converter,fahrenheit, farenToCel }) => {


  return (
    <section className='box-data'>
      <article className='box-place'>
        <p className='box-place_name'>{weather?.name}</p>
        <h3 className='box-place_country'>{weather?.sys.country}</h3>
        <h2 className='box-place_degree'>{fahrenheit ? temperature : converter}{fahrenheit ? '°F' : '°C'} <i class='bx bxs-thermometer'></i></h2>
        <button className='box-place_btn' onClick={farenToCel}> <span>{fahrenheit ? 'C°' : 'F°'}</span> </button>
      </article>


      <article className='box-data2'>
        <div className='box-data2_clouds'>
          <i class='bx bx-cloud' ></i>
          <span className='box-data2_cloudst'>{weather?.clouds.all}%</span>
        </div>
        <div className='box-data2_wind'>
          <i class='bx bx-wind'></i>
          <span className='box-data2_windt'>{weather?.wind.speed}</span>
        </div>
        <div className='box-data2_humedity'>
        <i class='bx bxs-droplet-half'></i>
          <span className='box-data2_humedityt'>{weather?.main.humidity}%</span>
        </div>

      </article>


    </section>
  )
}

export default Converter