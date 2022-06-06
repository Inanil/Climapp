import React from 'react'



export const DataWeather = ({ weather }) => {
  return (
    <section className='box-description'>
      <h1 className='box-description_title'>Weather app</h1>
      <img className='img' src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
      <p className='box-description_text'>{weather?.weather[0].description}</p>
    </section>
  )
}
