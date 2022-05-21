import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';

export default function App() {
  return (
    <div className="p-5 max-w-xl mx-auto">
      <h1 className="text-4xl text-blue-500">
        <CodeIcon className="inline-block mr-2 h-10" />
        Main Page
      </h1>
      <button className="button green">button</button>
    </div>
  );
}