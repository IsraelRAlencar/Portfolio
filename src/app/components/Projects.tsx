import React from 'react'
import { Button } from './ui/Button';
import { ExternalLink, Github, Database, Server, Globe } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Projects() {
    const t = useTranslations('sections.projects');
    const projects = [
        {
        title: t('details.0.title'),
        description: t('details.0.description'),
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        technologies: ["C#", ".NET Framework", "Windows Forms", "PostgreSQL", "Entity Framework"],
        features: [
            t('details.0.features.0'),
            t('details.0.features.1'),
            t('details.0.features.2'),
            t('details.0.features.3'),
            t('details.0.features.4')
        ],
        githubUrl: "",
        liveUrl: ""
        },
        {
        title: t('details.1.title'),
        description: t('details.1.description'),
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        technologies: ["C#", "Entity Framework", "Next.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Typesense"],
        features: [
          t('details.1.features.0'),
          t('details.1.features.1'),
          t('details.1.features.2'),
          t('details.1.features.3'),
          t('details.1.features.4')
        ],
        githubUrl: "",
        liveUrl: ""
        },
        {
        title: t('details.2.title'),
        description: t('details.2.description'),
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        technologies: ["C#", ".NET Framework", "Windows Forms", "PostgreSQL", "Crystal Reports"],
        features: [
            t('details.2.features.0'),
            t('details.2.features.1'),
            t('details.2.features.2'),
            t('details.2.features.3'),
            t('details.2.features.4')
        ],
        githubUrl: "",
        liveUrl: ""
        },
        {
        title: t('details.3.title'),
        description: t('details.3.description'),
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        technologies: ["C#", "Entity Framework", "Razor Pages", "SQL Server", "OAuth 2.0"],
        features: [
            t('details.3.features.0'),
            t('details.3.features.1'),
            t('details.3.features.2'),
            t('details.3.features.3'),
            t('details.3.features.4')
        ],
        githubUrl: "",
        liveUrl: ""
        },
    ];

  return (
        <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">{t('title')}</h2>
          <p className="text-muted-foreground">
            {t('subtitle')}
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
                  <h4 className="text-lg font-semibold text-primary">{t('technologiesUsed')}</h4>
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
                  {project.githubUrl !== "" && (
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  )}
                  {project.liveUrl !== "" && (
                    <Button variant="outline" className="border-border text-muted-foreground hover:bg-accent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
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
