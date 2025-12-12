import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  X,
  TrendingUp,
  Building,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-widest font-bold mb-8 flex items-center gap-2">
              <Building className="w-5 h-5 text-accent" />
              OMANI GROUP
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
              Your partner in premium property solutions. From acquiring your
              dream home to maintaining it with industrial-grade precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-accent">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-light">
              <li>
                <Link
                  to="/"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Real Estate Services
                </Link>
              </li>
              <li>
                <Link
                  to="/cleaning"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Industrial Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-accent">
              Get in Touch
            </h4>
            <ul className="space-y-6 text-sm text-slate-400 font-light">
              <li>
                <a
                  href="tel:+2348000000000"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-2 border border-slate-700 rounded-full group-hover:border-accent transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="group-hover:text-white transition-colors">
                    +234 (800) 000-0000
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:nwaokorieamuchenna@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-2 border border-slate-700 rounded-full group-hover:border-accent transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span className="group-hover:text-white transition-colors break-all">
                    nwaokorieamuchenna@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348000000000"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-2 border border-slate-700 rounded-full group-hover:border-accent transition-colors">
                    <MessageCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="group-hover:text-white transition-colors">
                    WhatsApp Support
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-accent">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/omani_group/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/omani_group"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </a>
              <a
                href="http://www.tiktok.com/@omani_group"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <TrendingUp className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800">
              <Link
                to="/cleaning"
                className="block text-xs uppercase tracking-widest text-slate-500 hover:text-accent transition-colors"
              >
                Looking for Cleaning Services? →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 tracking-wide font-light">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>
              &copy; {new Date().getFullYear()} Omani Group. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 md:ml-6">
              <a
                href="mailto:info@omanigroup.com"
                className="text-slate-500 hover:text-white"
              >
                info@omanigroup.com
              </a>
              <a
                href="tel:09030952295"
                className="text-slate-500 hover:text-white"
              >
                09030952295
              </a>
              <a
                href="https://wa.link/k3bhce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
