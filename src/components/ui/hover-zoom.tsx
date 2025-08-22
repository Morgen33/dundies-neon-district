import { motion, Transition } from "framer-motion";
import { useState, startTransition } from "react";

interface ZoomTextUIProps {
  children: React.ReactNode;
  zoomScale?: number;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ZoomTextUI - A text component that zooms in on hover with smooth animations
 */
export function ZoomTextUI({
  children,
  zoomScale = 2.5,
  transition = { duration: 0.1 },
  className = "",
  style,
}: ZoomTextUIProps) {
  const [isHovered, setIsHovered] = useState(false);

  const zoomInStyle = { scale: zoomScale };
  const zoomOutStyle = { scale: 1 };

  const updateTransformOrigin = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const childElement = e.currentTarget.firstChild as HTMLElement;
    if (childElement) {
      childElement.style.transformOrigin = `${x}px ${y}px`;
    }
  };
  
  const handleMouseEnter = () => startTransition(() => setIsHovered(true));
  const handleMouseLeave = () => startTransition(() => setIsHovered(false));

  return (
    <motion.div
      style={{
        ...style,
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
      onMouseMove={updateTransformOrigin}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={isHovered ? zoomInStyle : zoomOutStyle}
        transition={transition}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}