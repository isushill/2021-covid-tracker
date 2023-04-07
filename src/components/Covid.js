import React, { useEffect, useState } from 'react'
import "./Covid.css"

const Covid = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const res = await fetch(`https://data.covid19india.org/data.json`)
      const realTimeData = await res.json()
      console.log(realTimeData.statewise[0])
      setData(realTimeData.statewise[0])
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h3 className='text-center text-primary mt-3'>🔴 Live</h3>
      <h3 className='text-center text-white mt-3'>Covid Tracker App</h3>
      {/* ===card=== */}
      <div className="grid gap-2">
        <div className="p-2 g-col-4 mt-5">
          <div className="card bg-primary">
            <div className="card-body">
              <h5 className="card-title text-center text-white"><span>OUR</span> COUNTRY</h5>
              <h6 className="card-subtitle mb-2 text-center text-white">INDIA</h6>
            </div>
          </div>
        </div>
        <div className="p-2 g-col-4 mt-5">
          <div className="card bg-success">
            <div className="card-body">
              <h5 className="card-title text-center text-white"><span>TOTAL</span>RECOVERED</h5>
              <h6 className="card-subtitle mb-2 text-center text-white">{data.recovered}</h6>
            </div>
          </div>
        </div>
        <div className="p-2 g-col-4 mt-5">
          <div className="card bg-warning">
            <div className="card-body">
              <h5 className="card-title text-center text-white"><span>TOTOAL</span>CONFIRMED</h5>
              <h6 className="card-subtitle mb-2 text-center text-white">{data.confirmed}</h6>
            </div>
          </div>
        </div>
        <div className="p-2 g-col-4">
          <div className="card bg-danger">
            <div className="card-body">
              <h5 className="card-title text-center text-white"><span>TOTAL</span>DEATHS</h5>
              <h6 className="card-subtitle mb-2 text-center text-white">{data.deaths}</h6>
            </div>
          </div>
        </div>
        <div className="p-2 g-col-4">
          <div className="card bg-info">
            <div className="card-body">
              <h5 className="card-title text-center text-white"><span>TOTAL</span>ACTIVE</h5>
              <h6 className="card-subtitle mb-2 text-center text-white">{data.active}</h6>
            </div>
          </div>
        </div>
        <div className="p-2 g-col-4">
          <div className="card bg-secondary">
            <div className="card-body">
              <h5 className="card-title text-center text-white"><span>LAST</span>UPDATED</h5>
              <h6 className="card-subtitle mb-2 text-center text-white">{data.lastupdatedtime}</h6>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Covid