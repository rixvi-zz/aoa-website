'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageDebuggerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ImageDebugger({ src, alt, width = 32, height = 24 }: ImageDebuggerProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLoad = () => {
    setStatus('loaded');
    console.log(`✅ Image loaded successfully: ${src}`);
  };

  const handleError = (error: any) => {
    setStatus('error');
    const errorMsg = error?.message || 'Unknown error';
    setErrorMessage(errorMsg);
    console.error(`❌ Image failed to load: ${src}`, error);
  };

  return (
    <div className="border p-4 rounded-lg bg-gray-50">
      <div className="mb-2">
        <strong>Image Debug:</strong> {alt}
      </div>
      <div className="mb-2">
        <strong>URL:</strong> <code className="text-xs bg-gray-200 p-1 rounded">{src}</code>
      </div>
      <div className="mb-2">
        <strong>Status:</strong> 
        <span className={`ml-2 px-2 py-1 rounded text-xs ${
          status === 'loaded' ? 'bg-green-100 text-green-800' :
          status === 'error' ? 'bg-red-100 text-red-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {status}
        </span>
      </div>
      {errorMessage && (
        <div className="mb-2 text-red-600 text-xs">
          <strong>Error:</strong> {errorMessage}
        </div>
      )}
      <div className="flex items-center space-x-4">
        <div className="border rounded overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            className="block"
          />
        </div>
        <div className="border rounded overflow-hidden">
          <img
            src={src}
            alt={`${alt} (native)`}
            width={width}
            height={height}
            onLoad={() => console.log(`✅ Native img loaded: ${src}`)}
            onError={() => console.log(`❌ Native img failed: ${src}`)}
            className="block"
          />
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-2">
        Left: Next.js Image | Right: Native img
      </div>
    </div>
  );
}