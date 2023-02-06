import React, { useState } from "react";

import "../addCar/AddCar.css";
import { newCar } from "../../api/network";

const AddCar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [fuel, setFuel] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>ADD YOUR CAR</span>
              </div>
              <div className="app-contact">CONTACT INFO : +216 29 572 989</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="BRAND"
                    onChange={(e) => {
                      setBrand(e.target.value);
                    }}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="MODEL"
                    onChange={(e) => {
                      setModel(e.target.value);
                    }}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="PRICE"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="COLOR"
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="CREATION DATE "
                    onChange={(e) => {
                      setCreationDate(e.target.value);
                    }}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="FUEL"
                    onChange={(e) => {
                      setFuel(e.target.value);
                    }}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="MILEAGE"
                    onChange={(e) => {
                      setMileage(e.target.value);
                    }}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="TRANSMISSION"
                    onChange={(e) => {
                      setTransmission(e.target.value);
                    }}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="IMAGE"
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                </div>

                <div className="app-form-group buttons">
                  <button
                    className="app-form-button"
                    onClick={() => {
                      newCar({
                        brand,
                        model,
                        price,
                        color,
                        creationDate,
                        fuel,
                        mileage,
                        transmission,
                        image,
                      });
                    }}
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="credits">
          AutoCare
          <a
            className="credits-link"
            href="https://dribbble.com/shots/2666271-Contact"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="dribbble" viewBox="0 0 200 200">
              <g stroke="#ffffff" fill="none">
                <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
                <path
                  d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                  strokeWidth="20"
                ></path>
                <path
                  d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                  strokeWidth="20"
                ></path>
                <path
                  d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                  strokeWidth="20"
                ></path>
              </g>
            </svg>
            2023
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
