"use client";
import { ReactNode, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HorizontalScrollFadeProps {
  children: ReactNode[];
}

export default function HorizontalScrollFade({
  children,
}: HorizontalScrollFadeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      if (isAnimating) return;

      if (e.deltaY > 5 && currentIndex < children.length - 1) {
        setIsAnimating(true);
        setCurrentIndex(currentIndex + 1);
      } else if (e.deltaY < -5 && currentIndex > 0) {
        setIsAnimating(true);
        setCurrentIndex(currentIndex - 1);
      }
    },
    [currentIndex, children.length, isAnimating]
  );

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div
      onWheel={handleWheel}
      className="w-screen h-screen overflow-hidden relative"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
          onAnimationComplete={() => setIsAnimating(false)}
          className="absolute top-0 left-0 w-full h-full"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
