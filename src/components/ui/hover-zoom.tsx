import { motion, Transition } from "framer-motion";
import { useState, startTransition } from "react";

/**
 * ZoomImageUI - Component that displays an image and zooms it on hover.
 * All configuration (scale, colors, image) is passed through props.
 */
export function ZoomImageUI({
    image = { 
        src: "https://framerusercontent.com/images/70D908ZnP0cnDre3T7DlePO12M.jpeg", 
        alt: "3D Gradient Waves" 
    },
    zoomScale = 2.5,
    transition = { duration: 0.1, ease: [0.4, 0, 0.2, 1] },
    backgroundColor = "#FFFFFF",
    borderRadius = 8,
    style,
}: {
    image?: { src: string; alt: string };
    zoomScale?: number;
    transition?: Transition;
    backgroundColor?: string;
    borderRadius?: number;
    style?: React.CSSProperties;
}) {
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
                backgroundColor,
                borderRadius,
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
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

/**
 * ZoomTextUI - Component that displays text and zooms it on hover.
 */
export function ZoomTextUI({
    children,
    zoomScale = 1.1,
    transition = { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    className = "",
    style,
}: {
    children: React.ReactNode;
    zoomScale?: number;
    transition?: Transition;
    className?: string;
    style?: React.CSSProperties;
}) {
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
            className={className}
            style={style}
            onMouseMove={updateTransformOrigin}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                animate={isHovered ? zoomInStyle : zoomOutStyle}
                transition={transition}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}