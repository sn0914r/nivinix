import { useState } from "react";

import DeveloperForm from "../../components/admin/developer/DeveloperForm";
import DeveloperList from "../../components/admin/developer/DeveloperList";

const DeveloperDashboard = () => {
  // Sample developers data
  const [developers, setDevelopers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Love working with React, Node.js, and cloud technologies.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "GraphQL"],
      avatar: "SJ",
      social: {
        github: "https://github.com/sarahjohnson",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        portfolio: "https://sarahjohnson.dev",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Frontend Developer",
      bio: "Creative frontend developer specializing in modern UI/UX design and responsive web applications. Expert in React, Vue.js, and design systems.",
      skills: ["React", "Vue.js", "JavaScript", "CSS3", "Figma", "Tailwind"],
      avatar: "MC",
      social: {
        github: "https://github.com/michaelchen",
        linkedin: "https://linkedin.com/in/michaelchen",
        portfolio: "https://michaelchen.design",
      },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Backend Developer",
      bio: "Backend engineer focused on building robust APIs and microservices. Experienced with Python, Django, and containerization technologies.",
      skills: [
        "Python",
        "Django",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Redis",
      ],
      avatar: "ER",
      social: {
        github: "https://github.com/emilyrodriguez",
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        portfolio: "https://emilyrodriguez.tech",
      },
    },
    {
      id: 4,
      name: "David Thompson",
      role: "DevOps Engineer",
      bio: "DevOps specialist with expertise in cloud infrastructure, CI/CD pipelines, and automation. Passionate about improving development workflows.",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Linux"],
      avatar: "DT",
      social: {
        github: "https://github.com/davidthompson",
        linkedin: "https://linkedin.com/in/davidthompson",
        portfolio: "https://davidthompson.cloud",
      },
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Mobile Developer",
      bio: "Mobile app developer creating beautiful iOS and Android applications. Specialized in React Native and Flutter for cross-platform development.",
      skills: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "Redux",
      ],
      avatar: "LW",
      social: {
        github: "https://github.com/lisawang",
        linkedin: "https://linkedin.com/in/lisawang",
        portfolio: "https://lisawang.mobile",
      },
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingDeveloper, setEditingDeveloper] = useState(null);

  const generateId = () => {
    return Math.max(...developers.map((d) => d.id), 0) + 1;
  };

  const generateAvatar = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  const handleAddDeveloper = (developerData) => {
    const newDeveloper = {
      ...developerData,
      id: generateId(),
      avatar: generateAvatar(developerData.name),
    };
    setDevelopers([...developers, newDeveloper]);
    setShowForm(false);
  };

  const handleEditDeveloper = (developerData) => {
    const updatedDeveloper = {
      ...developerData,
      avatar: generateAvatar(developerData.name),
    };
    setDevelopers(
      developers.map((dev) =>
        dev.id === editingDeveloper.id ? updatedDeveloper : dev
      )
    );
    setEditingDeveloper(null);
    setShowForm(false);
  };

  const handleDeleteDeveloper = (developerId) => {
    if (window.confirm("Are you sure you want to delete this developer?")) {
      setDevelopers(developers.filter((dev) => dev.id !== developerId));
    }
  };

  const handleStartEdit = (developer) => {
    setEditingDeveloper(developer);
    setShowForm(true);
  };

  const handleStartAdd = () => {
    setEditingDeveloper(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingDeveloper(null);
  };

  if (showForm) {
    return (
      <DeveloperForm
        developer={editingDeveloper}
        onSave={editingDeveloper ? handleEditDeveloper : handleAddDeveloper}
        onCancel={handleCloseForm}
      />
    );
  }

  return (
    <DeveloperList
      developers={developers}
      onAddDeveloper={handleStartAdd}
      onEditDeveloper={handleStartEdit}
      onDeleteDeveloper={handleDeleteDeveloper}
    />
  );
};

export default DeveloperDashboard;
