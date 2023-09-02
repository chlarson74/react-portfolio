// Main.js
import React from 'react';
import ProfileImage from '../images/profile-pic.jpg';
import Form from './Form';

function Main() {
  return (

<main>
        <aside>
            <img className="faze" src={ProfileImage} alt="chris larson - web developer" />
            <p style={{color:"black"}}>web development<br/>&amp; seo marketing<br/>full design services<br/></p>
        <p style={{color:"black"}}>chris larson is a web developer with 10 years experience driving results for over 350 happy clients. the focus of his work is creating search engine optimized websites for small and medium sized business. he earned a bfa with honors from cornish college of the arts and has developed designs for both print and digital projects. chris is also a full-time faculty instructor at <a href="https://www.everettcc.edu/" target="_blank" rel="noreferrer">everett community college</a> and the director of the <a href="https://www.google.com/maps/uv?pb=!1s0x549aaacd4f27e023%3A0x98c7b2b7c6a4182d!5sRussell%20Day%20Gallery!15sCgIgARICEAE" target="_blank" rel="noreferrer">russell day gallery.</a></p>
        <hr style={{width:"90%"}}/>
        <p style={{color:"black", fontWeight:"bolder"}}>contact me</p>
        <Form />
        </aside>

        <article id="work">
                <section className="project" id="surf-report">
                    <p>
                    <a href="https://surf-report-app-7b1dc82c323b.herokuapp.com/" target="_blank" rel="noreferrer">surf report</a>
                        <br/>
                        <a href="https://github.com/chlarson74/javascript-quiz" target="_blank" rel="noreferrer">~ view repo</a>
                    </p>
                </section>
                <section className="project" id="bb-quote">
                    <p>
                        <a href="https://jarell-chinn.github.io/BreakingBad_Dashboard/" target="_blank" rel="noreferrer">breaking bad dashboard</a>
                        <br/>
                        <a href="https://github.com/chlarson74/javascript-quiz" target="_blank" rel="noreferrer">~ view repo</a>
                    </p>
                </section>

                <section className="project" id="seo">                   
                    <p>
                        <a href="https://chlarson74.github.io/refactor-homework/" target="_blank" rel="noreferrer">seo services</a>
                        <br/>
                        <a href="https://github.com/chlarson74/javascript-quiz" target="_blank" rel="noreferrer">~ view repo</a>
                    </p>
                </section>
           
                <section className="project" id="pike-street">
                    <p>
                        <a href="https://chlarson74.github.io/javascript-quiz/" target="_blank" rel="noreferrer">pool hall quiz</a>
                        <br/>
                        <a href="https://github.com/chlarson74/javascript-quiz" target="_blank" rel="noreferrer">~ view repo</a>
                    </p>
                </section>
                <section className="project" id="smith-tower">
                    <p>
                        <a href="https://imperial-text-deeacf34c03b.herokuapp.com/" target="_blank" rel="noreferrer">text editor app</a>
                        <br/>
                        <a href="https://github.com/chlarson74/text-editor" target="_blank" rel="noreferrer">~ view repo</a>
                    </p>
                </section>
                <section className="project" id="space-needle">
                    <p>
                        <a href="https://chlarson74.github.io/weather-app/" target="_blank" rel="noreferrer">weather app</a>
                        <br/>
                        <a href="https://github.com/chlarson74/weather-app" target="_blank" rel="noreferrer">~ view repo</a>
                    </p>
                </section>
                <section className="project" id="flag">
                    <p>
                        <a href="#" target="_blank" rel="noreferrer">red flag photography</a>
                        <br/>
                        <a href="#" target="_blank" rel="noreferrer">~ coming soon</a>
                    </p>
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