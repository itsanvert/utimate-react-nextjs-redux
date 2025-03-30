import { StrictMode } from "react"; // Ensures best practices and warnings in development
import { createRoot } from "react-dom/client"; // React 18 way to create the root element
import "./index.css"; // Importing styles

// Array of skills with their properties
const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and Github",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

// Main App component that holds all sub-components
function App() {
  return (
    <div className="card">
      <Avatar /> {/* Displays the user's avatar */}
      <div className="data">
        <Intro /> {/* Displays the introduction */}
        <SkillList /> {/* Displays the list of skills */}
      </div>
    </div>
  );
}

// Avatar component to display the profile picture
function Avatar() {
  return <img className="avatar" src="logo.png" alt="Vert San" />;
}

// Introduction component for name and bio
function Intro() {
  return (
    <div>
      <h1>Vert San</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

// SkillList component to map through the skills array and render each skill
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill} // Adding a unique key for React optimization
        />
      ))}
    </div>
  );
}

// Skill component for individual skill items
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {/* Displays different icons based on skill level */}
        {level === "beginner" && "🐼"}
        {level === "intermediate" && "👾"}
        {level === "advanced" && "🐱‍👤"}
      </span>
    </div>
  );
}

// Selecting the root element where React will render the app
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Rendering the App component inside React's StrictMode for best practices
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
