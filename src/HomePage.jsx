import React from "react";
import "./App.css";
import Layout from "./Layout";
import productImage from "./product-image.png"





const BackgroundSection = () => {
  return (
    <div className="backgroundDiv1">
      <img id="backgroundImg" src="https://aimforwellbeing.org/cdn/shop/files/aim-home-hero.png?v=1736947969" alt="Background" />
      <h1>Empowering Patients & Transforming Lives</h1>
      <h2>Integrative and Functional Medicine. Acupuncture. Chiropractic Care. Advanced Allergy Therapeutics. Nutrition Counseling. Medical Message. Rolfing. Energy Healing.</h2>
      <button id="backgroundBtn1">Learn More</button>
      <button id="backgroundBtn2">Login to Patient Portal</button>
    </div>
  );
};


const BodySection = () => {
  return (
    <div className="bodyDiv">
      <h4>On Your Journey Back To Health</h4>
      <h5>Our patient coordinator is standing by, happy to answer any questions you have to determine if Alliance Integrative Medicine (AIM) is right for you.</h5>
      <button id="learnMoreBodyBtn">Learn More</button>
      <img className="bodyDivImg1" src="https://aimforwellbeing.org/cdn/shop/files/servicebottom.webp?v=1736849611&width=332" alt="Body Image" />
      <h6>Focus Areas</h6>
      <h7>Instead of simply addressing different symptoms across separate areas, Functional Medicine seeks to treat the underlying root cause –by evaluating lifestyle factors such as diet, environment and emotional health –thus identifying the trigger of the illness patients are seeking to heal, and helping to address this root cause.</h7>
    </div>
  );
};


const FocusAreaCards = () => {
  return (
    <div className="focusAreaCardsDiv">
      <div className="cardImgs">
        <img id="cardImg1" src="https://aimforwellbeing.org/cdn/shop/files/Immune_Health_aee8545e-59ad-4663-92a6-1101ff79b08f.png?v=1736948606&width=576" alt="Immune Health" />
        <img id="cardImg2" src="https://aimforwellbeing.org/cdn/shop/files/hormonal-metabolic.png?v=1736948606&width=576" alt="Hormonal & Metabolic" />
        <img id="cardImg3" src="https://aimforwellbeing.org/cdn/shop/files/Allergy_Therapeutics.png?v=1736948606&width=576" alt="Allergy Therapeutics" />
        <img id="cardImg4" src="https://aimforwellbeing.org/cdn/shop/files/Transformational_Medicine.png?v=1736948606&width=576" alt="Transformational Medicine" />
      </div>
      <div className="cardBtnRow">
        <button id="cardBtn1">Immune Health</button>
        <button id="cardBtn2">Hormonal & Metabolic</button>
        <button id="cardBtn3">Allergy Therapeutics</button>
        <button id="cardBtn4">Transformational Medicine</button>
      </div>
    </div>
  );
};


const ProductSection = () => {
  return (
    <div className="productDiv">
      <div className="shopTxtDiv">
        <div className="shopTxt">
          <h8>Shop Online or in Person</h8>
          <h1 id="ourProductsTxt">Our Products</h1>
          <h5 id="productsBodyTxt">We've created a curated line of products, hand selected by our experts to provide the most effective health benefits and optimal nutrition balance.</h5>
          <button id="browseProductsBtn">Browse Products</button>
        </div>
      </div>
      <img id="productImg" src={productImage} alt="Product" />
    </div>
  );
};


const HomePage = () => {
  return (
    <div>
        <BackgroundSection />
        <BodySection />
        <FocusAreaCards />
        <ProductSection />
    </div>
  );
};


       

export default HomePage;