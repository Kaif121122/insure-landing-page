import React from 'react'
import snappyImg from '../images/icon-snappy-process.svg'
import affordImg from '../images/icon-affordable-prices.svg'
import peopleImg from '../images/icon-people-first.svg'

const Main = () => {

  const myArr = [{
    image: snappyImg,
    name: "Snappy Process",
    para: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
  }, {
    image: affordImg,
    name: "Affordable Prices",
    para: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
  }, {
    image: peopleImg,
    name: "People First",
    para: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
  }]

  return (
    <main className="main container">
      <section className="first-section flex flex-col">
        <h1 className="second-h1">We’re different</h1>
        <div className="grid-container">

          {
            myArr.map((elem, index) => {
              return <div key={index} className="card flex flex-col">
                <div className="card-img-container">
                  <img src={elem.image} alt="" className="card-img" />
                </div>
                <div className="card-data flex flex-col">
                  <h2 className="common-h2">{elem.name}</h2>
                  <p className="common-para card-para">{elem.para}</p>
                </div>
              </div>
            })
          }

        </div>
      </section>
      <section className="second-section align-center">
        <h1 className="common-h1">Find out more about how we work</h1>
        <div className="flex justify-end about-btn">
          <button className="btn common-btn">How we work</button></div>
      </section>
    </main>
  )
}

export default Main