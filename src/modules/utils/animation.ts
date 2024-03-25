import { motion } from 'framer-motion';

export const appendAnimationProps = {
  as: motion.div,
  animate: { opacity: [0, 1], y: [200, 0] },
  transition: { duration: 1 },
};
