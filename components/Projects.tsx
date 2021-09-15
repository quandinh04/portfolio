import React from 'react';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section>
      <SectionTitle subtitle="Here are some of the applications I built / collaborated on.">
        Projects
      </SectionTitle>
      <div className="grid grid-cols-1 gap-x-[140px] gap-y-20 pt-10 lg:grid-cols-2 ">
        <ProjectCard
          imgSrc="/portfolio-v1.png"
          title="Portfolio v.1"
          description="My first personal website :0 (Not mobile responsive, unfortunately)"
          liveLink="https://portfolio-v-1.vercel.app/"
          repoLink="https://github.com/quandinh04/portfolio-v.1"
        />
        <ProjectCard
          imgSrc="/smartmockups_ktm4x1kl.jpg"
          title="Excellaca"
          description="An educational website made with group of friends"
          liveLink="https://excellaca.org/"
          repoLink="https://github.com/therealozp/excel-academy"
        />
      </div>
    </section>
  );
};

export default Projects;
