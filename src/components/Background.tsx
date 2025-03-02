import React from 'react';

interface BackgroundProps {
  imageUrl: string;
  overlay?: boolean;
}

export default function Background({ imageUrl, overlay = true }: BackgroundProps) {
  return (
    <>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundBlendMode: 'overlay',
        }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 to-navy-900/80" />
      )}
    </>
  );
}