import React, { useState, useEffect } from 'react'
import Header from "./components/Header"
import Mainboard from "./components/Mainboard"
import unsplash from "./api/unsplash"
import './App.css'

function App() {

  const [pins, setNewPins] = useState([])

  const getImages = (term) => {

    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term }
    })

  }

  const onSearchSubmit = async (term) => {

    const res = await getImages(term)

    let results = res.data.results

    let newPins = [
      ...results,
      ...pins
    ]

    newPins.sort(function (a, b) {

      return 0.6 - Math.random();

    })

    setNewPins(newPins)

  }

  const getNewPins = () => {

    let promises = []
    let pinData = []

    let pins = ['cyberpunk', 'gaming']

    pins.forEach((pin) => {

      promises.push(
        getImages(pin).then((res) => {

          let results = res.data.results

          pinData = pinData.concat(results)

          pinData.sort(function (a, b) {

            return 0.6 - Math.random()

          })

        })
      )

    })

    Promise.all(promises).then(() => {

      setNewPins(pinData);

    })

  }

  useEffect(() => {

    getNewPins()

  },[])

  return (
    <div>
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} />
    </div>
  );
}

export default App;
