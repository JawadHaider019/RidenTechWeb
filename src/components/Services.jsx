// components/Services.jsx
"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Custom Software Development",
    description: [
      "Tailored software solutions built with modern frameworks like React, Next.js, and Node.js.",
      "Scalable architecture that grows with your business and user base.",
      "Clean code, best practices, and comprehensive testing for reliable performance."
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Web & PWA Engineering",
    description: [
      "Progressive Web Apps that work offline and load instantly on any device.",
      "Responsive designs that provide a native app-like experience in the browser.",
      "Cross-platform compatibility without the need for separate codebases."
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
  },
  {
    title: "Mobile App Development",
    description: [
      "Native and cross-platform mobile applications for iOS and Android.",
      "Seamless user experiences with smooth animations and intuitive interfaces.",
      "Integration with device features like camera, GPS, and push notifications."
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "API & Systems Integration",
    description: [
      "Connect your applications with third-party services and internal systems.",
      "RESTful and GraphQL APIs designed for scalability and security.",
      "Seamless data flow between your existing tools and new solutions."
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  },
  {
    title: "AI & Machine Learning",
    description: [
      "Integrate powerful AI features into your applications.",
      "Custom machine learning models tailored to your specific business needs.",
      "Automate workflows, generate content, and analyze data intelligently."
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Cloud Architecture",
    description: [
      "Scalable cloud infrastructure on AWS, Google Cloud, or Azure.",
      "Cost-effective solutions with high availability and global distribution.",
      "Infrastructure as code for consistent and reliable environments."
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "DevOps & Automation",
    description: [
      "Streamlined development pipelines for faster deployments.",
      "Automated testing and continuous integration/continuous deployment.",
      "Infrastructure as code for consistent and reliable environments."
    ],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "UI/UX Design",
    description: [
      "Beautiful, intuitive designs that users love to interact with.",
      "User-centered design approach focused on conversion and engagement.",
      "Rapid prototyping in Figma to visualize your ideas before development."
    ],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "E-Commerce Solutions",
    description: [
      "Custom online stores with secure payment processing.",
      "Inventory management, order tracking, and customer accounts.",
      "Optimized for conversions and mobile shopping experiences."
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Database Architecture",
    description: [
      "Efficient database design for optimal performance and scalability.",
      "SQL and NoSQL solutions based on your data requirements.",
      "Data migration, optimization, and maintenance services."
    ],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2129&auto=format&fit=crop"
  }
];

export default function Services() {
  const [expanded, setExpanded] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const serviceItemsRef = useRef([]);
  const descriptionsRef = useRef({});
  const arrowsRef = useRef({});
  const [mounted, setMounted] = useState(false);

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle hover-based expansion
  const handleMouseEnter = (idx) => {
    setHoveredIndex(idx);
    setExpanded(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setExpanded(null);
  };

  // Main Scroll Animation
  useEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      // Entrance animations for header
      gsap.fromTo(badgeRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true }
        }
      );

      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true }
        }
      );

      gsap.fromTo(subtitleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true }
        }
      );

      // Entrance animations for service items
      const items = serviceItemsRef.current.filter(Boolean);
      gsap.fromTo(items,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%", once: true }
        }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, [mounted]);

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-12 px-6 md:px-20 overflow-hidden relative">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-16">
        <div
          ref={badgeRef}
          className="inline-flex items-center bg-gray-50 text-gray-700 rounded-full px-4 py-2 mb-6 border border-gray-200"
        >
          <Code2 className="w-4 h-4 mr-2 text-gray-500" />
          <span className="text-xs font-manrope tracking-wider">Expertise</span>
        </div>

        <h2
          ref={titleRef}
          className="font-manrope font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 leading-tight"
        >
          Your Needs, <span className="text-gray-400">Our Expertise</span>
        </h2>

        <p
          ref={subtitleRef}
          className="font-instrument text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
        >
          Comprehensive solutions tailored to your business needs
        </p>
      </div>

      {/* Service List - 10 Main Services */}
      <div className="max-w-7xl mx-auto mt-16 relative z-10 flex flex-col">
        {SERVICES.slice(0, 10).map((service, idx) => {
          const isOpen = expanded === idx;
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={idx}
              ref={el => serviceItemsRef.current[idx] = el}
              className={`group relative flex flex-col lg:flex-row items-start lg:items-center px-0 transition-all duration-500 cursor-pointer border-t border-gray-800/50 ${isOpen ? "bg-white/5 px-4 md:px-8 py-7 md:py-10" : "hover:bg-white/5 hover:px-2 md:hover:px-4 py-5 md:py-7"}`}
              onMouseEnter={() => isDesktop && handleMouseEnter(idx)}
              onMouseLeave={() => isDesktop && handleMouseLeave()}
              onClick={() => {
                if (!isDesktop) {
                  setExpanded(isOpen ? null : idx);
                }
              }}
            >
              {/* Top Row for Mobile (Number + Title + Arrow) */}
              <div className="flex w-full items-center justify-between lg:contents">
                <div className="flex items-center gap-4 lg:contents">
                  {/* Number - Column 1 */}
                  <div className="lg:w-1/12 flex items-center">
                    <span className={`font-manrope text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-500 ${isOpen ? "text-white scale-110" : "text-gray-800"}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title - Column 2 Part 1 */}
                  <div className="lg:w-7/12 flex flex-col items-start justify-center">
                    <h3 className={`font-instrument text-lg md:text-xl lg:text-2xl font-medium transition-all duration-500 ${isOpen ? "text-white" : "text-gray-400"}`}>
                      {service.title}
                    </h3>

                    {/* Description - Desktop Position */}
                    <div className={`hidden lg:block transition-all duration-700 overflow-hidden ${isOpen ? 'opacity-100 max-h-40 mt-1' : 'opacity-0 max-h-0'}`}>
                      <div className="flex flex-col gap-1">
                        {service.description.map((desc, i) => (
                          <p key={i} className="font-manrope text-gray-400 lg:text-xs leading-relaxed max-w-lg">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Indicator (Mobile) - Always visible */}
                <div className="lg:hidden">
                  <ArrowUpRight
                    className={`w-5 h-5 transition-all duration-300 ${isOpen ? "text-white" : "text-gray-600"
                      } ${isHovered ? "rotate-12 scale-110" : "rotate-0"
                      }`}
                  />
                </div>
              </div>

              {/* Description Reveal - Mobile Position */}
              <div className={`lg:hidden w-full transition-all duration-700 overflow-hidden ${isOpen ? 'opacity-100 max-h-96 mt-4' : 'opacity-0 max-h-0'}`}>
                <div className="flex flex-col gap-2 pl-12 md:pl-16">
                  {service.description.map((desc, i) => (
                    <p key={i} className="font-manrope text-gray-400 text-xs md:text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Reveal - Desktop Only */}
              <div className="hidden lg:flex lg:w-[350px] justify-end overflow-hidden transition-all duration-700 ease-in-out pr-6">
                <div
                  className={`w-full aspect-video lg:aspect-auto lg:h-24 overflow-hidden rounded-xl relative transition-all duration-700 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 h-0'}`}
                >
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Arrow Indicator (Desktop) - Always visible, rotates on hover */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block transition-all duration-300">
                <ArrowUpRight
                  className={`w-8 h-8 transition-all duration-300 ${isOpen ? "text-white" : "text-gray-600"
                    } ${isHovered ? "rotate-12 scale-110" : "rotate-0"
                    }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}