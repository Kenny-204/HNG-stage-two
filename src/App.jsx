/* eslint-disable react/prop-types */
// import { useState } from 'react'
import Button from "./Button.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Ellipse />
      <header>
        <Header />
      </header>
      <section>
        <div className="description">
          <p className="description-title">Description</p>
          <p className="description-text">
            The quest 2 is capable of running as a bath a standalone headset
            with an enternal Android - based operating systems and with OCULUR
            compatible VR software running on a dekstop computer when connect
            over USB or Wi-FI
          </p>
        </div>
      </section>
      <section>
        <Button Label="Shop By Category" />
        <p className="shop">Shop</p>
        <div className="flex shop-card-container">
          <ShopCard
            Label="  Enter into a new reality with us at 10% cheaper than other
        stores"
          />
          <ShopCard
            Label="Or view it through the new dell xps 13 and let your eyes go wild"
            bgColor="#FFE8BF"
            color="black"
            btnColor=""
          />
        </div>
        <ul className="flex shop-items">
          <ShopItem ItemName="Dell xps 13" price="$669.99" />
          <ShopItem
            ItemName="Dell xps 13"
            price="$669.99"
            bgColor="#1F1FFF4D"
          />
          <ShopItem ItemName="Dell xps 13" price="$669.99" />
          <ShopItem
            ItemName="Dell xps 13"
            price="$669.99"
            bgColor="#1F1FFF4D"
          />
        </ul>
      </section>
      <section>
        <div className="best-seller">
          <p className="best-seller-title">Best Seller</p>
          <p className="best-seller-cap">
            Enjoy the best items from our best sellers catalogue
          </p>
        </div>
        <div className="headphone flex">
          <div className="discount-left">
            <p className="discount">30% OFF</p>
            <p className="discount-text">
              BOOMTOWN HEAD PHONES SERIES 7.6 GET IT 10% OFF THE ACTUAL PRICE IF
              YOU ORDER TODAY
            </p>
            <Button Label="Shop now!" bgColor="#FFE8BF" color="#BCBCFF" />
          </div>
          <img
            src="onegirllikethis.png"
            style={{ position: "absolute", right: "0", bottom: "0" }}
            width="500px"
            height="350px"
          />
        </div>
      </section>
      <section>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <li>
            <Rectangle />
          </li>
          <li>
            <Rectangle bgColor="#1F1FFF4D" />
          </li>
          <li>
            <Rectangle />
          </li>
          <li>
            <Rectangle bgColor="#1F1FFF4D" />
          </li>
        </ul>
      </section>
      <section>
        <div className="happy-hour flex">
          <p className="happy-hour-bold">Happy Hour</p>
          <img
            src="iphone.png"
            width="500px"
            height="300px"
            style={{ position: "absolute", bottom: "0", left: "25%" }}
          />
          <div className="happy-hour-right">
            <p className="discount">30% OFF</p>
            <p className="happy-hour-bold">
              Get all iphones at affordable prices
            </p>
            <Button Label="Shop now" bgColor="#BCBCFF" />
          </div>
        </div>
      </section>
      <section>
        <div className="new-google flex">
          <div className="new-google-left">
            <p>See the world with new eyes get the new vr googles headset</p>
            <Button Label="Buy now" bgColor="#FFE8BF" color="white" />
          </div>
          <img src="VRheadset.png" width="150px" height="100px"/>
        </div>
      </section>
      <Footer />
    </>
  );
}

function Rectangle({ bgColor = "#FFA50040" }) {
  return <div className="rectangle" style={{ backgroundColor: bgColor }}></div>;
}

function ShopItem({ ItemName, price, bgColor }) {
  return (
    <li style={{ listStyle: "none" }}>
      <div className="flex shop-item">
        <Rectangle bgColor={bgColor} />
        <div className="shop-item-text">
          <p>{ItemName}</p>
          <p>{price}</p>
        </div>
      </div>
    </li>
  );
}

function ShopCard({
  Label,
  bgColor = "rgba(31, 31, 225, 0.3)",
  color = "white",
  btnColor = "#FFE8BF",
}) {
  return (
    <div
      className="shop-card flex "
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="shop-cap flex">
        <p className="shop-card-text" style={{ color: color }}>
          {Label}
        </p>
        <Button Label="Browse" bgColor={btnColor} color="black" />
      </div>
      <img src="VRguy.png" alt="" width="300px" height="200px" />
    </div>
  );
}

function Ellipse() {
  return (
    <svg
      className="svg"
      height={"700"}
      width={"45%"}
      style={{ position: "absolute", zIndex: "-1" }}
    >
      <ellipse
        className="ellipse"
        rx={"60%"}
        ry={"65%"}
        cx={"20%"}
        cy={"20%"}
        style={{
          right: "0px",
          position: "absolute",
          zIndex: "-1",
          fill: "#1F1FFF",
          fillOpacity: "10%",
        }}
      />
    </svg>
  );
}
export default App;
