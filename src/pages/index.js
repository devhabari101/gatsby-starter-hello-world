// src/pages/index.js
import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import "/styles/global.css"; // Import global CSS here

const IndexPage = () => (
  <>
    <Header />
    <MainContent />
    <Footer />
  </>
);

export default IndexPage;
