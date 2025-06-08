import { useTranslations } from 'next-intl';
import React from 'react'



export default function Skills() {
  

  const t = useTranslations('sections.skills');
    const skillCategories = [
        {
        title: t('backend'),
        skills: [
            { name: "C#", level: 95 },
            { name: ".NET Framework", level: 90 },
            { name: "Entity Framework", level: 85 },
            { name: "ASP.NET Core", level: 88 },
        ]
        },
        {
        title: t('frontend'),
        skills: [
            { name: "React", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "JavaScript", level: 92 },
            { name: "TypeScript", level: 80 },
        ]
        },
        {
        title: t('databases'),
        skills: [
            { name: "PostgreSQL", level: 88 },
            { name: "MongoDB", level: 82 },
            { name: "Typesense", level: 90 },
            { name: "Microservices", level: 85 },
        ]
        }
    ];

  return (
     <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">{t('title')}</h2>
          <p className="text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
