import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />


        <div className="home__row">
        <Product
            id="2107"
            title="SAMSUNG Q90 Series 82-Inch Smart TV, QLED 4K UHD with HDR and Alexa compatibility 2019 model"
            price={5094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81BbqFfsHWL._AC_SL1500_.jpg"
          />
          <Product
            id="2101"
            title="Samsung 75-inch Class QLED The Terrace Outdoor TV - 4K UHD Direct Full Array 16X Quantum HDR 32X Smart TV with Alexa Built-in (QN75LST7TAFXZA, 2020 Model) with Amazon Smart Plug"
            price={3999.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81JOMSQY%2B-L._AC_SL1500_.jpg"
          />
  



        </div>
        <div className="home__row">
        <Product
            id="2103"
            title="
            Microsoft Surface Laptop 2 (Intel Core i5, 8GB RAM, 256 GB) - Black"
            price={699.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/511Kd0b1WxL._AC_SL1200_.jpg"
          />
        <Product
            id="2104"
            title="Samsung Galaxy S20+ Plus 5G Factory Unlocked New Android Cell Phone US Version | 128GB w/Galaxy Buds+ Plus"
            price={1499.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61zDRNtr%2BnL._AC_SL1200_.jpg"
          />
          
          <Product
            id="2105"
            title="Microsoft Surface Pro 7 MS7 12.3” (2736x1824) 10-Point Touch Display Tablet PC W/Surface Type Cover & Surface Pen, Intel 10th Gen Core i3, 4GB RAM"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51zG2dHRjmL._AC_SL1004_.jpg"
          />


        </div>
        <div className="home__row">
        <Product
            id="2102"
            title="Sony X950H 85 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model, XBR85X950H with Home Theater Surround Sound Speaker System"
            price={4999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/612KFH-Zo4L._AC_SL1001_.jpg"
          />
        <Product
            id="2107"
            title="VIZIO 85-inch P-Series - Quantum X 4K HDR Smart TV with Apple AirPlay & Chromecast Built-in (P85QX-H1, 2020)"
            price={4254.92}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91pKr6OfhxL._AC_SL1500_.jpg"
          />

      


        </div>



        <div className="home__row">
          <Product
            id="2109"
            title="Apple iMac (27-inch, 8GB RAM, 1TB Storage) - Previous Model"
            price={298.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/810RI8O1jJL._AC_SL1500_.jpg"
          />
          <Product
            id="2108"
            title="Fitbit Charge 3 Advanced Fitness Tracker with Heart Rate, Swim Tracking & 7 Day Battery"
            price={119.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="2010"
            title="ASUS VivoBook 15.6inch FHD Laptop, AMD Quad Core R5-3500U, GeForce GTX 1050 Graphics, 8GB DDR4 RAM, 512GB PCIe SSD"
            price={798.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81Hsrx2fnTL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="2010"
            title="HP - Pavilion 15.6inch Gaming Laptop - AMD Ryzen 5 - 8GB Memory - NVIDIA GeForce GTX 1650 - 256GB SSD - Shadow Black"
            price={728.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81KyhfcoB4L._AC_SL1500_.jpg"
          />
          <Product
            id="2103"
            title="Lenovo Ideapad L340 Gaming Laptop, 15.6 Inch FHD (1920 X 1080) IPS Display, Intel Core i5-9300H Processor, 8GB DDR4 RAM, 512GB Nvme SSD, NVIDIA GeForce GTX"
            price={699.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Aoh%2BS2ZIL._AC_SL1500_.jpg"
          />

        </div>
      </div>
    </div>
  );
};

export default Home;

