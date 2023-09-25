import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

export const ContactComponent: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const sendMessage = () => {
      // Implement your logic to send the message here
      console.log('Message sent:', { username, email, message });
    };

    return(
        <div className="flex justify-center">

        <form className="contactContainer">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="hidden">
              <input
                type="checkbox"
                name="ultimate_chiffon_pinstriped_dolphin"
                value="1"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="w-full">
              <label className="text-white">Name</label>
              <input
                className="w-full bg-white"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="w-full">
              <label className="text-white">Email</label>
              <input
                className="w-full bg-white"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                required
                autoComplete="off"
              />
            </div>
            <div className="w-full">
              <label className="text-white">Message</label>
              <textarea
                className="w-full bg-white resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                cols={50}
                autoComplete="off"
              ></textarea>
            </div>
            <div className="col-span-2 text-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={sendMessage}
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default ContactComponent;