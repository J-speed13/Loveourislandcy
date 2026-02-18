import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Simplified Logo component that strictly uses the official logo.png file.
 */
export function Logo({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <img 
      src="/assets/logo.png" 
      alt="Love Our Island Logo" 
      className={`object-contain select-none ${className}`}
      onError={(e) => {
        // Fallback to relative path if absolute fails in certain environments
        const img = e.target as HTMLImageElement;
        if (img.src.includes("/assets/logo.png")) {
          img.src = "assets/logo.png";
        }
      }}
    />
  );
}
