import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20 w-full bg-white">
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1920&auto=format&fit=crop" 
            alt="Omani Group Team" 
            className="w-full h-full object-cover"
        />
        {/* Increased contrast overlay */}
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h1 className="text-4xl md:text-7xl font-serif text-white tracking-wide drop-shadow-lg">Our Legacy</h1>
        </div>
      </div>

      {/* Structured Storytelling */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-32 items-center">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block">The Omani Vision</span>
                <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">Refining the Art of<br/>Modern Living</h2>
                <div className="space-y-6 text-slate-600 font-light text-base md:text-lg leading-relaxed">
                    <p>
                        Founded with a singular purpose, Omani Group stands at the intersection of luxury real estate and impeccable service in Nigeria. We do not merely sell properties; we curate lifestyles for the modern African elite.
                    </p>
                    <p>
                        Our mission is to provide an unmatched level of comfort and trust, ensuring that every interaction reflects the premium standards our clients expect. From the first consultation in Lagos to the final handover in Abuja, we are your partners in excellence.
                    </p>
                </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1200&auto=format&fit=crop" alt="Company Vision" className="w-full h-auto shadow-2xl z-10 relative rounded-sm" />
                <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-full h-full border-2 border-slate-100 -z-0"></div>
            </div>
        </div>

        {/* Staggered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className="order-2 lg:order-1 relative p-4 md:p-8">
                 <div className="grid grid-cols-2 gap-4">
                     <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800&auto=format&fit=crop" alt="Detail 1" className="translate-y-8 md:translate-y-12 shadow-lg rounded-sm" />
                     <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="Detail 2" className="shadow-lg rounded-sm" />
                 </div>
             </div>
             <div className="order-1 lg:order-2">
                <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Values</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">Integrity, Precision, & Passion</h2>
                <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed mb-8">
                    We believe that true luxury lies in the details. Our team is driven by a passion for architectural beauty and a commitment to precision in every transaction.
                </p>
                <ul className="space-y-4">
                    {["Client-Centric Approach", "Local Market Insight", "Uncompromising Quality"].map((val, i) => (
                        <li key={i} className="flex items-center gap-4 text-primary font-serif text-lg md:text-xl">
                            <span className="w-6 md:w-8 h-[1px] bg-accent"></span>
                            {val}
                        </li>
                    ))}
                </ul>
             </div>
        </div>
      </div>
      
      {/* Team Note */}
      <div className="bg-slate-50 py-20 md:py-24 text-center px-6">
          <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6">"We build relationships that last generations."</h3>
              <p className="text-slate-500 italic">— The Omani Group Leadership</p>
          </div>
      </div>
    </div>
  );
};

export default About;