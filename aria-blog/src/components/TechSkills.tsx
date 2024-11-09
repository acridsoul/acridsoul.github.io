import React from 'react';
import { 
  SiPython,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiAstro
} from '@icons-pack/react-simple-icons';

const TechSkills = () => {
  const skills = [
    { name: 'Python', icon: SiPython, color: 'text-[#3776AB]', category: 'backend' },
    { name: 'React.js', icon: SiReact, color: 'text-[#61DAFB]', category: 'frontend' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]', category: 'backend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]', category: 'frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]', category: 'language' },
    { name: 'Astro', icon: SiAstro, color: 'text-[#3178C6]', category: 'frontend' },
  ];

  return (
    <div>
      <p className="text-3xl font-custom mb-3 mt-4 font-semibold text-neutral-800 dark:text-neutral-200">
        Technologies I Use:
      </p>
      <ul className="py-2 grid grid-cols-2 gap-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <li 
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all duration-300 group"
            >
              <div className="relative">
                <Icon 
                  className={`w-8 h-8 ${skill.color} transition-all duration-300 group-hover:scale-110`} 
                  title={skill.name}
                />
                <div className={`absolute -bottom-1 -right-1 w-2 h-2 rounded-full 
                  ${skill.category === 'frontend' ? 'bg-blue-400' : 
                    skill.category === 'backend' ? 'bg-green-400' : 
                    'bg-purple-400'}`}
                />
              </div>
              <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                {skill.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechSkills;