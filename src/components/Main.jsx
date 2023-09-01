// Main.js
import React from 'react';
import ProfileImage from '../images/profile-pic.jpg';
function Main() {
  return (

<main>
        <aside>
            <img className="faze" src={ProfileImage} alt="chris larson - web developer" />
            <p style={{color:"black"}}>web development<br/>&amp; seo marketing<br/>full design services<br/></p>
        <p style={{color:"black"}}>chris larson is a web developer with 10 years experience driving results for over 350 happy clients. the focus of his work is creating search engine optimized websites for small and medium sized business. he earned a bfa with honors from cornish college of the arts and has developed designs for both print and digital projects. chris is also a full-time faculty instructor at <a href="https://www.everettcc.edu/" target="_blank" rel="noreferrer">everett community college</a> and the director of the <a href="https://www.google.com/maps/uv?pb=!1s0x549aaacd4f27e023%3A0x98c7b2b7c6a4182d!5sRussell%20Day%20Gallery!15sCgIgARICEAE" target="_blank" rel="noreferrer">russell day gallery.</a></p>
        </aside>
        <article id="work">
                <section className="project" id="surf-report">
                    <a href="https://surf-report-app-7b1dc82c323b.herokuapp.com/" target="_blank" rel="noreferrer"><p>surf report</p> </a>
                </section>
                <section className="project" id="bb-quote">
                    <a href="https://jarell-chinn.github.io/BreakingBad_Dashboard/" target="_blank" rel="noreferrer"><p>breaking bad dashboard</p> </a>
                </section>

                <section className="project" id="seo">
                    <a href="https://chlarson74.github.io/refactor-homework/" target="_blank" rel="noreferrer"><p>seo services</p> </a>
                </section>
           
                <section className="project" id="pike-street">
                    <p>pike street services</p>
                </section>
                <section className="project" id="smith-tower">
                    <p>smith tower technologies</p>
                </section>
                <section className="project" id="space-needle">
                    <p>space needle engineering</p>
                </section>
                <section className="project" id="flag">
                    <p>red flag photography</p>
                </section>
                <section className="project" id="augmented">
                    <p>augmented reality</p>
                </section>
                <section className="project" id="time">
                    <p>time stream services</p>
                </section>
                <section className="project" id="ai">
                    <p>artificial intelligence</p>
                </section>
        </article>
    </main>
  );
}

export default Main;