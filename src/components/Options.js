import React from 'react'

export default function Options() {
    const percentages = []

    for (let i = 0;i <= 5;i = i + 0.25) {
      //props.max voi korvata: <= 5. sitten voi toisella puolen laittaa mikä on maksimi määrä lukuja
        percentages.push(i)
    }



  return (
    percentages.map (percentage => {
        return <option value={percentage}>{percentage.toFixed(2)}%</option>
        //{percentage.toFixed(2)} = pyöristetään kahdella desimaalilla. toisella puolella options kohtaan tulisi näin: <Options max={10}/>
    })
  )
}
