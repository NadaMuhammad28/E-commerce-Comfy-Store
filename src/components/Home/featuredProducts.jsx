import { useProductsContext } from "../../context/ProductsContect";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Loader from "../shared/Loade";

import { useEffect, useState } from "react";
const FeaturedProducts = () => {
  const { feturedProducts: products, isProductsLoading: Loading } =
    useProductsContext();
  const carouselRef = useRef(null);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  console.log(products);
  return (
    <section className="featured-products-section sec-wrapper">
      <div className="container">
        <div className="featured-products-wrapper">
          <header>
            <Grid2 container spacing={{ xs: 3 }}>
              <Grid2 item md={6}>
                <h3 data-aos="fade-right">
                  custom furniture <br />
                  built only for you
                </h3>
              </Grid2>
              <Grid2
                item
                md={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <p data-aos="fade-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  quisquam saepe id reiciendis sunt, repudiandae libero amet rem
                  quia quod?
                </p>
              </Grid2>
            </Grid2>
          </header>

          <div className="featured-products-slider-wrapper">
            {products.length !== 0 ? (
              <Carousel
                ref={carouselRef}
                breakPoints={breakPoints}
                // enableAutoPlay
                // autoPlaySpeed={500}
                disableArrowsOnEnd={false}
              >
                {products &&
                  products.map((product) => {
                    return (
                      <Link>
                        <article>
                          <img src={product.image} alt={product.name} />

                          <div>
                            <h5>{product.name}</h5>
                            {}
                          </div>
                        </article>
                      </Link>
                    );
                  })}
              </Carousel>
            ) : (
              <Loader />
            )}
          </div>

          <Link to="products">all products</Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;