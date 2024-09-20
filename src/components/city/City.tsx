import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const City = () => {
  // SliderList
  const SliderList = {
    backgroundRepeat: "no-repeat",
    display: "flex",
    height: "100%",
    backgroundSize: "26px",
    marginRight: "10px",
  };

  //   OwlCarousel
  const customPrevIcon = '<i className="fa fa-chevron-left"></i>';
  const customNextIcon = '<i className="fa fa-chevron-left"></i>';
  const RecommendedProps = {
    items: 7,
    margin: 10,
    loop: true,
    nav: false,
    autoWidth: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 7,
      },
    },
  };

  const RecommendedCity = {
    items: 4,
    margin: 40,
    loop: false,
    nav: true,
    autoWidth: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  };

  const [activeCityTab, setActiveCityTab] = useState("melbourne");
  const [selectedCityTab, setSelectedCityTab] = useState([
    {
      id: "melbourne",
      label: "Australia",
    },
    {
      id: "barbados",
      label: "Barbados",
    },
    {
      id: "brazil",
      label: "Brazil",
    },
    {
      id: "canada",
      label: "Canada",
    },

    {
      id: "france",
      label: "France",
    },
    {
      id: "ireland",
      label: "Ireland",
    },
    {
      id: "italy",
      label: "Italy",
    },
    {
      id: "mexico",
      label: "Mexico",
    },
    {
      id: "netherlands",
      label: "Netherlands",
    },
    {
      id: "newzealand",
      label: "New Zealand",
    },
    {
      id: "poland",
      label: "Poland",
    },
    {
      id: "portugal",
      label: "Portugal",
    },
    {
      id: "saudiarabia",
      label: "Saudi Arabia",
    },
    {
      id: "singapore",
      label: "Singapore",
    },
    {
      id: "southafrica",
      label: "South Africa",
    },
    {
      id: "spain",
      label: "Spain",
    },
    {
      id: "uae",
      label: "United Arab Emirates",
    },
    {
      id: "uk",
      label: "United Kingdom",
    },
    {
      id: "us",
      label: "United States",
    },
  ]);

  return (
    <div>
      <section className="country_sec section-gap">
        <div className="container">
          <h2 className="titleh2 here">Browse by City</h2>
          <OwlCarousel
            id="owl-city"
            className="owl-theme "
            {...RecommendedProps}
          >
            {selectedCityTab.map((rec: { id: string; label: string }) => {
              return (
                <div key={rec.id} className="item">
                  <button
                    onClick={(event) => {
                      setActiveCityTab(rec.id);
                    }}
                  >
                    {rec.label}
                  </button>
                </div>
              );
            })}
          </OwlCarousel>
          <div className="tabcontainer">
            <div
              className="tab-content"
              style={{
                display: activeCityTab === "melbourne" ? "block" : "none",
              }}
              id="melbourne"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Melbourne</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Melbourne</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Melbourne</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Melbourne</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Melbourne</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Melbourne</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Melbourne</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Melbourne</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Melbourne</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Sydney</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Sydney</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Sydney</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Sydney</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Sydney</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Sydney</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Sydney</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Sydney</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Sydney</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Brisbane</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Brisbane</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Brisbane</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Brisbane</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Brisbane</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Brisbane</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Brisbane</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Brisbane</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Brisbane</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Perth</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Perth</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Perth</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Perth</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Perth</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Perth</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Perth</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Perth</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Perth</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Gold Coast</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Gold Coast</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Gold Coast</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Gold Coast</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Gold Coast</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Gold Coast</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Gold Coast</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Gold Coast</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashe</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "barbados" ? "block" : "none",
              }}
              id="barbados"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Bridgetown</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Bridgetown</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Bridgetown</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Bridgetown</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Bridgetown</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Bridgetown</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Bridgetown</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Bridgetown</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Bridgetown</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Oistins</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Oistins</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Oistins</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Oistins</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Oistins</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Oistins</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Oistins</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Oistins</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Holetown</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Holetown</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Holetown</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Holetown</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Holetown</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Holetown</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Holetown</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Holetown</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>St. Martins</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in St. Martins</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in St. Martins</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in St. Martins</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in St. Martins</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in St. Martins</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in St. Martins</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Ellerton</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Ellerton</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Ellerton</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{ display: activeCityTab === "brazil" ? "block" : "none" }}
              id="brazil"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>São Paulo</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in São Paulo</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in São Paulo</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in São Paulo</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in São Paulo</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in São Paulo</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in São Paulo</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in São Paulo</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in São Paulo</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Rio de Janeiro</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Rio de Janeiro</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Rio de Janeiro</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Rio de Janeiro</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Rio de Janeiro</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Rio de Janeiro</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Rio de Janeiro</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Rio de Janeiro</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Rio de Janeiro</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Belo Horizonte</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Belo Horizonte</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Belo Horizonte</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Belo Horizonte</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Belo Horizonte</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Belo Horizonte</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Belo Horizonte</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Belo Horizonte</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Belo Horizont</Link>
                      </li>
                    </ul>
                  </div>
                  <div className=" item">
                    <h3>Curitiba</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Curitiba</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Curitiba</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Curitiba</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Curitiba</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Curitiba</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Curitiba</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Porto Alegre</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Porto Alegre</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Porto Alegre</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Porto Alegre</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Porto Alegre</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Porto Alegre</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{ display: activeCityTab === "canada" ? "block" : "none" }}
              id="canada"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Toronto</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Toronto</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Toronto</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Toronto</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Toronto</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Toronto</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Toronto</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Toronto</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Toronto</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Montréal</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Montréal</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Montréal</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Montréal</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Montréal</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Montréal</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Montréal</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Montréal</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Montréal</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Vancouver</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Vancouver</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Vancouver</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Vancouver</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Vancouver</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Vancouver</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Vancouver</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Vancouver</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Vancouver</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Calgary</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Calgary</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Calgary</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Calgary</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Calgary</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Calgary</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Calgary</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Calgary</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Calgary</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Edmonton</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Edmonton</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Edmonton</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Edmonton</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Edmonton</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Edmonton</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Edmonton</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Edmonton</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Edmonton</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{ display: activeCityTab === "france" ? "block" : "none" }}
              id="france"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Paris</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Paris</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Paris</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Paris</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Paris</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Paris</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Paris</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Paris</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Paris</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Lyon</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Lyon</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Lyon</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Lyon</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Lyon</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Lyon</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Lyon</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Lyon</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Lyon</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Bordeaux</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Bordeaux</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Bordeaux</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Bordeaux</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Bordeaux</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Bordeaux</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Bordeaux</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Bordeaux</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Bordeaux</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Marseille</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Marseille</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Marseille</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Marseille</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Marseille</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Marseille</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Marseille</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Marseille</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Marseille</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Grenoble</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Grenoble</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Grenoble</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Grenoble</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Grenoble</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Grenoble</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Grenoble</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Grenoble</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Grenoble</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            {/* <div className="tab-content" style={{ display: activeCityTab === "france" ? "block" : "none" }} id="greece">
				<div className="row pt-2">
        <OwlCarousel  className="owl-theme " {...RecommendedCity}>
					<div className="item">
						<h3>Athens</h3>
						<ul className="country-list">
							<li><Link to="/">Hair Salons in Athens</Link></li>
							<li><Link to="/">Nail Salons in Athens</Link></li>
							<li><Link to="/">Barbershops in Athens</Link></li>
							<li><Link to="/">Beauty Salons in Athens</Link></li>
							<li><Link to="/">Spas in Athens</Link></li>
							<li><Link to="/">Massage in Athens</Link></li>
							<li><Link to="/">Waxing Salons in Athens</Link></li>
							<li><Link to="/">Eyebrows & Lashes in Athens</Link></li>
						</ul>
					</div>
					<div className="item">
						<h3>Thessaloniki</h3>
						<ul className="country-list">
							<li><Link to="/">Hair Salons in Thessaloniki</Link></li>
							<li><Link to="/">Nail Salons in Thessaloniki</Link></li>
							<li><Link to="/">Barbershops in Thessaloniki</Link></li>
							<li><Link to="/">Beauty Salons in Thessaloniki</Link></li>
							<li><Link to="/">Spas in Thessaloniki</Link></li>
							<li><Link to="/">Massage in Thessaloniki</Link></li>
							<li><Link to="/">Waxing Salons in Thessaloniki</Link></li>
							<li><Link to="/">Eyebrows & Lashes in Thessaloniki</Link></li>
						</ul>
					</div>
					<div className="item">
						<h3>Irakleio</h3>
						<ul className="country-list">						
							<li><Link to="/">Hair Salons in Irakleio</Link></li>
							<li><Link to="/">Nail Salons in Irakleio</Link></li>
							<li><Link to="/">Barbershops in Irakleio</Link></li>
							<li><Link to="/">Beauty Salons in Irakleio</Link></li>
							<li><Link to="/">Spas in Irakleio</Link></li>
							<li><Link to="/">Massage in Irakleio</Link></li>
							<li><Link to="/">Waxing Salons in Irakleio</Link></li>
							<li><Link to="/">Eyebrows & Lashes in Irakleio</Link></li>
						</ul>
					</div>
					<div className="item">
						<h3>Chania</h3>
						<ul className="country-list">						
							<li><Link to="/">Hair Salons in Chania</Link></li>
							<li><Link to="/">Nail Salons in Chania</Link></li>
							<li><Link to="/">Barbershops in Chania</Link></li>
							<li><Link to="/">Beauty Salons in Chania</Link></li>
							<li><Link to="/">Spas in Chania</Link></li>
							<li><Link to="/">Massage in Chania</Link></li>
							<li><Link to="/">Waxing Salons in Chania</Link></li>
							<li><Link to="/">Eyebrows & Lashes in Chania</Link></li>
						</ul>
					</div>
					<div className="item">
						<h3>Larisa</h3>
						<ul className="country-list">
							<li><Link to="/">Hair Salons in Larisa</Link></li>
							<li><Link to="/">Nail Salons in Larisa</Link></li>
							<li><Link to="/">Barbershops in Larisa</Link></li>
							<li><Link to="/">Beauty Salons in Larisa</Link></li>
							<li><Link to="/">Eyebrows & Lashes in Larisa</Link></li>
						</ul>
					</div>
          </OwlCarousel>
			  	</div>	
			  </div> */}

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "ireland" ? "block" : "none",
              }}
              id="ireland"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Dublin</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Dublin</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Dublin</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Dublin</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Dublin</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Dublin</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Dublin</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Dublin</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Dublin</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Cork</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Cork</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Cork</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Cork</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Cork</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Cork</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Cork</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Cork</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Cork</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Limerick</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Limerick</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Limerick</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Limerick</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Limerick</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Limerick</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Limerick</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Limerick</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Limerick</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Drogheda</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Drogheda</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Drogheda</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Drogheda</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Drogheda</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Drogheda</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Drogheda</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Drogheda</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Drogheda</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Galway</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Galway</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Galway</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Galway</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Galway</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Galway</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Galway</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Galway</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Galway</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "italy" ? "block" : "none",
              }}
              id="italy"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Rome</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Rome</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Rome</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Rome</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Rome</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Rome</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Rome</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Rome</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Rome</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Milan</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Milan</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Milan</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Milan</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Milan</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Milan</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Milan</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Milan</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Milan</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Naples</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Naples</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Naples</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Naples</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Naples</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Naples</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Naples</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Naples</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Naples</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Turin</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Turin</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Turin</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Turin</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Turin</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Turin</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Turin</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Turin</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Turin</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Brescia</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Brescia</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Brescia</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Brescia</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Brescia</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Brescia</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Brescia</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Brescia</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Brescia</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "mexico" ? "block" : "none",
              }}
              id="mexico"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Mexico City</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Mexico City</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Mexico City</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Mexico City</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Mexico City</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Mexico City</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Mexico City</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Mexico City</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Mexico City</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Monterrey</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Monterrey</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Monterrey</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Monterrey</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Monterrey</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Monterrey</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Monterrey</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Monterrey</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Monterrey</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Guadalajara</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Guadalajara</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Guadalajara</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Guadalajara</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Guadalajara</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Guadalajara</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Guadalajara</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Guadalajara</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Guadalajara</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Tijuana</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Tijuana</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Tijuana</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Tijuana</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Tijuana</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Tijuana</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Tijuana</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Tijuana</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Tijuana</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Queretaro</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Queretaro</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Queretaro</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Queretaro</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Queretaro</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Queretaro</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Queretaro</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Queretaro</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Queretaro</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "netherlands" ? "block" : "none",
              }}
              id="netherlands"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Amsterdam</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Amsterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Amsterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Amsterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Amsterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Amsterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Amsterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Amsterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Amsterdam</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Rotterdam</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Rotterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Rotterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Rotterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Rotterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Rotterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Rotterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Rotterdam</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Rotterdam</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>The Hague</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in The Hague</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in The Hague</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in The Hague</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in The Hague</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in The Hague</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in The Hague</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in The Hague</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in The Hague</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Eindhoven</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Eindhoven</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Eindhoven</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Eindhoven</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Eindhoven</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Eindhoven</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Eindhoven</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Eindhoven</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Eindhoven</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Zwolle</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Zwolle</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Zwolle</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Zwolle</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Zwolle</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Zwolle</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Zwolle</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "newzealand" ? "block" : "none",
              }}
              id="newzealand"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Auckland</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Auckland</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Auckland</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Auckland</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Auckland</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Auckland</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Auckland</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Auckland</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Auckland</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Christchurch</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Christchurch</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Christchurch</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Christchurch</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Christchurch</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Christchurch</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Christchurch</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Christchurch</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Christchurch</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Hamilton</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Hamilton</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Hamilton</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Hamilton</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Hamilton</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Hamilton</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Hamilton</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Hamilton</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Hamilton</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Wellington</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Wellington</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Wellington</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Wellington</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Wellington</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Wellington</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Wellington</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Wellington</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Wellington</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Tauranga</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Tauranga</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Tauranga</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Tauranga</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Tauranga</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Tauranga</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Tauranga</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Tauranga</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Tauranga</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "poland" ? "block" : "none",
              }}
              id="poland"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Warsaw</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Warsaw</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Warsaw</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Auckland</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Warsaw</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Warsaw</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Warsaw</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Warsaw</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Warsaw</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Gdańsk</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Gdańsk</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Gdańsk</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Gdańsk</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Gdańsk</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Gdańsk</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Gdańsk</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Gdańsk</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Gdańsk</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Łódź</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Łódź</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Łódź</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Łódź</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Łódź</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Łódź</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Łódź</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Łódź</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Łódź</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Kraków</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Kraków</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Kraków</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Kraków</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Kraków</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Kraków</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Kraków</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Kraków</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Kraków</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Lublin</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Lublin</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Lublin</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Lublin</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Lublin</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Lublin</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Lublin</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Lublin</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Lublin</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "portugal" ? "block" : "none",
              }}
              id="portugal"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Lisbon</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Lisbon</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Lisbon</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Lisbon</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Lisbon</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Lisbon</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Lisbon</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Lisbon</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Lisbon</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Porto</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Porto</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Porto</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Porto</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Porto</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Porto</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Porto</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Porto</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Porto</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Braga</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Braga</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Braga</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Braga</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Braga</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Braga</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Braga</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Braga</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Braga</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Guimaraes</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Guimaraes</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Guimaraes</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Guimaraes</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Guimaraes</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Guimaraes</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Guimaraes</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Guimaraes</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Guimaraes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Povoa de Varzim</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Povoa de Varzim</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Povoa de Varzim</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Povoa de Varzim</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Povoa de Varzim</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Povoa de Varzim</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Povoa de Varzim</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Povoa de Varzim</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Povoa de Varzim</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "saudiarabia" ? "block" : "none",
              }}
              id="saudiarabia"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Riyadh</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Riyadh</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Alkhubar</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Alkhubar</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Alkhubar</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Alkhubar</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Alkhubar</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Alkhubar</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Alkhubar</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Alkhubar</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Alkhubar</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Jiddah</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Jiddah</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Jiddah</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Jiddah</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Jiddah</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Jiddah</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Jiddah</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Jiddah</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Jiddah</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Addiriyah</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Addiriyah</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Addiriyah</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Addiriyah</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Addiriyah</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Addiriyah</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Addiriyah</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Addiriyah</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Addiriyah</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Al Riyadh</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Al Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Al Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Al Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Al Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Al Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Al Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Al Riyadh</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Al Riyadh</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "singapore" ? "block" : "none",
              }}
              id="singapore"
            >
              <div className="row pt-2">
                <div className="col-md-3 item">
                  <h3>Singapore</h3>
                  <ul className="country-list">
                    <li>
                      <Link to="/">Hair Salons in Singapore</Link>
                    </li>
                    <li>
                      <Link to="/">Nail Salons in Singapore</Link>
                    </li>
                    <li>
                      <Link to="/">Barbershops in Singapore</Link>
                    </li>
                    <li>
                      <Link to="/">Beauty Salons in Singapore</Link>
                    </li>
                    <li>
                      <Link to="/">Spas in Singapore</Link>
                    </li>
                    <li>
                      <Link to="/">Massage in Singapore</Link>
                    </li>
                    <li>
                      <Link to="/">Waxing Salons in Singapore</Link>
                    </li>
                    <li>
                      <Link to="/">Eyebrows & Lashes in Singapore</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "southafrica" ? "block" : "none",
              }}
              id="southafrica"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Johannesburg</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Johannesburg</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Johannesburg</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Johannesburg</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Johannesburg</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Johannesburg</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Johannesburg</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Johannesburg</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Johannesburg</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Cape Town</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Cape Town</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Cape Town</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Cape Town</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Cape Town</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Cape Town</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Cape Town</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Cape Town</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Cape Town</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Pretoria</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Pretoria</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Pretoria</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Pretoria</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Pretoria</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Pretoria</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Pretoria</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Pretoria</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Pretoria</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Centurion</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Centurion</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Centurion</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Centurion</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Centurion</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Centurion</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Centurion</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Centurion</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Centurion</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Durban</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Durban</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Durban</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Durban</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Durban</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Durban</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Durban</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Durban</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Durban</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "spain" ? "block" : "none",
              }}
              id="spain"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Barcelona</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Barcelona</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Barcelona</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Barcelona</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Barcelona</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Barcelona</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Barcelona</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Barcelona</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Barcelona</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Madrid</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Madrid</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Madrid</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Madrid</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Madrid</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Madrid</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Madrid</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Madrid</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Madrid</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Marbella</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Marbella</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Marbella</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Marbella</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Marbella</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Marbella</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Marbella</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Marbella</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Marbella</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Palma de Mallorca</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Palma de Mallorca</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Palma de Mallorca</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Palma de Mallorca</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Palma de Mallorca</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Palma de Mallorca</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Palma de Mallorca</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Palma de Mallorca</Link>
                      </li>
                      <li>
                        <Link to="/">
                          Eyebrows & Lashes in Palma de Mallorca
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Valencia</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Valencia</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Valencia</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Valencia</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Valencia</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Valencia</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Valencia</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Valencia</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Valencia</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "uae" ? "block" : "none",
              }}
              id="uae"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>Dubai</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Dubai</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Dubai</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Dubai</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Dubai</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Dubai</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Dubai</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Dubai</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Dubai</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Abu Dhabi</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Abu Dhabi</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Abu Dhabi</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Abu Dhabi</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Abu Dhabi</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Abu Dhabi</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Abu Dhabi</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Abu Dhabi</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Abu Dhabi</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Sharjah</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Sharjah</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Sharjah</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Sharjah</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Sharjah</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Sharjah</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Sharjah</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Sharjah</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Sharjah</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Ajman</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Ajman</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Ajman</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Ajman</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Ajman</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Ajman</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Ajman</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Ajman</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Ajman</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Al 'Ayn</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Al 'Ayn</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Al 'Ayn</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Al 'Ayn</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Al 'Ayn</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Al 'Ayn</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Al 'Ayn</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Al 'Ayn</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Al 'Ayn</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "uk" ? "block" : "none",
              }}
              id="uk"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>London</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in London</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in London</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in London</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in London</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in London</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in London</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in London</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in London</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Manchester</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Manchester</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Manchester</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Manchester</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Manchester</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Manchester</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Manchester</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Manchester</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Manchester</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Glasgow</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Glasgow</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Glasgow</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Glasgow</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Glasgow</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Glasgow</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Glasgow</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Glasgow</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Glasgow</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Birmingham</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Birmingham</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Birmingham</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Birmingham</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Birmingham</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Birmingham</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Birmingham</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Birmingham</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Birmingham</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Liverpool</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Liverpool</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Liverpool</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Liverpool</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Liverpool</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Liverpool</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Liverpool</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Liverpool</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Liverpool</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              className="tab-content"
              style={{
                display: activeCityTab === "us" ? "block" : "none",
              }}
              id="us"
            >
              <div className="row pt-2">
                <OwlCarousel className="owl-theme " {...RecommendedCity}>
                  <div className="item">
                    <h3>New York</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in New York</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in New York</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in New York</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in New York</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in New York</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in New York</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in New York</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in New York</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Los Angeles</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Los Angeles</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Miami</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Miami</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Miami</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Miami</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Miami</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Miami</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Miami</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Miami</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Miami</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Chicago</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Chicago</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Chicago</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Chicago</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Chicago</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Chicago</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Chicago</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Chicago</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Chicago</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Dallas</h3>
                    <ul className="country-list">
                      <li>
                        <Link to="/">Hair Salons in Dallas</Link>
                      </li>
                      <li>
                        <Link to="/">Nail Salons in Dallas</Link>
                      </li>
                      <li>
                        <Link to="/">Barbershops in Dallas</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty Salons in Dallas</Link>
                      </li>
                      <li>
                        <Link to="/">Spas in Dallas</Link>
                      </li>
                      <li>
                        <Link to="/">Massage in Dallas</Link>
                      </li>
                      <li>
                        <Link to="/">Waxing Salons in Dallas</Link>
                      </li>
                      <li>
                        <Link to="/">Eyebrows & Lashes in Dallas</Link>
                      </li>
                    </ul>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default City;
