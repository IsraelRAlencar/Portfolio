import { Button } from './ui/Button'
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useSiteInfo } from '../context/SiteInfoContext';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const siteInfo = useSiteInfo();
  const t = useTranslations();
  const path = t('hero.role') == "Fullstack Developer" ? "/docs/Curriculum Vitae Israel Alencar EN.pdf" : "/docs/Curriculum Vitae Israel Alencar PT.pdf";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = path;
      const fileName = path.split('/').pop() || 'curriculo.pdf';
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 bg-muted w-fit px-4 py-2 rounded-full border border-border">
            <span className="text-primary text-sm font-medium">{t('hero.role')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
            {t('hero.greeting')}
            <br />
            <span className="text-primary">Israel</span>
            <br />
            Alencar
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            {t('hero.description')}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Button onClick={() => scrollToSection('projects')} className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-lg">
              {t('buttons.viewMyWork')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button onClick={handleDownload} variant="outline" className="border-border text-muted-foreground hover:bg-accent">
              <Download className="mr-2 h-4 w-4" />
              {t('buttons.downloadCV')}
            </Button>
          </div>
          <div className="flex items-center gap-6">
            <a href={siteInfo.github} className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={siteInfo.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${siteInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-30" />
          <Image
            src="/images/israel-alencar.jpeg"
            alt="Israel Alencar"
            width={400}
            height={400}
            className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
          />
          <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-xl shadow-xl border border-border">
            <p className="text-primary text-3xl font-bold">5+</p>
            <p className="text-muted-foreground">{t('hero.yearsExperience')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
