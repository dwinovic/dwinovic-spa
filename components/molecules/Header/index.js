import React from 'react';
import { Nav } from '..';
import { Button, Logo } from '../../atoms';

export default function Header() {
  return (
    <div className="flex py-12">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="w-3/12 text-right">
        <Button variant="outline-yellow">Contact</Button>
      </div>
    </div>
  );
}
