import React from 'react'
import { Button } from './ui/Button';
import { ExternalLink, Github, Database, Server, Globe } from "lucide-react";

export default function Projects() {
    const projects = [
        {
        title: "Enterprise ERP System",
        description: "Complete business management system integrating all company departments with .NET Framework, Windows Forms, and PostgreSQL.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        technologies: ["C#", ".NET Framework", "Windows Forms", "PostgreSQL", "Entity Framework"],
        features: [
            "Complete business integration",
            "Financial management",
            "Inventory control",
            "HR management",
            "Reporting system"
        ],
        githubUrl: "#",
        liveUrl: "#"
        },
        {
        title: "E-commerce Microservices Platform",
        description: "Modern e-commerce solution built with microservices architecture using C#, Next.js, and multiple databases.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        technologies: ["C#", "Entity Framework", "Next.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Typesense"],
        features: [
            "Microservices architecture",
            "Real-time search with Typesense",
            "Payment integration",
            "Inventory management",
            "Admin dashboard"
        ],
        githubUrl: "#",
        liveUrl: "#"
        },
        {
        title: "Single Sign On Solution",
        description: "Centralized authentication system enabling secure access across multiple applications with unified user management.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        technologies: ["C#", "Entity Framework", "Razor Pages", "SQL Server", "OAuth 2.0"],
        features: [
            "Centralized authentication",
            "Multi-application support",
            "User role management",
            "Session management",
            "Security protocols"
        ],
        githubUrl: "#",
        liveUrl: "#"
        },
        {
        title: "Automatic Payroll System",
        description: "Comprehensive payroll management system with variable events handling for complex salary calculations and reporting.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        technologies: ["C#", ".NET Framework", "Windows Forms", "PostgreSQL", "Crystal Reports"],
        features: [
            "Variable events processing",
            "Automated calculations",
            "Tax compliance",
            "Report generation",
            "Employee management"
        ],
        githubUrl: "#",
        liveUrl: "#"
        }
    ];

  return (
        <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground">
            Showcasing my expertise in building scalable enterprise applications
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary">Key Features:</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-primary rounded-full text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button variant="outline" className="border-border text-muted-foreground hover:bg-accent">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-30" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
