import React from 'react'
import './aboutus.css';
import image from './about.png'


function AboutUs() {
    return (
        <div className="aboutPage">
            <div className="container aboutWrapper">
                <div className="aboutHeading"><h1>About Us</h1>
                <h3>Our Vision</h3></div>
                <div class="row">
                    <div className="col-md-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean maximus mauris nec sapien accumsan, vel dapibus ex auctor. 
                        Donec suscipit lorem nulla, sed consequat arcu eleifend euismod. 
                        Pellentesque mattis nisl non enim dapibus, eu congue urna fermentum. 
                        Proin ut justo blandit, scelerisque justo sed, accumsan purus. 
                        Etiam suscipit vehicula ullamcorper. Nunc efficitur, dui vel hendrerit 
                        sollicitudin, magna erat faucibus augue, lobortis lobortis lacus massa 
                        vel mauris. Sed tortor elit, ultrices non sollicitudin ac, lobortis vitae 
                        dolor. Phasellus placerat maximus odio eu tincidunt. Maecenas ut 
                        egestas turpis. Aliquam malesuada sagittis eros, eu fringilla nunc 
                        rutrum a. Phasellus non iaculis metus. Aenean ut libero eu lacus fermentum 
                        accumsan non quis nibh.</p></div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={image} alt="Vision"></img>
                    </div> 
                </div>
                .<div class="contactUs">
                    <h3>Contact Developer:</h3>
                    <p>name@sample.com</p>
                    <p>+91-7548962458</p>
                    <p> Kochi
                        Infopark-684521
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default AboutUs
