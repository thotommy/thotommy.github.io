import React, { useState } from 'react';

export default function Index(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center gap-y-20 h-screen font-medium">
        <h1 className="text-8xl">Tommy Ho</h1>
        <h2 className="text-5xl">Software Engineer</h2>
    </div>
  );
}