import { motion } from 'framer-motion';
import Header from '../components/Header';
import { VStack } from '@chakra-ui/react';
import ImageSlider from '../components/ImageSlider';
import ClearValueProposition from '../components/ClearValueProposition';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HowItWorks from '../components/HowItWorks';
import FeaturedVendorsList from '../components/FeaturedVendorsList';
import FeaturedBlogPostsList from '../components/FeaturedBlogPostsList';
import Footer from '../components/Footer';
import VendorSignUp from '../components/VendorSignUp';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      staggerChildren: 0.2, // This staggers the animation of children
      duration: 1 // This makes the animation of the container slower
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1 // This makes the animation of each child slower
    }
  }
};

const Home = () => {
  
  

  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <ImageSlider />
        <VStack spacing={8} align="stretch">
          <motion.div variants={itemVariants}>
            <ClearValueProposition />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HowItWorks />
          </motion.div>
          <motion.div variants={itemVariants}>
            <VendorSignUp />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeaturedVendorsList />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeaturedBlogPostsList />
          </motion.div>
        </VStack>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;