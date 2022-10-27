import React, { useState, useEffect } from 'react'
export const ApiContext = React.createContext()
export const ApiProvider = ({ children }) => {

  const urlBase = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  const [status, setStatus] = useState('initial')
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData();
  }, [])
  const [heroFiltered, setheroFiltered] = useState([])
  const fetchData = async () => {
    try {
      const getData = await fetch(urlBase)
        .then(response => response.json())
      setStatus("done")
      setData(getData)
    } catch (err) {
      console.log("error")
    }
  }
  return (
    <ApiContext.Provider value={{ status, data, heroFiltered, setheroFiltered }}>
      {children}
    </ApiContext.Provider>
  )
  }
