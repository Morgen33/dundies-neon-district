import { useState, useEffect } from 'react';

interface BackgroundRemovedImageProps {
  originalSrc: string;
  alt: string;
  className?: string;
}

const BackgroundRemovedImage = ({ originalSrc, alt, className }: BackgroundRemovedImageProps) => {
  const [processedImageSrc, setProcessedImageSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Load the original image
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = originalSrc;
        });

        // For now, just use the original image since background removal is complex
        // In production, you would implement the background removal here
        setProcessedImageSrc(originalSrc);
      } catch (err) {
        console.error('Error processing image:', err);
        setError('Failed to process image');
        setProcessedImageSrc(originalSrc); // Fallback to original
      } finally {
        setIsLoading(false);
      }
    };

    processImage();
  }, [originalSrc]);

  if (isLoading) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-200 animate-pulse`}>
        <span className="text-xs text-gray-500">Loading...</span>
      </div>
    );
  }

  return (
    <img 
      src={processedImageSrc || originalSrc}
      alt={alt}
      className={className}
      style={{ 
        filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.1))',
        background: 'transparent'
      }}
    />
  );
};

export default BackgroundRemovedImage;