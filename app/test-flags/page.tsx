'use client';

import ImageDebugger from '@/components/ImageDebugger';

const testCountries = [
  { name: 'United States', code: 'us' },
  { name: 'Germany', code: 'de' },
  { name: 'Japan', code: 'jp' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'France', code: 'fr' },
];

export default function TestFlagsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Flag Image Loading Test</h1>
      
      <div className="space-y-6">
        {testCountries.map((country) => (
          <ImageDebugger
            key={country.code}
            src={`/flags/${country.code}.png`}
            alt={`${country.name} flag`}
            width={32}
            height={24}
          />
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Debug Information</h2>
        <p className="text-sm text-gray-600">
          Open browser console to see detailed loading logs.
          Check Network tab to verify image requests.
        </p>
      </div>
    </div>
  );
}