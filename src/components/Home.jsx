import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import excavationImg from "../excavation.jpg";
import septicImg from "../septic.jpg";
import foundationImg from "../foundation.jpg";
import gradingImg from "../grading.jpg";
import poolDiggingImg from "../pool-digging.jpg";
import patioImg from "../patio.jpg";


function Home() {

  return (
    <body className="home-body">
      <div className="welcome">
        <h1>Welcome to ANK Excavation</h1>
        <p><span>If you want to oversimplify things, we dig holes.</span> If
        you’d rather be more accurate, we dig the most precise and useable holes
         possible in the Walla Walla Valley and the surrounding region.
         We have been called upon to bring our services to all manner of
         excavation site work, whether providing drainage, septic fields or digging footings for
         foundations. This range of experience has allowed us to hone our skills
          in a wide variety of options, and to bring more in the range of
          services to the Walla Walla area than any other local excavation
          contractor you may find.</p>
        <p>Contact us today to get a quote, learn more about us, or to discuss
        a project you would like to complete. We look forward to working with you.</p>
      </div>

      <div className="services">
        <div className="services-group">
          <h2>Quality Services</h2>
          <ul>
            <li>General Excavation</li>
            <li>Grading</li>
            <li>Foundation Digging</li>
            <li>Septic Installation</li>
            <li>Drainage Solutions</li>
          </ul>
        </div>
        <div className="services-group">
          <h2>Exclusive Benefits</h2>
          <ul>
            <li>Licensed & Insured</li>
            <li>100% Satisfaction Guarantee</li>
            <li>Free Estimates</li>
            <li>Competitive Pricing</li>
            <li>High-quality Work</li>
          </ul>
        </div>
        <div className="services-group">
        <h2>Areas We Serve</h2>
          <ul>
            <li>Walla Walla</li>
            <li>College Place</li>
            <li>Touchet</li>
            <li>Milton-Freewater, OR</li>
            <li>Other Surrounding Areas</li>
          </ul>
        </div>
      </div>

      <div className="list-services">

        <div className="panel">
          <div className="panel-content">
            <h2>General Excavation Services</h2>
            <p>Excavation Contractors CT brings you general excavation services
            to any task you have, delivering high quality commercial and
            residential excavation for a wide variety of needs. Whether you’re
            looking to install a patio, deck, retaining wall or any other number
             of services, you can be sure that our experts are fully prepared to
              tackle the job at hand. We bring you the means to deal with
              sloping on your property, grading issues and other such measures
              of rounding out your property.</p>
            <p>No matter the attention you require from our experienced
            contractors, you can rely on our professional excavating contractors
             to always bring you the highest level of quality, professionalism
             and attention to detail on each and every job.</p>
          </div>
          <img src={excavationImg} alt=""/>
        </div>

        <div className="panel" id="panelLeft" >
          <img src={septicImg} alt=""/>
          <div className="panel-content">
            <h2>Septic Tank Installation</h2>
            <p>If you have a property that relies on a septic tank, then you
            know the importance in which the septic tank installation is carried
             out is to the overall efficacy of the system. Septic tank installation
              and repair excavation are one of the services in which we bring
              the highest level of experience, and one that we have delivered
              for years.</p>
            <p>Whether you need a custom septic tank installed, leach field
            piping dug, or any other portion of service required to have an
            effective septic system design and installation in place, you can
            depend on our high level of experience and customer experience to be
             the best excavating contractors near Walla Walla, WA!</p>
          </div>
        </div>

        <div className="panel">
          <div className="panel-content">
            <h2>Foundation Digging & Excavation</h2>
            <p>We are your go-to local foundation contractors with over 45 years
             of experience. Building your home atop a strong and carefully
             installed foundation is the means to having a dependable space you
             can rely on. Our expert team of foundation digging contractors have
              been working closely with site surveyors and concrete specialists
               to bring the precise excavating you need for this service.</p>
            <p>From site preparation to accurate grading, our experts bring you
             an empty space you can feel confident building upon. Precision in
             your foundation is the hallmark of a long lasting property. We
             provide residential foundation digging, foundation installation,
             commercial foundation digging and more.</p>
          </div>
          <img src={foundationImg} alt=""/>
        </div>

        <div className="panel" id="panelLeft" >
          <img src={gradingImg} alt=""/>
          <div className="panel-content">
            <h2>Grading and Site Preparation</h2>
            <p>From parking lots to driveways, patios to pools, the right grading
             can make all the difference. We may not consider how much geometry
             goes into the angles on our property, and yet with certain
             installations, the slighted inaccuracy in the dig can find itself
             multiplied exponentially as layers are placed on top. Ensuring that
              the job is done right the first time is the ambition of our
              service, providing you with an effective space to build on.</p>
            <p>ANK Excavation is the area's leading experts for
            foundation grading and site preparation. To learn more about our
            services, we make it very simple and straightforward. Just give us
            a call or email to get in touch and schedule a convenient time for us
            to look at your property. </p>
          </div>
        </div>

        <div className="panel">
          <div className="panel-content">
            <h2>Pool Foundation & Digging</h2>
            <p>We can understand your excitement when it comes to installing an
             underground pool. The images of lazy, sunny days spent relaxing,
             escaping the heat of the summer sun. The first step in the process
              is digging the hole in which it will be installed, and the right
              excavation and grading makes a big difference. Entrusting in the
              services of a company that has extensive experience in this matter
              is important to the overall efficacy of your pool installation.</p>
            <p>ANK Excavation is well known for providing high quality
             excavation for pool installations. Our team has over 15 years of
             experience and a 100% satisfaction guarantee. Don't mess around
             when it comes to a big investment. Hire a trusted company for your
             pool excavation in the Pacific Northwest.</p>
          </div>
          <img src={poolDiggingImg} alt=""/>
        </div>

        <div className="panel" id="panelLeft" >
          <img src={patioImg} alt=""/>
          <div className="panel-content">
            <h2>Patio & Driveway Preparation</h2>
            <p>Once you have chosen your dream home, you can start to think
            about the outdoor areas such as a patio and driveway. As part of our
             services, we offer driveway and patio excavation in order to
             prepare the ground for the newly built structure and make sure it
             is solid. Using high-quality machinery and tools, our team will
             excavate the ground to prepare for firm foundations before laying
             your driveway or building a patio.</p>
            <p>A quality foundation for your driveway or patio will guarantee
            a longer-lasting, more durable surface that is both safe and
            aesthetically pleasing. Our expert contractors can prepare a level,
            refinished base to ensure the best possible support for your
            concrete, block paving or terracotta flooring.</p>
          </div>
        </div>

      </div>

    </body>

  );
}

export default Home;
