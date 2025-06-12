import React, { useState, useTransition } from 'react'
import { Button } from './ui/Button'
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github } from "lucide-react";
import { useSiteInfo } from '../context/SiteInfoContext';
import { useTranslations } from 'next-intl';
import { sendContactEmail } from './actions';
import { useToast } from './hooks/use-toast';

export default function Contact() {
  const t = useTranslations('sections.contact');
  const siteInfo = useSiteInfo();
  const { toast } = useToast();
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      startTransition(async () => {
          const result = await sendContactEmail(formData);

          if (result.success) {
              toast({
                  title: t('messageSuccessTitle'),
                  description: t('messageSent'),
              });
              setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
          } else {
              toast({
                  title: t('messageErrorTitle'),
                  description: t('messageError'),
                  variant: "destructive",
              });
          }
      });
    };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">{t('title')}</h2>
          <p className="text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">{t('letsConnect')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('description')}
              </p>
            </div>

            <div onClick={() => window.open(`mailto:${siteInfo.email}`, '_blank')} className="space-y-4">
              <div className="hover:cursor-pointer flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t('email')}</p>
                  <p className="text-muted-foreground">{siteInfo.email}</p>
                </div>
              </div>

              <div onClick={() => window.open(`tel:${siteInfo.phone}`, '_blank')} className="hover:cursor-pointer flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t('phone')}</p>
                  <p className="text-muted-foreground">{siteInfo.phone}</p>
                </div>
              </div>

              <div onClick={() => window.open(`https://www.linkedin.com/in/${siteInfo.linkedin}`, '_blank')} className="hover:cursor-pointer flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-muted-foreground">{siteInfo.linkedin}</p>
                </div>
              </div>

              <div onClick={() => window.open(`https://github.com/${siteInfo.github}`, '_blank')} className="hover:cursor-pointer flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p className="text-muted-foreground">{siteInfo.github}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t('location')}</p>
                  <p className="text-muted-foreground">{siteInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">{t('FirstName')}</label>
                  <input
                    onChange={handleInputChange}
                    name="firstName" 
                    type="text" 
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">{t('LastName')}</label>
                  <input
                    onChange={handleInputChange}
                    name="lastName"
                    type="text"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">{t('email')}</label>
                <input
                  onChange={handleInputChange}
                  name="email"
                  type="email" 
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">{t('phone')}</label>
                <input
                  onChange={handleInputChange}
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  placeholder={t('phonePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">{t('Subject')}</label>
                <input
                  onChange={handleInputChange}
                  name="subject"
                  type="text"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  placeholder={t('projectInquiry')}
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">{t('Message')}</label>
                <textarea 
                  onChange={handleInputChange}
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                  placeholder={t('tellMeAboutYourProject')}
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3" type="submit">
                {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Send className="mr-2 h-4 w-4" />
                )}
                {isPending ? t('sendingMessage') : t('sendMessage')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
