import { motion } from "framer-motion";
import HeroImage from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import css from "./heroStyle.module.css";

const HeroSection = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className={css.container}>
      {/* ==left side=== */}
      <div className={css.h_side}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            rem autem harum
          </span>
        </div>
      </div>

      {/* ===middle side=== */}
      <div className={css.wrapper}>
        {/* blue circle animation */}

        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={css.blue_circle}
        ></motion.div>

        {/* image transition */}
        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={HeroImage}
          alt="Hero Image"
        />

        {/* ==card div animation=== */}
        <motion.div 
         initial={{ right: "0%" }}
         whileInView={{ right: "-10%" }}
         transition={transition}
        className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===right side=== */}
      <div className={css.h_side}>
        <div className={css.traffic}>
          <span>1.5M</span>
          <span>Monthly Trffic</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
