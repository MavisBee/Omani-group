import React from "react";
import { Sparkles, Shield, Truck, CheckCircle, ArrowRight } from "lucide-react";
import Button from "../components/Button";

const IndustrialCleaning: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1920&auto=format&fit=crop")',
          }}
        >
          {/* Increased contrast overlay */}
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto pt-24 md:pt-10">
          <p className="text-accent tracking-[0.3em] uppercase text-xs font-bold mb-6 border border-accent px-4 py-2">
            Omani Group Division
          </p>
          <h1 className="text-4xl md:text-7xl font-serif text-[#fefefe] mb-8 leading-tight drop-shadow-xl">
            Industrial Grade.
            <br />
            Luxury Standards.
          </h1>
          <p className="text-slate-200 text-base md:text-lg font-light max-w-2xl mb-12 leading-relaxed drop-shadow-md">
            Specialized cleaning solutions for commercial facilities, industrial
            complexes, and premium estates in Nigeria. We bring the Omani Group
            standard of excellence to hygiene and maintenance.
          </p>
          <Button
            variant="white"
            onClick={() =>
              document
                .getElementById("cleaning-contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Request Cleaning Service
          </Button>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
              Why Our Cleaning Services Stand Out
            </h2>
            <p className="text-slate-600 font-light text-lg mb-8 leading-relaxed">
              Unlike standard janitorial services, Omani Group Industrial
              Cleaning employs advanced protocols, eco-friendly industrial-grade
              agents, and highly trained specialists to ensure a pristine
              environment.
            </p>
            <ul className="space-y-4">
              {[
                "ISO Certified Cleaning Protocols",
                "Eco-Friendly & Non-Toxic Solutions",
                "Advanced Machinery for Deep Cleaning",
                "24/7 Rapid Response Teams",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-primary font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1663047397245-2ddad26c5dd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5pbmclMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Cleaning Staff"
              className="w-full h-full object-cover translate-y-8 shadow-xl rounded-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1580256081112-e49377338b7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nfGVufDB8fDB8fHww"
              alt="Professional Cleaner"
              className="w-full h-full object-cover shadow-xl rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Our Specialized Capabilities
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Deep Sanitization",
                desc: "Hospital-grade disinfection for high-traffic and sensitive areas.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Post-Construction",
                desc: "Removing debris and dust to prepare new builds for immediate occupancy.",
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Facility Maintenance",
                desc: "Ongoing scheduled cleaning for warehouses, offices, and retail spaces.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-accent rounded-sm"
              >
                <div className="text-slate-400 mb-6 group-hover:text-primary transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-serif text-primary mb-4">
                  {s.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section
        id="cleaning-contact"
        className="py-20 md:py-32 bg-primary text-white relative overflow-hidden"
      >
        {/* Abstract BG */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800 skew-x-12 translate-x-1/4"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">
            Ready for a spotless environment?
          </h2>
          <p className="text-slate-300 mb-12 text-lg font-light max-w-2xl mx-auto">
            Contact our industrial division directly to schedule a site
            assessment and receive a tailored quote.
          </p>

          <div className="bg-white/5 backdrop-blur-md p-6 md:p-10 border border-white/10 rounded-sm max-w-3xl mx-auto">
            <form
              id="cleaningForm"
              action="https://formspree.io/f/mrbnrprz"
              method="POST"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                try {
                  const resp = await fetch(form.action, {
                    method: "POST",
                    body: data,
                    headers: { Accept: "application/json" },
                  });
                  if (resp.ok) {
                    form.reset();
                    const respEl = document.getElementById(
                      "cleaningFormResponse"
                    );
                    if (respEl) respEl.style.display = "block";
                  } else {
                    const errorData = await resp.json().catch(() => null);
                    alert(
                      "There was an error: " +
                        (errorData?.errors
                          ?.map((x: any) => x.message)
                          .join(", ") || resp.statusText)
                    );
                  }
                } catch (err) {
                  alert("Submission failed: " + (err as Error).message);
                }
              }}
            >
              <input type="hidden" name="_to" value="info@omanigroup.com" />
              <input
                name="company"
                type="text"
                placeholder="Company Name"
                className="bg-transparent border-b border-slate-500 py-3 px-2 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-500"
                required
              />
              <input
                name="contactPerson"
                type="text"
                placeholder="Contact Person"
                className="bg-transparent border-b border-slate-500 py-3 px-2 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-500"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-slate-500 py-3 px-2 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-500"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="bg-transparent border-b border-slate-500 py-3 px-2 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-500"
              />
              <div className="md:col-span-2 mt-4">
                <Button
                  variant="white"
                  className="w-full text-black"
                  type="submit"
                >
                  Request Assessment
                </Button>
              </div>
              <div
                id="cleaningFormResponse"
                style={{ display: "none" }}
                className="md:col-span-2 mt-4 text-center text-black"
              >
                Thanks — we received your cleaning assessment request.
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialCleaning;
