import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Card({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('glass rounded-3xl p-5', className)}
    >
      {children}
    </motion.div>
  );
}
