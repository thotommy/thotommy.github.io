import type React from 'react';
import { Typewriter } from 'react-simple-typewriter'

export const ContactComponent: React.FC = () => {
    return(
        <h1 className="text-2xl">
        <Typewriter
            words={['$Contact']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}          
          />
        </h1>
    );
}