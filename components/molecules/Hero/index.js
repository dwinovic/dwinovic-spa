import React from 'react';
import { Header } from '..';
import { Button } from '../../atoms';

export default function Hero() {
  return (
    <div>
      <div className="bg-hero h-[950px] ">
        <div className="container mx-auto">
          <Header />
          <div className="text-center mt-60">
            <h2 className="text-white text-4xl font-semibold font-mono w-8/12 mx-auto leading-relaxed">
              Saya seorang front-end engineer, back-end engineer, dan juga UI
              designer
            </h2>
            <p className="text-lg text-white text-opacity-60 w-4/12 mx-auto mt-6 leading-relaxed">
              Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
              design.
            </p>
            <Button className="mt-14" variant="yellow">
              Lets Go
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
