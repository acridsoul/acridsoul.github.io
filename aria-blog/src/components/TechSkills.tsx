import React from 'react';
import { 
  SiPython,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript
} from '@icons-pack/react-simple-icons';

const TechSkills = () => {
  const skills = [
    { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
    { name: 'React.js', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  ];

  return (
    <div>
      <p className="mb-1 mt-4 font-semibold text-neutral-800 dark:text-neutral-200">
        Technologies I Use:
      </p>
      <ul className="py-2 space-y-2">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <li 
              key={index}
              className="flex items-center gap-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors duration-200"
            >
              <Icon 
                className={`w-5 h-5 ${skill.color} transition-transform duration-200 hover:scale-110`} 
                title={skill.name}
              />
              <span className="text-sm">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechSkills;