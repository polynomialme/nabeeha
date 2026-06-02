import data from "../data.json";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Impact from "../components/Impact";
import SkillsToolkit from "../components/SkillsToolkit";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          name={data.personal.name}
          tagline={data.personal.tagline}
          email={data.personal.email}
          linkedin={data.personal.linkedin}
          photo={data.personal.photo}
        />
        <About bio={data.personal.bio} />
        <Impact items={data.impact} />
        <SkillsToolkit
          subtitle={data.skillsToolkit.subtitle}
          categories={data.skillsToolkit.categories}
        />
        <Experience items={data.experience} />
        <Projects projects={data.projects} />
        <Education
          education={data.education}
          volunteering={data.volunteering}
        />
        <Contact
          email={data.personal.email}
          linkedin={data.personal.linkedin}
        />
      </main>
    </>
  );
}
