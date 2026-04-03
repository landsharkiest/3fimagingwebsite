import { ChevronRight, MapPin, Zap, Users, Award, Eye, Target, Menu, X } from "lucide-react";
import { useState } from "react";
import { publicVideoUrl } from "@/lib/videoAssets";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroVideoFiles = [
    "hero-video.mp4",
    "421 Lake Plavid 1 (1).mp4",
    "Bridgeport Parade Home (1).mp4",
  ];

  const services = [
    {
      number: "01",
      title: "Photography & Drone",
      shortTitle: "Photography & Drone",
      description: "Clean, bright, MLS-ready images. Professional real estate photography and drone shots that help listings stand out. Consistent results every time.",
      image: "/dronephoto.jpg"
    },
    {
      number: "02",
      title: "Real Estate Video",
      shortTitle: "Video",
      description: "Professional real estate video for listings and marketing. Clear deliverables, reliable turnaround. Built for busy agents.",
      image: "/dronephoto.jpg",
      video: "videoShowcase (1).mp4"
    },
    {
      number: "03",
      title: "Floor Plans",
      shortTitle: "Floor Plans",
      description: "Accurate floor plans delivered with your package. Standardized format, clear expectations. Part of our streamlined process.",
      image: "/floorplan.JPG"
    },
    {
      number: "04",
      title: "3D Tours",
      shortTitle: "3D Tours",
      description: "3D virtual tours for listings. Buyers explore online. Clean presentation across MLS and marketing platforms.",
      image: "/3dtour.jpg"
    },
    {
      number: "05",
      title: "Virtual Tours",
      shortTitle: "Virtual Tours",
      description: "360-degree virtual tours. Media that helps listings stand out. Delivered next business day.",
      image: "/virtualTour.jpg"
    },
    {
      number: "06",
      title: "Add-Ons",
      shortTitle: "Add-Ons",
      description: "Additional services to match your needs. Clear package options. No surprises.",
      image: "/addOn.jpg"
    }
  ];

  const currentService = services[activeServiceIdx];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Next-Business-Day Delivery",
      description: "Reliable turnaround. Most projects delivered within 24 hours of the shoot. No surprises."
    },
    {
      icon: MapPin,
      title: "Clear Pricing and Packages",
      description: "Clear package options. Clear deliverables. Clear expectations. Done right the first time."
    },
    {
      icon: Eye,
      title: "Clean, Consistent Editing",
      description: "Clean, bright, MLS-ready images. Repeatable quality. Efficient workflow every time."
    },
    {
      icon: Target,
      title: "Drone, Floor Plans, Video & More",
      description: "Professional real estate media in one place. Built for busy agents. Scalable media partner."
    },
    {
      icon: Users,
      title: "Easy Scheduling and Communication",
      description: "Fast scheduling. Streamlined process. We show up. You get it back fast."
    },
    {
      icon: Award,
      title: "Certified & Insured",
      description: "FAA Part 107 certified. Comprehensive insurance. Trusted by agents across Northern Indiana."
    }
  ];

  const processSteps = [
    { step: "1", title: "Schedule Online", description: "Book a shoot. We confirm quickly." },
    { step: "2", title: "We Shoot", description: "We show up. Professional capture." },
    { step: "3", title: "Delivered Next Business Day", description: "Reliable turnaround. Clear deliverables." },
    { step: "4", title: "You List with Confidence", description: "Media that helps listings stand out." }
  ];

  const faqs = [
    {
      question: "How do I schedule a shoot?",
      answer: "Click Schedule a Shoot or contact us. We confirm availability quickly and match you with a clear package option."
    },
    {
      question: "How quickly do I get my photos and video?",
      answer: "Next-business-day delivery as standard. Most projects delivered within 24 hours of the shoot date."
    },
    {
      question: "What areas do you serve?",
      answer: "60-mile radius across Northern Indiana: Fort Wayne, Warsaw, Columbia City, and surrounding communities."
    },
    {
      question: "Are you certified and insured?",
      answer: "Yes. FAA Part 107 certified. Comprehensive liability insurance. All pilots current on certifications."
    },
    {
      question: "What if the weather is bad?",
      answer: "We don't fly in conditions that compromise safety or quality. We reschedule. No surprises."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-16 sm:h-20 gap-4">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img src="/logo.png" alt="3F Imaging" className="h-10 sm:h-12 mix-blend-darken" />
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-semibold transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-semibold transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-semibold transition">About</a>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900 font-semibold transition">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-semibold transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden md:inline-block px-4 lg:px-6 py-2.5 rounded-full font-bold text-white text-sm lg:text-base transition-all hover:shadow-lg min-h-[44px] flex items-center justify-center" style={{ backgroundColor: "#FF9966" }}>
              Schedule a Shoot
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="md:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <nav className="container py-4 flex flex-col gap-1">
              <a href="#home" className="py-3 px-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="py-3 px-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="py-3 px-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#portfolio" className="py-3 px-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
              <a href="#contact" className="py-3 px-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href="#contact" className="mt-2 py-3 px-4 rounded-full font-bold text-white text-center min-h-[44px] flex items-center justify-center" style={{ backgroundColor: "#FF9966" }} onClick={() => setMobileMenuOpen(false)}>Schedule a Shoot</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with 3 Video Backgrounds */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-800 py-16 sm:py-20"
      >
        {/* Three-column video wall */}
        <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-3">
          {heroVideoFiles.map((file) => (
            <div key={file} className="relative w-full h-full overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                src={publicVideoUrl(file)}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            Professional Listing Media
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 px-0 sm:px-2">
            Next-business-day delivery. Clear packages. Reliable results across Northern Indiana.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-white text-sm sm:text-base transition-all hover:shadow-lg flex items-center justify-center gap-2 min-h-[48px]"
              style={{ backgroundColor: "#FF9966" }}
            >
              Schedule a Shoot <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section with Paper Tabs */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block text-white px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ backgroundColor: "#FF9966" }}>
              WHAT WE OFFER
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Clear Packages. Reliable Results.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Drone, floor plans, video, 3D tours. Professional real estate media with next-business-day delivery across Northern Indiana.
            </p>
          </div>

          {/* Mobile/tablet: horizontal service selector + full-width content. Desktop: left tabs + right content */}
          <div className="relative lg:grid lg:grid-cols-[minmax(260px,280px)_1fr] lg:gap-8 lg:items-start">
            {/* Service selector - horizontal scroll on mobile/tablet, stacked left on lg+ */}
            <div className="mb-6 lg:mb-0 lg:sticky lg:top-24">
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 lg:overflow-visible lg:flex-col lg:gap-3 lg:-mx-0 lg:px-0 [scrollbar-width:thin]">
                {services.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveServiceIdx(idx)}
                    className={`shrink-0 lg:shrink-[unset] px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 rounded-xl lg:rounded-r-2xl font-bold transition-all duration-300 whitespace-nowrap min-h-[48px] ${
                      idx === activeServiceIdx
                        ? "bg-gray-900 text-white shadow-xl"
                        : "bg-white text-gray-700 border-2 border-gray-200 lg:hover:bg-gray-50"
                    }`}
                    style={{
                      minWidth: "min(180px, 45vw)"
                    }}
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <span className="text-base lg:text-lg font-black" style={idx === activeServiceIdx ? { color: "#FF9966" } : {}}>
                        {service.number}
                      </span>
                      <span className="text-sm lg:text-base">{service.shortTitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Image + Description */}
            <div className="w-full min-w-0">
              <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-200 ${"video" in currentService && currentService.video ? "h-[260px] sm:h-[360px] md:h-[420px] lg:h-[550px] aspect-[9/16] w-auto mx-auto" : "h-[260px] sm:h-[360px] md:h-[420px] lg:h-[550px]"}`}>
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                  {"video" in currentService && currentService.video ? (
                    <video
                      key={activeServiceIdx}
                      src={publicVideoUrl(currentService.video)}
                      poster={currentService.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain transition-all duration-700 ease-out"
                      style={{
                        animation: `slideInImage 0.7s ease-out`
                      }}
                    />
                  ) : (
                    <img
                      key={activeServiceIdx}
                      src={currentService.image}
                      alt={currentService.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out"
                      style={{
                        animation: `slideInImage 0.7s ease-out`
                      }}
                    />
                  )}
                </div>
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white rounded-full px-4 py-3 sm:px-6 sm:py-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-black text-gray-900">{currentService.number}</div>
                    <div className="text-xs font-bold text-gray-700">{currentService.shortTitle}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 sm:mb-4 transition-all duration-500">{currentService.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed transition-all duration-500">{currentService.description}</p>
                <a href="#contact" className="font-bold text-base flex items-center gap-2 hover:gap-3 transition w-fit min-h-[44px] items-center" style={{ color: "#FF9966" }}>
                  Schedule a Shoot <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agents Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 px-2">
              Why Agents Choose 3F Imaging
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4" style={{ color: "#FF9966" }} />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">Simple Process</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto px-2">Four steps. No surprises.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center px-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black text-white mx-auto mb-4" style={{ backgroundColor: "#FF9966" }}>
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 px-2">About 3F Imaging</h2>
          </div>

          <div className="max-w-3xl mx-auto mb-10 sm:mb-16 px-0 sm:px-2">
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              3F Imaging is a Northern Indiana real estate media company built for agents who value consistency and results. We provide professional photography, drone, video, floor plans, and 3D tours. Media that helps listings stand out.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Our focus: consistency, speed, and reliability. Streamlined booking. Standardized editing. Next-business-day delivery.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              We serve a 60-mile radius across Northern Indiana — Warsaw, Fort Wayne, Columbia City, and surrounding communities. Individual agents, teams, and high-volume brokerages. Single-property shoots or consistent listing volume. Same reliable turnaround.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              3F Imaging is a dependable, fast, systems-driven real estate media partner. Built for agents who care about consistency and results.
            </p>
          </div>

          {/* Meet the Owner Section */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8">The Vision Behind 3F Imaging</h3>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="min-w-0">
                <img
                  src="/kshowley.jpg"
                  alt="Kyle Showley"
                  className="rounded-xl sm:rounded-2xl w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] h-auto mx-auto"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">Kyle Showley</h4>
                <p className="text-base sm:text-lg font-bold text-gray-700 mb-4 sm:mb-6" style={{ color: "#FF9966" }}>Founder & CEO</p>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  3F Imaging was founded with a long-term vision: to build Northern Indiana's most reliable real estate media partner.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  In today's market, buyers make decisions online before they ever step through a front door. Listing presentation is no longer optional — it is strategic. 3F Imaging was built to meet that reality with structure, precision, and consistency.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  Founded by Kyle Showley, the company was created not simply to produce strong visuals, but to establish a scalable system for delivering professional media at a high standard — every time. From streamlined booking to standardized editing workflows and next-business-day delivery, every element of the operation is designed around reliability.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  Top-performing agents require more than creativity. They require consistency. They require media that is delivered on schedule, formatted correctly, and aligned with their brand across every listing.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  While Kyle remains actively involved in company direction and quality control, the vision extends beyond a single operator. 3F Imaging is structured for growth — built to support individual agents, expanding teams, and high-volume brokerages throughout Northern Indiana.
                </p>
                <p className="text-gray-600 leading-relaxed font-semibold text-sm sm:text-base">
                  The mission is clear: elevate listing marketing through disciplined systems, dependable execution, and scalable support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 px-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full text-left bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all hover:border-gray-300 min-h-[56px] flex flex-col justify-center sm:min-h-0"
                aria-expanded={expandedFaq === idx}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{faq.question}</h3>
                  <span className="text-xl sm:text-2xl font-bold shrink-0" style={{ color: "#FF9966" }}>
                    {expandedFaq === idx ? "−" : "+"}
                  </span>
                </div>
                {expandedFaq === idx && (
                  <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">Contact</h2>
            <p className="text-base sm:text-lg text-gray-600 px-2">Schedule a shoot or ask about pricing. We respond quickly.</p>
          </div>

          {/* Delivered via FormSubmit — forwards to kshowley@3fimaging.com (one-time email activation on first use). */}
          <form
            action="https://formsubmit.co/kshowley@3fimaging.com"
            method="POST"
            className="bg-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl space-y-4 sm:space-y-6"
          >
            <input type="hidden" name="_subject" value="3F Imaging — website contact" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <input type="text" name="first_name" placeholder="First Name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 min-h-[48px]" style={{ outlineColor: "#FF9966" }} />
              <input type="text" name="last_name" placeholder="Last Name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 min-h-[48px]" style={{ outlineColor: "#FF9966" }} />
            </div>
            <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 min-h-[48px]" style={{ outlineColor: "#FF9966" }} />
            <textarea name="message" placeholder="Listing address, package interest, or question..." rows={5} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 min-h-[120px]" style={{ outlineColor: "#FF9966" }} />
            <button type="submit" className="w-full py-4 rounded-lg font-bold text-white transition-all hover:shadow-lg min-h-[48px] text-base" style={{ backgroundColor: "#FF9966" }}>
              SEND MESSAGE
            </button>
          </form>

          <div className="mt-10 sm:mt-12 grid sm:grid-cols-1 gap-6 sm:gap-8 text-center">
            <div>
              <p className="text-gray-600 mb-2 text-sm sm:text-base">Email</p>
              <a href="mailto:kshowley@3fimaging.com" className="text-lg sm:text-2xl font-bold text-gray-900 block py-2 break-all" style={{ color: "#FF9966" }}>kshowley@3fimaging.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#services" className="hover:text-white transition py-1 inline-block">Photography & Drone</a></li>
                <li><a href="#services" className="hover:text-white transition py-1 inline-block">Video</a></li>
                <li><a href="#services" className="hover:text-white transition py-1 inline-block">Floor Plans</a></li>
                <li><a href="#services" className="hover:text-white transition py-1 inline-block">3D Tours</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#about" className="hover:text-white transition py-1 inline-block">About</a></li>
                <li><a href="#portfolio" className="hover:text-white transition py-1 inline-block">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition py-1 inline-block">Contact</a></li>
                <li><a href="#contact" className="hover:text-white transition py-1 inline-block">Schedule a Shoot</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition py-1 inline-block">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition py-1 inline-block">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition py-1 inline-block">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition py-1 inline-block">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Service Area</h4>
              <p className="text-gray-400 text-sm sm:text-base">
                We serve a 60-mile radius across Northern Indiana, including Fort Wayne, Warsaw, and surrounding communities.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2026 3F Imaging. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}




