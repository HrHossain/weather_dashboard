import React from 'react'
import Header from './component/Header/Header'
import WeatherBoard from './component/WeatherBoard/WeatherBoard'

const Page = () => {
  return (
      <div className="bg-red-700 grid place-items-center h-screen">
            <Header />
            <WeatherBoard />
          </div>
       
    
  )
}

export default Page