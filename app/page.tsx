import data from "../data.json";
import Hero from "../components/Hero";
import About from "../components/About";
import Impact from "../components/Impact";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero
        name={data.personal.name}
        tagline={data.personal.tagline}
        email={data.personal.email}
        linkedin={data.personal.linkedin}
      />
      <About bio={data.personal.bio} />
      <Impact items={data.impact} />
      <Experience
        relevant={data.experience.relevant}
        other={data.experience.other}
      />
      <Projects projects={data.projects} />
      <Education
        education={data.education}
        volunteering={data.volunteering}
        languages={data.languages}
        skills={data.skills}
      />
      <Contact
        email={data.personal.email}
        linkedin={data.personal.linkedin}
      />
    </main>
  );
}
