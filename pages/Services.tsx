import React from "react";
import { Briefcase, Search, Eye, Key } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Real Estate Consulting",
    description:
      "Expert market analysis and strategic advice tailored to your investment goals and lifestyle requirements.",
    icon: <Briefcase className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Property Sourcing",
    description:
      "Access to off-market listings and exclusive properties in Lagos and Abuja that match your specific criteria perfectly.",
    icon: <Search className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Viewing Coordination",
    description:
      "Seamless organization of private property tours, managed with discretion and attention to your schedule.",
    icon: <Eye className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Rental & Purchase Guidance",
    description:
      "Comprehensive support through negotiations, legalities, and final acquisition for both rentals and purchases.",
    icon: <Key className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=800&auto=format&fit=crop",
  },
];

const Services: React.FC = () => {
  return (
    <div className="pt-20 pb-12 w-full bg-white">
      <div className="bg-primary text-white py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center"></div>
        {/* Increased contrast overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-serif mb-8">
            Exceptional Services
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
            We provide a holistic suite of real estate services designed to make
            your journey effortless and rewarding.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.id} className="relative group overflow-hidden">
              {/* Image Banner for each section */}
              <div className="h-56 md:h-64 overflow-hidden mb-8 rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="flex gap-6 items-start">
                <div className="mt-1 p-3 bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-sm shrink-0 shadow-sm border border-slate-100">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 group-hover:border-accent group-hover:text-accent transition-all inline-block"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industrial Cleaning Teaser */}
      <div className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Industrial Cleaning"
              className="w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 rounded-sm"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Beyond Real Estate
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
              Industrial Cleaning Division
            </h2>
            <p className="text-slate-600 mb-8 font-light leading-relaxed">
              Maintaining the value of your property is just as important as
              acquiring it. Discover our specialized industrial cleaning
              services for commercial and luxury residential spaces in Nigeria.
            </p>
            <Link to="/cleaning">
              <button className="px-8 py-4 bg-primary text-white text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg w-full md:w-auto">
                Explore Cleaning Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
