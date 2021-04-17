import React from 'react';

export default function HeadingSection({ children }) {
  return (
    <h2 className="text-2xl text-black font-semibold font-mono text-center">
      {children}
    </h2>
  );
}
