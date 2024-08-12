import React from "react";

const MainContent = () => (
  <main>
    <div class="hero-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="hero-title">Welcome to Our Travel Agency</h1>
                    <p class="hero-subtitle">We offer the best travel and insurance services for your needs.</p>
                </div>
            </div>
        </div>
    </div>

    <section class="services-section">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="service-box">
                        <h3>Airline Ticketing</h3>
                        <p>Book your flights with us for the best prices.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-box">
                        <h3>Marine Ticketing</h3>
                        <p>We offer reliable marine ticketing services.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-box">
                        <h3>Logistics</h3>
                        <p>Our logistics services ensure timely delivery.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </main>
);

export default MainContent;
