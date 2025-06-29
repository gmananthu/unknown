import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Award, Code, Palette, Zap, ChevronDown, Menu, X, Play, CheckCircle, MessageCircle, Globe, Eye, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FreelanceHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      number: "01",
      title: "Digital Products",
      description: "End-to-end product design and development with focus on user experience and business impact.",
      technologies: ["React", "Node.js", "Python", "AWS"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format"
    },
    {
      number: "02", 
      title: "Brand Identity",
      description: "Strategic brand development with visual systems that communicate your unique value proposition.",
      technologies: ["Figma", "Adobe CC", "Webflow", "Framer"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&auto=format"
    },
    {
      number: "03",
      title: "Growth Systems",
      description: "Data-driven marketing automation and conversion optimization for sustainable growth.",
      technologies: ["Analytics", "A/B Testing", "SEO", "CRO"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format"
    }
  ];

  const projects = [
    {
      title: "FinTech Platform",
      category: "Product Design",
      year: "2024",
      description: "Complete redesign of trading platform serving 50K+ users",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&auto=format",
      tags: ["UX/UI", "React", "Real-time Data"]
    },
    {
      title: "AI Startup Brand",
      category: "Brand Identity", 
      year: "2024",
      description: "Visual identity and website for Series A AI company",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format",
      tags: ["Branding", "Web Design", "Motion"]
    },
    {
      title: "E-commerce Growth",
      category: "Digital Strategy",
      year: "2023", 
      description: "300% revenue increase through conversion optimization",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format",
      tags: ["CRO", "Analytics", "Growth"]
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "CTO, VectorAI",
      company: "Series B Startup",
      content: "Delivered exceptional results that directly impacted our Series B funding. The attention to detail and strategic thinking is unmatched.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format"
    },
    {
      name: "Sarah Kim", 
      role: "Head of Product, Stripe",
      company: "Fortune 500",
      content: "Rare combination of design excellence and technical depth. Transformed our user experience and increased conversion by 40%.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b302?w=100&h=100&fit=crop&auto=format"
    }
  ];

  return (
     <div className="min-h-screen bg-zinc-950 text-white relative overflow-x-hidden">
      {/* Custom cursor effect */}
      <div 
        className="fixed w-6 h-6 bg-white/20 rounded-full pointer-events-none z-50 transition-transform duration-150 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${scrollY > 100 ? 0.5 : 1})`
        }}
      />

      {/* Grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrollY > 50 ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-light tracking-tight">
              Studio<span className="font-medium">X</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-12">
              <a href="#work" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Work</a>
              <a href="#services" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Services</a>
              <a href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">About</a>
              <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Contact</a>
              <div className="w-px h-6 bg-zinc-700" />
              <Button className="bg-white text-black hover:bg-zinc-200 text-sm font-medium px-6 py-2 h-auto rounded-full transition-all duration-300">
                Start Project
              </Button>
            </div>

            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-zinc-950 z-30 transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col justify-center items-center h-full space-y-8">
            <a href="#work" className="text-3xl font-light hover:text-zinc-400 transition-colors">Work</a>
            <a href="#services" className="text-3xl font-light hover:text-zinc-400 transition-colors">Services</a>
            <a href="#about" className="text-3xl font-light hover:text-zinc-400 transition-colors">About</a>
            <a href="#contact" className="text-3xl font-light hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative py-20 lg:py-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <div className="text-xs sm:text-sm text-zinc-500 uppercase tracking-widest">Digital Studio</div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-light leading-[0.9] tracking-tight">
                  We craft
                  <br />
                  <span className="font-medium italic">experiences</span>
                  <br />
                  that matter
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Strategic design and development for ambitious brands. From concept to execution, we deliver digital products that drive real business impact.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Button className="bg-white text-black hover:bg-zinc-200 px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-full font-medium transition-all duration-300 group w-full sm:w-auto">
                  View Our Work
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <button className="text-zinc-400 hover:text-white transition-colors flex items-center space-x-2 group">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 border border-zinc-700 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                    <Play className="w-3 sm:w-4 h-3 sm:h-4 ml-0.5" />
                  </div>
                  <span className="text-sm">Watch Reel</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 lg:pt-12">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-light">50+</div>
                  <div className="text-xs sm:text-sm text-zinc-500">Projects Delivered</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-light">$2M+</div>
                  <div className="text-xs sm:text-sm text-zinc-500">Revenue Generated</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-light">5x</div>
                  <div className="text-xs sm:text-sm text-zinc-500">Avg. Growth Rate</div>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=1000&fit=crop&auto=format"
                  alt="Professional team collaborating on digital projects"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              
              {/* Floating elements */}
              {/* <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-black font-medium text-xs sm:text-sm">2024</span>
              </div> */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-zinc-900/90 border border-zinc-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
                <div className="text-xl sm:text-2xl font-light mb-1 sm:mb-2">98%</div>
                <div className="text-xs sm:text-sm text-zinc-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-8">
              <div>
                <div className="text-sm text-zinc-500 uppercase tracking-widest mb-4">What We Do</div>
                <h2 className="text-5xl lg:text-6xl font-light leading-tight">
                  Services that
                  <br />
                  <span className="font-medium italic">scale</span>
                </h2>
              </div>
              <p className="text-xl text-zinc-400 leading-relaxed">
                We partner with forward-thinking companies to create digital experiences that drive growth and set new industry standards.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-16">
              {services.map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-1">
                      <div className="text-sm text-zinc-500 font-mono">{service.number}</div>
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <h3 className="text-3xl font-light group-hover:text-zinc-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zinc-400 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-4">
                      <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                        <img 
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-zinc-800 mt-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm text-zinc-500 uppercase tracking-widest mb-4">Selected Work</div>
            <h2 className="text-5xl lg:text-6xl font-light leading-tight">
              Projects that
              <br />
              <span className="font-medium italic">perform</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="space-y-6">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-zinc-500 uppercase tracking-widest">
                        {project.category} • {project.year}
                      </div>
                    </div>
                    <h3 className="text-2xl font-light group-hover:text-zinc-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm text-zinc-500 uppercase tracking-widest mb-4">Testimonials</div>
            <h2 className="text-5xl lg:text-6xl font-light leading-tight">
              Client
              <br />
              <span className="font-medium italic">feedback</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="space-y-8">
                <div className="text-2xl font-light leading-relaxed text-zinc-300">
                  "{testimonial.content}"
                </div>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                    <div className="text-sm text-zinc-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-6xl lg:text-8xl font-light leading-[0.9] tracking-tight">
              Let's create
              <br />
              <span className="font-medium italic">together</span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's discuss your project and explore how we can drive your business forward.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-black text-white hover:bg-zinc-800 px-8 py-4 h-auto rounded-full font-medium text-lg transition-all duration-300 group">
              Start a Project
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 h-auto rounded-full font-medium text-lg transition-all duration-300">
              Schedule Call
            </Button>
          </div>

          <div className="flex justify-center space-x-8 pt-12">
            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-2xl font-light tracking-tight">
              Studio<span className="font-medium">X</span>
            </div>
            <div className="text-sm text-zinc-500">
              © 2024 StudioX. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}



// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Star, Users, Award, Code, Palette, Zap, ChevronDown, Menu, X, Play, CheckCircle, MessageCircle, Globe, Sparkles, Monitor, Smartphone, Layers } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function FreelanceHomepage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const services = [
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Web Development",
//       description: "Full-stack development with modern frameworks and cutting-edge technologies",
//       image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&auto=format"
//     },
//     {
//       icon: <Palette className="w-8 h-8" />,
//       title: "UI/UX Design",
//       description: "Beautiful, intuitive designs that convert visitors into customers",
//       image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop&auto=format"
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Digital Strategy",
//       description: "Comprehensive digital solutions to grow your online presence",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format"
//     }
//   ];

//   const stats = [
//     { number: "500+", label: "Projects Completed" },
//     { number: "98%", label: "Client Satisfaction" },
//     { number: "50+", label: "Happy Clients" },
//     { number: "5", label: "Years Experience" }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO, TechStart",
//       content: "Exceptional work quality and attention to detail. They transformed our vision into reality.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b302?w=60&h=60&fit=crop&auto=format&rounded=full"
//     },
//     {
//       name: "Michael Chen",
//       role: "Founder, InnovateLab",
//       content: "Professional, timely, and exceeded all expectations. Highly recommend!",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&auto=format&rounded=full"
//     }
//   ];

//   const portfolio = [
//     {
//       title: "E-commerce Platform",
//       category: "Web Development",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format"
//     },
//     {
//       title: "Mobile Banking App",
//       category: "UI/UX Design",
//       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format"
//     },
//     {
//       title: "SaaS Dashboard",
//       category: "Full Stack",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Subtle Background Pattern */}
//       <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none"></div>
      
//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
//                 <Layers className="w-6 h-6 text-black" />
//               </div>
//               <span className="text-2xl font-bold text-white">
//                 FreelanceStudio
//               </span>
//             </div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
//               <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
//               <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
//               <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
//               <Button className="bg-white text-black hover:bg-gray-100 border-0 font-semibold">
//                 Get Started
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden text-white"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-gray-800">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white">Services</a>
//               <a href="#portfolio" className="block px-3 py-2 text-gray-300 hover:text-white">Portfolio</a>
//               <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
//               <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-white">Testimonials</a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
//         {/* Hero Background Image */}
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1920&h=1080&fit=crop&auto=format"
//             alt="Hero Background"
//             className="w-full h-full object-cover opacity-20"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
//         </div>

//         <div className="max-w-7xl mx-auto text-center relative z-10">
//           <div className="animate-fadeInUp">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
//               Crafting Digital
//               <br />
//               <span className="text-gray-300">
//                 Excellence
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
//               We transform your ideas into stunning digital realities with cutting-edge technology and creative excellence
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//               <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-0 text-lg px-8 py-6 group font-semibold">
//                 Start Your Project
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 group">
//                 <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//                 Watch Demo
//               </Button>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="text-3xl md:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-400 mt-2">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-8 h-8 text-white" />
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-950">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//               Our Services
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Comprehensive solutions tailored to your unique needs and goals
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="group">
//                 <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
//                   <div className="relative h-48 overflow-hidden">
//                     <img 
//                       src={service.image} 
//                       alt={service.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//                   </div>
//                   <div className="p-8">
//                     <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
//                       {service.icon}
//                     </div>
//                     <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
//                     <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
//                     <Button variant="ghost" className="text-white hover:text-black hover:bg-white p-0 group">
//                       Learn More
//                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//               Our Work
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Showcasing some of our recent projects and client success stories
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {portfolio.map((item, index) => (
//               <div key={index} className="group cursor-pointer">
//                 <div className="relative overflow-hidden rounded-2xl bg-gray-900">
//                   <img 
//                     src={item.image} 
//                     alt={item.title}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     <span className="inline-block px-3 py-1 bg-white text-black text-sm font-semibold rounded-full mb-2">
//                       {item.category}
//                     </span>
//                     <h3 className="text-xl font-bold text-white">{item.title}</h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-950">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//                 Why Choose Us?
//               </h2>
//               <p className="text-xl text-gray-400 mb-8 leading-relaxed">
//                 We combine technical expertise with creative vision to deliver exceptional results that drive your business forward.
//               </p>
              
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-2">Quality Guaranteed</h3>
//                     <p className="text-gray-400">Every project is crafted with attention to detail and rigorous testing</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
//                     <p className="text-gray-400">We deliver projects on time without compromising on quality</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <MessageCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
//                     <p className="text-gray-400">Continuous support and maintenance for your projects</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format"
//                 alt="Team collaboration"
//                 className="rounded-2xl w-full h-96 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
//               <div className="absolute bottom-8 left-8 right-8">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-4">
//                     <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
//                     <h3 className="text-lg font-bold text-white">Award Winning</h3>
//                     <p className="text-gray-300 text-sm">Recognized excellence</p>
//                   </div>
//                   <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-4">
//                     <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
//                     <h3 className="text-lg font-bold text-white">Expert Team</h3>
//                     <p className="text-gray-300 text-sm">Skilled professionals</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//               Client Testimonials
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Don't just take our word for it - hear from our satisfied clients
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
//                 <div className="flex items-center mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-gray-300 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
//                 <div className="flex items-center">
//                   <img 
//                     src={testimonial.avatar} 
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full mr-4 object-cover"
//                   />
//                   <div>
//                     <div className="font-semibold text-white">{testimonial.name}</div>
//                     <div className="text-gray-400">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-950">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
//             Let's collaborate to bring your vision to life with cutting-edge technology and creative excellence
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-0 text-lg px-8 py-6 group font-semibold">
//               Get Free Consultation
//               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">
//               View Portfolio
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 bg-black">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-3 mb-4 md:mb-0">
//               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
//                 <Layers className="w-6 h-6 text-black" />
//               </div>
//               <span className="text-2xl font-bold text-white">
//                 FreelanceStudio
//               </span>
//             </div>
//             <div className="text-gray-400">
//               © 2025 FreelanceStudio. All rights reserved.
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }
















// import React, { useState, useEffect } from 'react';
// import { ChevronRight, Play, Star, Users, Award, TrendingUp, ArrowRight, Menu, X } from 'lucide-react';
// import Navbar from '../layouts/navbar/Navbar';


// export default function Homepage() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [scrollY, setScrollY] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => setScrollY(window.scrollY);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="min-h-screen bg-white">


//             {/* Hero Section */}
//             <section className="relative pt-16 overflow-hidden">
//                 <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative">
//                     {/* Background decorative elements */}
//                     <div className="absolute inset-0 opacity-10">
//                         <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
//                         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
//                     </div>

//                     <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
//                         <div className="grid lg:grid-cols-2 gap-12 items-center">
//                             <div className="space-y-8">
//                                 <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm">
//                                     <Star className="w-4 h-4 mr-2 text-yellow-400" />
//                                     Trusted by 10,000+ companies worldwide
//                                 </div>

//                                 <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
//                                     Build the
//                                     <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
//                                         Future
//                                     </span>
//                                     Together
//                                 </h1>

//                                 <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
//                                     We craft exceptional digital experiences that drive growth, inspire innovation, and transform businesses in the modern era.
//                                 </p>

//                                 <div className="flex flex-col sm:flex-row gap-4">
//                                     <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-200 shadow-xl flex items-center justify-center group">
//                                         Start Your Project
//                                         <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                                     </button>
//                                     <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-200 flex items-center justify-center group">
//                                         <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
//                                         Watch Demo
//                                     </button>
//                                 </div>

//                                 <div className="flex items-center space-x-8 pt-8">
//                                     <div className="text-center">
//                                         <div className="text-3xl font-bold text-white">500+</div>
//                                         <div className="text-blue-200 text-sm">Projects Delivered</div>
//                                     </div>
//                                     <div className="text-center">
//                                         <div className="text-3xl font-bold text-white">98%</div>
//                                         <div className="text-blue-200 text-sm">Client Satisfaction</div>
//                                     </div>
//                                     <div className="text-center">
//                                         <div className="text-3xl font-bold text-white">24/7</div>
//                                         <div className="text-blue-200 text-sm">Support</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="relative">
//                                 <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
//                                     <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
//                                         <div className="space-y-6">
//                                             <div className="flex items-center justify-between">
//                                                 <div className="flex items-center space-x-3">
//                                                     <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
//                                                         <TrendingUp className="w-6 h-6 text-white" />
//                                                     </div>
//                                                     <div>
//                                                         <div className="text-white font-semibold">Revenue Growth</div>
//                                                         <div className="text-blue-200 text-sm">+127% this quarter</div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="text-2xl font-bold text-green-400">↗</div>
//                                             </div>

//                                             <div className="h-24 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-xl flex items-end justify-around p-4">
//                                                 {[40, 65, 45, 80, 95, 70, 100].map((height, i) => (
//                                                     <div
//                                                         key={i}
//                                                         className="bg-gradient-to-t from-blue-400 to-cyan-300 rounded-sm w-3 transition-all duration-1000 delay-[${i * 100}ms]"
//                                                         style={{ height: `${height}%` }}
//                                                     ></div>
//                                                 ))}
//                                             </div>

//                                             <div className="grid grid-cols-2 gap-4">
//                                                 <div className="bg-white/5 rounded-xl p-4">
//                                                     <div className="text-white text-lg font-semibold">1.2M+</div>
//                                                     <div className="text-blue-200 text-xs">Active Users</div>
//                                                 </div>
//                                                 <div className="bg-white/5 rounded-xl p-4">
//                                                     <div className="text-white text-lg font-semibold">99.9%</div>
//                                                     <div className="text-blue-200 text-xs">Uptime</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Floating elements */}
//                                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl transform rotate-12 opacity-80 animate-pulse"></div>
//                                 <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-bounce"></div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Curved slope transition */}
//                     <div className="absolute bottom-0 left-0 w-full overflow-hidden">
//                         <svg
//                             viewBox="0 0 1200 120"
//                             preserveAspectRatio="none"
//                             className="relative block w-full h-16"
//                             style={{ transform: `translateY(${scrollY * 0.1}px)` }}
//                         >
//                             <path
//                                 d="M0,0 C360,120 840,120 1200,0 L1200,120 L0,120 Z"
//                                 fill="white"
//                                 className="transition-all duration-300"
//                             ></path>
//                         </svg>
//                     </div>
//                 </div>
//             </section>

//             {/* Services Preview Section */}
//             <section className="py-24 bg-white">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                             What We Do Best
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             From strategy to execution, we deliver comprehensive solutions that drive meaningful results for your business.
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 icon: <Users className="w-8 h-8" />,
//                                 title: "Digital Strategy",
//                                 description: "Comprehensive roadmaps that align technology with your business goals and market opportunities."
//                             },
//                             {
//                                 icon: <Award className="w-8 h-8" />,
//                                 title: "Product Design",
//                                 description: "User-centered design that creates intuitive experiences and drives engagement across all touchpoints."
//                             },
//                             {
//                                 icon: <TrendingUp className="w-8 h-8" />,
//                                 title: "Development",
//                                 description: "Scalable, secure, and performant solutions built with cutting-edge technologies and best practices."
//                             }
//                         ].map((service, i) => (
//                             <div
//                                 key={i}
//                                 className="group p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2"
//                             >
//                                 <div className="w-16 h-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
//                                     {service.icon}
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                                 <p className="text-gray-600 leading-relaxed">{service.description}</p>
//                                 <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
//                                     <span className="font-semibold">Learn More</span>
//                                     <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="py-24 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
//                     <div className="grid md:grid-cols-4 gap-8 text-center">
//                         {[
//                             { number: "500+", label: "Projects Completed" },
//                             { number: "50+", label: "Team Members" },
//                             { number: "98%", label: "Client Satisfaction" },
//                             { number: "5", label: "Years Experience" }
//                         ].map((stat, i) => (
//                             <div key={i} className="group">
//                                 <div className="text-5xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
//                                     {stat.number}
//                                 </div>
//                                 <div className="text-gray-600 font-medium">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-24 bg-white">
//                 <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
//                     <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                         Ready to Transform Your Business?
//                     </h2>
//                     <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                         Let's discuss how we can help you achieve your goals and create something extraordinary together.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center group">
//                             Start Your Project
//                             <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                         </button>
//                         <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
//                             Schedule a Call
//                         </button>
//                     </div>
//                 </div>
//             </section>

           
//         </div>
//     );
// }
