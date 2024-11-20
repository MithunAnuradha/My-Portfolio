import React from 'react';
import { 
  Code2, 
  Database, 
  Terminal,
  Globe,
  Layout,
  FileJson,
  Server,
  Box,
  Cpu,
  GitBranch,
  Monitor,
  Gamepad2
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCardProps {
  title: string;
  skills: string[];
}

const getSkillIcon = (skill: string): Skill => {
  const defaultColor = "text-gray-600";
  
  // Map skills to their respective icons and colors
  const skillMap: { [key: string]: Skill } = {
    'React.js': { 
      name: 'React.js', 
      icon: <Code2 className="w-4 h-4" />, 
      color: "text-blue-500" 
    },
    'HTML5': { 
      name: 'HTML5', 
      icon: <Globe className="w-4 h-4" />, 
      color: "text-orange-500" 
    },
    'CSS3': { 
      name: 'CSS3', 
      icon: <Layout className="w-4 h-4" />, 
      color: "text-blue-400" 
    },
    'Bootstrap': { 
      name: 'Bootstrap', 
      icon: <Box className="w-4 h-4" />, 
      color: "text-purple-500" 
    },
    'Node.js': { 
      name: 'Node.js', 
      icon: <Server className="w-4 h-4" />, 
      color: "text-green-600" 
    },
    'Express.js': { 
      name: 'Express.js', 
      icon: <Server className="w-4 h-4" />, 
      color: "text-gray-700" 
    },
    'ASP.NET': { 
      name: 'ASP.NET', 
      icon: <Code2 className="w-4 h-4" />, 
      color: "text-purple-600" 
    },
    'C#': { 
      name: 'C#', 
      icon: <FileJson className="w-4 h-4" />, 
      color: "text-green-500" 
    },
    'SQL': { 
      name: 'SQL', 
      icon: <Database className="w-4 h-4" />, 
      color: "text-blue-600" 
    },
    'MongoDB': { 
      name: 'MongoDB', 
      icon: <Database className="w-4 h-4" />, 
      color: "text-green-500" 
    },
    'Flask': { 
      name: 'Flask', 
      icon: <Code2 className="w-4 h-4" />, 
      color: "text-gray-700" 
    },
    'Python': { 
      name: 'Python', 
      icon: <Code2 className="w-4 h-4" />, 
      color: "text-blue-500" 
    },
    'Git': { 
      name: 'Git', 
      icon: <GitBranch className="w-4 h-4" />, 
      color: "text-orange-600" 
    },
    'GitHub Actions': { 
      name: 'GitHub Actions', 
      icon: <Terminal className="w-4 h-4" />, 
      color: "text-gray-700" 
    },
    'Postman': { 
      name: 'Postman', 
      icon: <Monitor className="w-4 h-4" />, 
      color: "text-orange-500" 
    },
    'Docker': { 
      name: 'Docker', 
      icon: <Box className="w-4 h-4" />, 
      color: "text-blue-500" 
    },
    'Unity Engine': { 
      name: 'Unity Engine', 
      icon: <Gamepad2 className="w-4 h-4" />, 
      color: "text-gray-700" 
    }
  };

  return skillMap[skill] || { 
    name: skill, 
    icon: <Cpu className="w-4 h-4" />, 
    color: defaultColor 
  };
};

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill) => {
          const skillInfo = getSkillIcon(skill);
          return (
            <div
              key={skill}
              className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className={`${skillInfo.color}`}>
                {skillInfo.icon}
              </span>
              <span className="text-sm text-gray-700">{skill}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;