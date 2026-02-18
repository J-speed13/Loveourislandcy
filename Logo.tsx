import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Logo component that attempts to load the image asset from multiple potential paths.
 * This ensures the symbol is used consistently across the site.
 */
export function Logo({ className = "h-12 w-auto" }: LogoProps) {
  const [src, setSrc] = useState("/assets/logo.png");
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (src === "/assets/logo.png") {
      setSrc("assets/logo.png");
    } else if (src === "assets/logo.png") {
      setSrc("/logo.png");
    } else if (src === "/logo.png") {
      setSrc("logo.png");
    } else {
      setHasError(true);
    }
  };

  // If even with all path attempts it fails, we still render an img tag 
  // but we remove the 'Leaf' fallback to satisfy the request of using the logo only.
  return (
    <img 
      src={src} 
      alt="Love Our Island Logo" 
      className={`object-contain select-none transition-opacity duration-300 ${className} ${hasError ? 'opacity-20' : 'opacity-100'}`}
      onError={handleError}
    />
  );
}
