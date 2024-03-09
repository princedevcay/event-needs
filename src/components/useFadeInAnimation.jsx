// useFadeInAnimation.js
import { motion } from 'framer-motion';

const useFadeInAnimation = () => {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 }
    },
  };

  return {
    initial: "hidden",
    animate: "visible",
    variants: fadeVariants
  };
};

export default useFadeInAnimation;