import type React from 'react';
import { Typewriter } from 'react-simple-typewriter'

export const MainTitleScreen: React.FC = () => {
  // const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center gap-y-10 h-screen font-medium mt-[-4rem]">
        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-8xl">Tommy Ho</h1>
        <h2 className="sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl"><Typewriter
            words={['Software Engineer', 'Full Stack Developer', 'Angular Developer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h2>
    </div>
  );
}