import React from "react";
import Layout from "./Layout";
import "./AboutUs.css"

function AboutUsPage() {
    return (
        <div className="aboutUsContainer">
            <img id="aboutUsImg" src="https://aimforwellbeing.org/cdn/shop/files/About_Alliance_Integrative_Medicine.webp?v=1736848888&width=2560"/>
            <h1 id="aboutUsHeaderTxt">About Alliance Integrative Medicine</h1>
            <p id="aboutUsBodyTxt">
            Unlike conventional medical care providers, we first help patients
            heal but then also empower them with knowledge and tools to avoid many
            of the pitfalls that created their illness in the first place. No
            matter where you are right now, with our expert guidance you can heal
            and lead a vibrant life! With step-by-step guidance by our care team,
            you will implement an integrative approach to your wellness, drawing
            from the most up-to-date nutritional science and lifestyle medicine, to
            significantly improve your health and alleviate symptoms.
            </p>
        </div>
    );
}

export default AboutUsPage;