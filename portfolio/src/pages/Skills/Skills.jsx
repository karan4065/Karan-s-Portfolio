import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud, Server } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaGithub,
  FaBug,
  FaJava,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiNetlify,
  SiRender,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiFlask,
  SiMysql,
  SiCplusplus,
  SiPostman,
  SiOpencv,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation, MdOutlineShowChart } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,

        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },

      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-4 h-4 text-gray-300" />,
        },

      ],
    },
{
  icon: Cpu,
  title: "Tools and Technologies",
  color: "text-purple-400",
  skills: [
  {
  name: "GitHub",
  icon: <FaGithub className="w-4 h-4 text-white" />,
},
{
  name: "Netlify",
  icon: <SiNetlify className="w-4 h-4 text-[#00C7B7]" />,
},
{
  name: "Render",
  icon: <SiRender className="w-4 h-4 text-[#46E3B7]" />,
},

    { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
     
    { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
    {
  name: "Postman",
  icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" />,
},
    {
  name: "N8N",
  icon: <FcWorkflow className="w-4 h-4" />,
}
  ],
},

{
  icon: Cpu,
  title: "Machine Learning Tools",
  color: "text-green-400",
  skills: [
   

    {
      name: "NumPy",
      icon: <SiNumpy className="w-4 h-4 text-[#013243]" />,
    },

    {
      name: "Pandas",
      icon: <SiPandas className="w-4 h-4 text-[#150458]" />,
    },
    {
      name: "Matplotlib",
      icon: <MdOutlineShowChart className="w-4 h-4 text-[#F97316]" />,
    },
      {
      name: "OpenCV",
      icon: <SiOpencv className="w-4 h-4 text-[#5C3EE8]" />,
    },
    {
      name: "Scikit-learn",
      icon: <SiScikitlearn className="w-4 h-4 text-[#F7931E]" />,
    },
    {
      name: "Flask",
      icon: <SiFlask className="w-4 h-4 text-white" />,
    },
    {
      name: "PythonAnywhere",
      icon: <FaServer className="w-4 h-4 text-[#1D9FD7]" />,
    },
  ],
},

{
  icon: Database,
  title: "Databases & Data Handling",
  color: "text-cyan-400",
  skills: [
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="w-4 h-4 text-[#4479A1]" />,
    },
    {
      name: "SQL Queries",
      icon: <Database className="w-4 h-4 text-cyan-300" />,
    },
    
  ],
},

{
  icon: Code2,
  title: "Problem Solving & Core CS",
  color: "text-rose-400",
  skills: [
  {
  name: "C++",
  icon: <SiCplusplus className="w-4 h-4 text-[#00599C]" />,
},
    {
      name: "DSA Algorithms",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
    },
    {
      name: "OOP Concepts",
      icon: <Code2 className="w-4 h-4 text-blue-400" />,
    },
     {
      name: "Python",
      icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
    },
    {
  name: "Java",
  icon: <FaJava className="w-4 h-4 text-[#007396]" />,
},
    {
      name: "Logic Building",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
    },
  ],
},

  ];

  return (
    <main data-section="skills" className="pt-15 lg:pt-0 text-white min-h-screen bg-[#020617] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
