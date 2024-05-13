import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from '../../data/testimonials'
import TestimonialsHeadingImage from '../../assets/testimonialHero.png'
import css from './testimonialStyle.module.css'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.wrapper_container}>
                <span>Top Rated</span>
                <span>Seedly say has suitable disposal and boy . Exercise joy man children rejoiced</span>
            </div>

                <img src={TestimonialsHeadingImage} alt="Testimonials Image" />

            <div className={css.wrapper_container}>
                <span>100k</span>
                <span>Happy Customers with us</span>
            </div>
        </div>

        <div className={css.reviewHeading}>REVIEW</div>

        <div className={css.review}>
            <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={40}
                grabCursor={true}
                loop={true}
                className={css.tReview}
            >
                {
                    TestimonialsData.map((review, index) =>{
                        return(
                            <SwiperSlide key={index}>
                                <div className={css.testimonial}>
                                    <img src={review.image} alt="Review Image" />
                                    <span>{review.comment}</span>
                                    <hr />
                                    <span>{review.name}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials