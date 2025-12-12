import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Button from "../components/Button";

const Contact: React.FC = () => {
  return (
    <div className="pt-20 w-full min-h-screen bg-white">
      <div className="bg-primary text-white py-16 md:py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Get in Touch</h1>
        <p className="text-slate-300 font-light max-w-xl mx-auto">
          Start your journey with Omani Group today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Contact Info & Side Photo */}
          <div className="space-y-12">
            <div className="relative h-[300px] md:h-[400px] w-full mb-12 overflow-hidden shadow-2xl rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                alt="Contact Support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-primary mb-8">
                Direct Contact
              </h2>
              <div className="flex flex-col gap-6">
                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.link/k3bhce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full bg-green-600 text-white py-4 px-6 flex items-center justify-center gap-3 hover:bg-green-700 transition-all shadow-lg rounded-sm">
                      <MessageCircle className="w-5 h-5" />
                      <span className="uppercase tracking-widest text-xs font-bold">
                        WhatsApp Us
                      </span>
                    </button>
                  </a>
                  <a href="tel:09030952295" className="flex-1">
                    <button className="w-full bg-primary text-white py-4 px-6 flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-lg rounded-sm">
                      <Phone className="w-5 h-5" />
                      <span className="uppercase tracking-widest text-xs font-bold">
                        Call Now
                      </span>
                    </button>
                  </a>
                </div>

                <div className="space-y-6 mt-8 pt-8 border-t border-slate-100">
                  <div className="flex items-start gap-6">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-serif text-lg text-primary">
                        Headquarters
                      </h4>
                      <p className="text-slate-500 font-light">
                        100 Omani Plaza, Victoria Island
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-serif text-lg text-primary">Email</h4>
                      <a
                        href="mailto:info@omanigroup.com"
                        className="text-slate-500 font-light hover:text-accent transition-colors"
                      >
                        info@omanigroup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 md:p-14 rounded-sm shadow-sm border border-slate-100 h-fit">
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-2">
              Send a Message
            </h2>
            <p className="text-slate-500 mb-10 font-light text-sm">
              We typically reply within 2 hours during business days.
            </p>

            <form
              id="contactForm"
              action="https://formspree.io/f/mrbnrprz"
              method="POST"
              className="space-y-8"
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
                    const respEl = document.getElementById("formResponse");
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
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs uppercase tracking-wider text-primary font-bold mb-3"
                >
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  id="fullName"
                  className="w-full bg-white border-b border-slate-300 px-4 py-3 focus:outline-none focus:border-accent transition-all placeholder:text-slate-300 font-light"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-primary font-bold mb-3"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="w-full bg-white border-b border-slate-300 px-4 py-3 focus:outline-none focus:border-accent transition-all placeholder:text-slate-300 font-light"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider text-primary font-bold mb-3"
                  >
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    id="phone"
                    className="w-full bg-white border-b border-slate-300 px-4 py-3 focus:outline-none focus:border-accent transition-all placeholder:text-slate-300 font-light"
                    placeholder="09030952295"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-primary font-bold mb-3"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full bg-white border-b border-slate-300 px-4 py-3 focus:outline-none focus:border-accent transition-all placeholder:text-slate-300 font-light"
                  placeholder="Tell us about your requirements..."
                  required
                ></textarea>
              </div>

              <Button variant="primary" className="w-full mt-4" type="submit">
                Send Message
              </Button>
              <div
                id="formResponse"
                style={{ display: "none" }}
                className="mt-4 text-center text-green-600"
              >
                Thanks — we received your message.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
