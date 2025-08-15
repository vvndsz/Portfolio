import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Twitter,
  X,
} from "lucide-react";
import { RiXboxLine } from "react-icons/ri";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Got an idea or an exciting project? Let’s connect! I’m always eager to
          explore innovative, collaborative, and impactful opportunities.
        </p>

        <div className="space-y-8">
          {/* <h3 className="text-3xl font-semibold">Contact Information</h3> */}

          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <a
                href="mailto:vivien8534@gmail.com"
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                vivien8534@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <a
                href="tel:+919845443372"
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                +91 9845443372
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg text-muted-foreground hover:text-primary transition-colors">
                Mangalore, Karnataka, India
              </span>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="https://www.linkedin.com/in/vivian-dsouza-viviandsouza/" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
              <a href="https://x.com/vvndsz" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
              <a href="https://www.instagram.com/vvndsz/" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href="https://github.com/vvndsz" target="_blank" rel="noreferrer">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
