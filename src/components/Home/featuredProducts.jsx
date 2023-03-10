import { Link } from "react-router-dom";
import Loader from "../shared/Loade";
import { useProductsContext } from "../../context/ProductsContect";
//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { formatPrice } from "../../utils/helpers";

import "./swiperCustom.css";

const FeturedProducts = () => {
  const { feturedProducts: products, isProductsLoading: Loading } =
    useProductsContext();
  return (
    <section className="featured-products-section sec-wrapper">
      <div className="container">
        <div className="featured-products-wrapper">
          <header></header>
          {products.length < 1 ? (
            <Loader />
          ) : (
            <article className="featured-products-slider-wrapper">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={70}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                breakpoints={{
                  650: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  800: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {products.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                      <article className="featured-p-card">
                        <Link to={`products/${product.id}`}>
                          <div className="p-card-img-container">
                            <img src={product.image} />
                            <div className="d-flex-row-center featured-p-overlay"></div>
                          </div>
                        </Link>

                        <div className="featured-p-details">
                          <h6>{product.name} </h6>
                          <div className="featured-p-price">
                            <strong> {formatPrice(product.price)} </strong>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </article>
          )}

          <Link to="products" className="btn featured-btn">
            all products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeturedProducts;
