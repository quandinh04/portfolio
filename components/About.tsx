import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image'; 

const About = () => {
  return (
    <section>
      <SectionTitle>
        About
      </SectionTitle>
      <div className="wrapper-fill flex flex-col md:flex-row w-full justify-between items-center mt-7 md:mt-19 mb-20 pt-10 ">
        <div className="flex flex-col">
          <div className="description w-full md:w-3/4">
            <div className="flex flex-col md:flex-row">
              <div className="profile-avatar md:mr-10">  
                <div className="rounded-md max-w-sm w-48 h-full mx-auto">
                  <div className="flex h-full">
                    <div className="flex">
                      <Image className="rounded-md object-cover object-center w-full h-full" width='200' height='250' src="/aboutMe.png" alt="Picture of the author"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-10 md:mt-0">
                <p>My name is Quan, a current sophomore at Purdue University, majoring in Computer Science. As of right
                now, I am still on the journey to various fields in Computer Science through research and coding projects, trying to find my life&aposs calling. Does it exist? Who knows.</p>
                <br />
                <p>My decision to gear toward CS, in hindsight, was instrumental to the connections and friendships I made during three years of high school. Even though CS might not be my final career, the knowledge I gained will serve me well in the years to come.</p>
                <br/>
                <p>Fun fact: I am a hardcore memer and cat lover! Just text me and your chat will be flooded with cat memes!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
