import React, { Component, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

export default class Index extends Component {
  // const [count, setCount] = useState<number>(0);

    typeWrite() {
    // const target2 = this.projectTypeWriter.nativeElement;
    // console.log(target2);
    // const writer2 = new Typewriter(target2, {
    //   loop: false,
    //   typeColor: 'white',
    //   animateCursor: true,
    //   cursorColor: 'white',
    //   typeSpeed: 40,
    //   deleteSpeed: 0,
    // });

    // this.isTitleVisible2 = writer2.type('cd Projects').queueClearText().type('Projects');
  }
  render(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 h-screen font-medium">
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
}