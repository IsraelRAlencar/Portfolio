import React from 'react'
import { Code, Database, Server, Globe } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-muted-foreground">
            Passionate fullstack developer with expertise in modern technologies and enterprise solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              I'm a dedicated fullstack developer with over 5 years of experience building robust, 
              scalable applications. My expertise spans across backend technologies like C#, .NET, 
              and Entity Framework, to frontend frameworks like React and Next.js.
            </p>
            <p className="text-foreground leading-relaxed">
              I have a passion for creating efficient solutions that solve real business problems, 
              from complete ERP systems to modern e-commerce platforms using microservices architecture.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <Code className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Frontend</h3>
                <p className="text-muted-foreground text-sm">React, Next.js, JavaScript, TypeScript</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <Server className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Backend</h3>
                <p className="text-muted-foreground text-sm">C#, .NET, Entity Framework</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <Database className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Database</h3>
                <p className="text-muted-foreground text-sm">PostgreSQL, MongoDB, SQL</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <Globe className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Architecture</h3>
                <p className="text-muted-foreground text-sm">Microservices, REST APIs</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Coding workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
