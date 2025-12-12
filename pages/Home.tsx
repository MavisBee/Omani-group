import React, { useRef, useState, useEffect } from "react";
import {
  ShieldCheck,
  Star,
  Users,
  Zap,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Button from "../components/Button";
import { Property } from "../types";
import { Link } from "react-router-dom";

const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Banana Island Waterfront Villa",
    location: "Ikoyi, Lagos",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
    beds: 6,
    baths: 7,
    sqft: 8500,
  },
  {
    id: 2,
    title: "Maitama Heights Penthouse",
    location: "Maitama, Abuja",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    beds: 4,
    baths: 5,
    sqft: 5200,
  },
  {
    id: 3,
    title: "Lekki Phase 1 Contemporary",
    location: "Lekki, Lagos",
    image:
      "https://images.unsplash.com/photo-1621511075938-f03482369feb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    beds: 5,
    baths: 6,
    sqft: 4800,
  },
  {
    id: 4,
    title: "Victoria Island Terrace",
    location: "Victoria Island, Lagos",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    beds: 4,
    baths: 4,
    sqft: 3500,
  },
  {
    id: 5,
    title: "Asokoro Hilltop Estate",
    location: "Asokoro, Abuja",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    beds: 7,
    baths: 8,
    sqft: 9000,
  },
  {
    id: 6,
    title: "Eko Atlantic Smart Home",
    location: "Eko Atlantic, Lagos",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    beds: 3,
    baths: 3,
    sqft: 2800,
  },
];

const projects = [
  {
    id: 1,
    title: "The Royal Alalubosa Complex",
    category: "Commercial Development",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Azure Height Residences",
    category: "Luxury Residential",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Innovation Hub HQ",
    category: "Corporate Architecture",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
];

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0 as number | undefined;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(el.children).filter(
          (c) => c instanceof HTMLElement
        ) as HTMLElement[];
        if (children.length === 0) return;
        const center = el.scrollLeft + el.clientWidth / 2;
        let best = 0;
        let bestDiff = Infinity;
        children.forEach((child, idx) => {
          const rectCenter = child.offsetLeft + child.clientWidth / 2;
          const diff = Math.abs(rectCenter - center);
          if (diff < bestDiff) {
            best = idx;
            bestDiff = diff;
          }
        });
        setActiveIndex(best);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1920&auto=format&fit=crop")',
          }}
        >
          {/* Darker Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6 max-w-6xl mx-auto pt-20">
          <p className="text-[#fefefe]/90 tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold mb-6 animate-fade-in-up border-b border-accent/60 pb-2">
            Premium Nigerian Real Estate
          </p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-[#fefefe] mb-8 leading-tight animate-fade-in-up delay-100 drop-shadow-lg">
            Discover Modern Homes
            <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fefefe] to-slate-200">
              with Omani Group
            </span>
          </h1>
          <p className="text-slate-100 text-base md:text-2xl font-light max-w-3xl mb-12 animate-fade-in-up delay-200 leading-relaxed px-4 drop-shadow-md">
            Experience the pinnacle of comfort and trust in Lagos, Abuja, and
            <br className="hidden md:block" />
            beyond. Where luxury meets lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-300 w-full sm:w-auto px-6">
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="white" className="w-full sm:min-w-[200px]">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline white"
                className="w-full sm:min-w-[200px] border-[#fefefe] text-[#fefefe] hover:bg-white hover:text-black hover:border-white transition-colors duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 z-0"></div>

        <div className="max-w-7xl ml-0 px-6 md:mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 border-b border-slate-100 pb-8">
            <div className="max-w-xl">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary">
                Why Choose Omani Group
              </h2>
            </div>
            <p className="text-slate-500 max-w-md mt-6 md:mt-0 text-sm leading-relaxed">
              We define excellence through our unwavering commitment to quality
              and client satisfaction across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck strokeWidth={1.5} className="w-10 h-10" />,
                title: "Trusted Experts",
                desc: "Industry leaders with verified track records in the Nigerian market.",
              },
              {
                icon: <Star strokeWidth={1.5} className="w-10 h-10" />,
                title: "Premium Properties",
                desc: "An exclusive portfolio of high-end listings in prime locations.",
              },
              {
                icon: <Users strokeWidth={1.5} className="w-10 h-10" />,
                title: "Client-Focused",
                desc: "Tailored strategies centered around your specific needs.",
              },
              {
                icon: <Zap strokeWidth={1.5} className="w-10 h-10" />,
                title: "Fast Support",
                desc: "Responsive communication and swift transaction handling.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 border-l-2 border-transparent hover:border-accent"
              >
                <div className="text-slate-400 group-hover:text-accent transition-colors duration-300 mb-8">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Next Home - Scrollable Property List */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl ml-0 px-6 md:mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                Exclusive Listings
              </span>
              <h2 className="text-3xl md:text-5xl font-serif mb-2">
                Discover Your Next Home
              </h2>
              <div className="w-20 h-0.5 bg-accent"></div>
            </div>
            <div className="hidden md:flex gap-2 text-slate-400 text-sm items-center">
              <span>Scroll to explore</span>{" "}
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="property-scroll flex overflow-x-auto pb-12 gap-4 sm:gap-6 md:gap-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
          >
            {featuredProperties.map((prop) => (
              <div
                key={prop.id}
                className="min-w-full sm:min-w-[320px] md:min-w-[350px] lg:min-w-[380px] snap-center group relative overflow-hidden cursor-pointer rounded-sm bg-slate-800 shrink-0"
              >
                {/* Image */}
                <div className="h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden relative">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                </div>

                {/* Overlay on Hover (Desktop) */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center z-10">
                  <h3 className="text-2xl font-serif mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {prop.title}
                  </h3>
                  <Link to="/contact">
                    <Button
                      variant="white"
                      className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 mt-4"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>

                {/* Always visible minimal info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-0 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-serif text-white mb-1 leading-snug">
                    {prop.title}
                  </h3>
                  <p className="text-slate-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {prop.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll dots (mobile hint) */}
          <div className="flex justify-center items-center gap-2 mt-4 md:mt-6">
            {featuredProperties.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const child = el.children[i] as HTMLElement | undefined;
                  if (!child) return;
                  const left =
                    child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
                  el.scrollTo({ left, behavior: "smooth" });
                }}
                aria-label={`Go to property ${i + 1}`}
                className={
                  "rounded-full transition-all " +
                  (i === activeIndex
                    ? "w-3 h-3 bg-accent"
                    : "w-2 h-2 bg-white/40")
                }
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl ml-0 px-6 md:mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="mb-6 md:mb-0">
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-3">
                Portfolio
              </p>
              <h2 className="text-3xl md:text-5xl font-serif text-primary">
                Our Projects
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((item) => (
              <div
                key={item.id}
                className="group bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden mb-6 rounded-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white border border-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                      Contact Us
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-accent uppercase tracking-widest font-bold mb-3">
                  <span>{item.category}</span>
                </div>
                <h3 className="text-xl font-serif text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
