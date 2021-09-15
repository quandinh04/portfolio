import React from 'react';
import SectionTitle from './SectionTitle';

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
                      <img className="rounded-md object-cover object-center w-full h-full" src="/aboutMe.png" alt="profile-picture" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-10 md:mt-0">
                <p>I'm The Quan, a student at High School for the Gifted VNU-HCM, majoring in English. As of right now, I'm still exploring my future career through coding projects and MOOCs, trying to find my life's calling. Does it exist? Who knows.</p>
                <br />
                <p>My decision to gear toward Computer Science, in hindsight, was instrumental to the connections and friendships I made during three years of high school. Even though CS might not be my final career, the knowledge I gained will serve me well in the years to come.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
