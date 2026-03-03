import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // track submission status so we can show a thank-you or error message
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const translations = {
    en: {
      title: "Get In Touch",
      subtitle: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
      contactInfo: "Contact Information",
      sendMessage: "Send a Message",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      message: "Message",
      messagePlaceholder: "Your message...",
      submit: "Send Message",
      successMessage: "Thank you for your message! I'll get back to you soon.",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
    },
    no: {
      title: "Ta Kontakt",
      subtitle: "Jeg ser for tiden etter nye muligheter. Enten du har et spørsmål eller bare vil si hei, ta gjerne kontakt!",
      contactInfo: "Kontaktinformasjon",
      sendMessage: "Send en Melding",
      name: "Navn",
      namePlaceholder: "Ditt navn",
      email: "E-post",
      emailPlaceholder: "din.epost@eksempel.no",
      message: "Melding",
      messagePlaceholder: "Din melding...",
      submit: "Send Melding",
      successMessage: "Takk for meldingen! Jeg kommer tilbake til deg snart.",
      labels: {
        email: "E-post",
        phone: "Telefon",
        location: "Lokasjon",
      },
    },
  };

  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("network");
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.labels.email,
      value: "viktorbl@stud.ntnu.no",
      href: "mailto:viktorbl@stud.ntnu.no",
    },
    {
      icon: Phone,
      label: t.labels.phone,
      value: "+47 95015966",
      href: "tel:+4795015966",
    },
    {
      icon: MapPin,
      label: t.labels.location,
      value: "Gjøvik, Norway",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900 dark:text-white">
          {t.title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">{t.contactInfo}</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <Card key={item.label} className="dark:bg-gray-900 dark:border-gray-800 cursor-default">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <item.icon className="size-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-gray-100">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-gray-700 text-white p-3 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <Github className="size-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <Linkedin className="size-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">{t.sendMessage}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t.name}
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder={t.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder={t.emailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t.message}
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder={t.messagePlaceholder}
                  rows={6}
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                {t.submit}
              </Button>
            </form>

            {/* feedback message */}
            {status === "sent" && (
              <p className="mt-4 text-green-600 dark:text-green-400">
                {t.successMessage}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 dark:text-red-400">
                Something went wrong. Please try again later.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}