import React from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: keyof typeof projectData | null; // Ensure projectId matches the keys of projectData
}

const projectData = {
  "habit-tracker": {
    header: "Habit Tracker",
    description:
      "Design mockups for a project called RockeTasks, a habit tracker mobile app that utilizes gamification to help users improve their habits and achieve their goals.",
    link: "https://example.com/habit-tracker",
    image: "/images/habit-tracker.png",
  },
  "weather-app": {
    header: "Weather App Redesign",
    description:
      "A user interface redesign project for a weather application, focusing on usability and aesthetics.",
    link: "https://example.com/weather-app",
    image: "/images/weather-app-redesign.png",
  },
  // Add more projects here...
};

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, projectId }) => {
  if (!isOpen || !projectId) return null;

  const project = projectData[projectId];

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-lg p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        {/* Project Image */}
        <div className="mb-4">
          <img
            src={project.image}
            alt={project.header}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        {/* Project Header */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{project.header}</h2>
        {/* Project Description */}
        <p className="text-gray-600 mb-4">{project.description}</p>
        {/* View Project Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
