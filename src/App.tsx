/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  ChevronRight, 
  Menu, 
  X,
  Sparkles,
  Heart,
  Baby,
  Flower2,
  ExternalLink,
  Mail
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

const programs = [
  {
    id: 1,
    category: "EVENT",
    title: "[50%이벤트]-부분관리",
    duration: "1시간",
    details: [
      "체형측정 및 분석 + 상담 (20분)",
      "손목, 손가락/목, 어깨/발목, 종아리, 무릎 중 선택 관리 (40분)"
    ],
    originalPrice: "110,000",
    discountPrice: "55,000",
    discountRate: "50%",
    image: "https://images.unsplash.com/photo-1544126592-807daf21565c?q=80&w=2070&auto=format&fit=crop",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 2,
    category: "SIGNATURE",
    title: "[70분수기관리]-첫방문30%할인+웰컴 기프트",
    duration: "1시간 10분",
    details: ["첫방문 1회 30% 할인", "웰컴 기프트백 증정"],
    originalPrice: "180,000",
    discountPrice: "126,000",
    discountRate: "30%",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c9?q=80&w=2070&auto=format&fit=crop",
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 3,
    category: "ENERGY",
    title: "[90분에너지관리]-첫방문30%할인+웰컴 기프트",
    duration: "1시간 30분",
    details: ["첫방문 1회 30% 할인", "웰컴 기프트백 증정"],
    originalPrice: "240,000",
    discountPrice: "168,000",
    discountRate: "30%",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop",
    icon: <Flower2 className="w-6 h-6" />
  },
  {
    id: 4,
    category: "SPECIAL",
    title: "[120분스페셜관리]-첫방문30%할인+웰컴 기프트",
    duration: "2시간",
    details: ["첫방문 1회 30% 할인", "웰컴 기프트백 증정"],
    originalPrice: "300,000",
    discountPrice: "210,000",
    discountRate: "30%",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=2070&auto=format&fit=crop",
    icon: <Sparkles className="w-6 h-6" />
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Shared Layout Components
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || !isHome ? "glass-nav py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className={`text-2xl font-serif tracking-[0.2em] font-medium ${!isScrolled && isHome ? "text-white" : "text-brand-ink"}`}>HESS LAB</Link>
            <div className={`hidden md:flex gap-8 text-[11px] font-medium tracking-widest uppercase opacity-70 ${!isScrolled && isHome ? "text-white" : "text-brand-ink"}`}>
              <Link to="/about" className="hover-underline">ABOUT</Link>
              <Link to="/programs" className="hover-underline">PROGRAM</Link>
              <Link to="/location" className="hover-underline">LOCATION</Link>
              <Link to="/academy" className="hover-underline">ACADEMY</Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="https://naver.me/5BwIqWV7" target="_blank" rel="noreferrer" className={`text-[11px] font-medium tracking-widest uppercase border px-6 py-2 rounded-full transition-colors ${!isScrolled && isHome ? "text-white border-white/20 hover:bg-white hover:text-brand-ink" : "text-brand-ink border-brand-ink/20 hover:bg-brand-ink hover:text-brand-beige"}`}>
              Naver Place
            </a>
          </div>

          <button className={`md:hidden ${!isScrolled && isHome ? "text-white" : "text-brand-ink"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-brand-beige flex flex-col items-center justify-center gap-8 text-2xl font-serif uppercase tracking-widest"
        >
          <Link to="/about">ABOUT</Link>
          <Link to="/programs">PROGRAM</Link>
          <Link to="/location">LOCATION</Link>
          <Link to="/academy">ACADEMY</Link>
        </motion.div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="py-20 bg-brand-ink text-brand-beige/60 text-[11px] tracking-widest uppercase">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="text-center md:text-left">
            <h2 className="text-brand-beige text-2xl font-serif tracking-[0.2em] mb-4">HESS LAB</h2>
            <p>Premium Maternity Wellness Center</p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-brand-beige/40">Navigation</span>
              <Link to="/about" className="hover:text-brand-beige">ABOUT</Link>
              <Link to="/programs" className="hover:text-brand-beige">PROGRAM</Link>
              <Link to="/location" className="hover:text-brand-beige">LOCATION</Link>
              <Link to="/academy" className="hover:text-brand-beige">ACADEMY</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-brand-beige/40">Social</span>
              <a href="#" className="hover:text-brand-beige">Instagram</a>
              <a href="#" className="hover:text-brand-beige">Blog</a>
              <a href="#" className="hover:text-brand-beige">Kakao</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2026 HESS LAB. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-beige">Privacy Policy</a>
            <a href="#" className="hover:text-brand-beige">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Page Components
function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
            alt="Spa Atmosphere" 
            className="w-full h-full object-cover brightness-75 scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/40 via-transparent to-brand-beige"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-[12px] tracking-[0.4em] uppercase mb-6"
          >
            Premium Maternity Spa
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-6xl md:text-8xl lg:text-9xl font-serif mb-12 leading-tight"
          >
            Hess Lab
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/programs" className="inline-flex items-center gap-4 text-white/90 text-sm tracking-widest uppercase group">
              Explore Programs
              <div className="w-12 h-[1px] bg-white/40 group-hover:w-20 transition-all duration-500"></div>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <span className="text-[10px] tracking-widest uppercase rotate-90 origin-left translate-x-1">Scroll</span>
          <div className="w-[1px] h-12 bg-white"></div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-serif mb-8">가장 소중한 순간, 가장 완벽한 휴식</motion.h2>
          <motion.p {...fadeInUp} className="text-brand-muted max-w-2xl mx-auto leading-relaxed mb-12">
            헤스랩(Hess Lab)은 임신과 출산이라는 경이로운 여정을 걷는 여성들을 위한 프리미엄 산전·산후 전문 스파입니다.
          </motion.p>
          <motion.div {...fadeInUp}>
            <Link to="/about" className="text-brand-gold text-xs tracking-widest uppercase font-bold border-b border-brand-gold/30 pb-2">Learn More About Us</Link>
          </motion.div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <motion.div {...fadeInUp}>
              <span className="text-brand-gold text-[11px] tracking-[0.3em] uppercase mb-4 block">Signature Care</span>
              <h2 className="text-4xl font-serif">프로그램 미리보기</h2>
            </motion.div>
            <motion.div {...fadeInUp}>
              <Link to="/programs" className="text-[11px] tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">View All Programs →</Link>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program, idx) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-ink/20"></div>
                  <div className="absolute top-4 left-4 bg-brand-gold text-white text-[10px] px-2 py-1 rounded-sm font-bold">
                    {program.discountRate} OFF
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-2">{program.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-brand-gold font-bold text-lg">{program.discountPrice}원</span>
                  <span className="text-brand-muted line-through text-xs">{program.originalPrice}원</span>
                </div>
                <p className="text-xs text-brand-muted line-clamp-1">{program.details[0]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <section className="pt-12 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-brand-gold text-[11px] tracking-[0.3em] uppercase mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              가장 소중한 순간,<br />
              가장 완벽한 휴식
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8 max-w-md">
              헤스랩(Hess Lab)은 임신과 출산이라는 경이로운 여정을 걷는 여성들을 위한 프리미엄 산전·산후 전문 스파입니다. 
              단순한 마사지를 넘어, 생명의 탄생을 준비하고 회복하는 모든 과정에서 최상의 웰니스를 경험하실 수 있도록 설계되었습니다.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-gold"></div>
                <span className="text-sm font-medium italic">Expert Therapists</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-gold"></div>
                <span className="text-sm font-medium italic">Premium Organic Products</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-gold"></div>
                <span className="text-sm font-medium italic">Private Healing Space</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeInUp}
            className="relative aspect-[4/5] rounded-t-[200px] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop" 
              alt="Spa Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-brand-beige/20"></div>
          </motion.div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div {...fadeInUp}>
              <span className="text-brand-gold text-[11px] tracking-[0.3em] uppercase mb-4 block">Atmosphere</span>
              <h2 className="text-5xl font-serif">The Healing Space</h2>
            </motion.div>
            <motion.p {...fadeInUp} className="text-brand-muted text-sm max-w-xs leading-relaxed">
              오직 당신만을 위해 준비된 프라이빗한 공간에서 도심 속 완벽한 휴식을 경험하세요.
            </motion.p>
          </div>

          <div className="grid grid-cols-12 gap-4 h-[600px]">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8 h-full rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
                alt="Spa Treatment Room" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4 h-full">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 rounded-2xl overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1531234799389-dcb7651eb0a2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Spa Details" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-1 rounded-2xl overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop" 
                  alt="Spa Products" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ProgramsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <section className="pt-12 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.span {...fadeInUp} className="text-brand-gold text-[11px] tracking-[0.3em] uppercase mb-4 block">Our Programs</motion.span>
            <motion.h2 {...fadeInUp} className="text-5xl md:text-6xl font-serif">Signature Care</motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {programs.map((program, idx) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-brand-beige/20 rounded-3xl overflow-hidden border border-brand-ink/5 hover:border-brand-gold/20 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative aspect-square md:aspect-auto">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-brand-ink/30 transition-colors duration-500"></div>
                    <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      {program.icon}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] tracking-widest text-brand-gold font-bold uppercase">{program.category}</span>
                        <span className="text-[10px] bg-brand-gold/10 text-brand-gold px-2 py-1 rounded-sm font-bold">시술시간 {program.duration}</span>
                      </div>
                      <h3 className="text-xl font-serif mb-4 group-hover:text-brand-gold transition-colors">{program.title}</h3>
                      <ul className="space-y-2 mb-8">
                        {program.details.map((detail, i) => (
                          <li key={i} className="text-sm text-brand-muted flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6 border-t border-brand-ink/5 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-brand-muted line-through mb-1">{program.originalPrice}원</p>
                        <div className="flex items-center gap-2">
                          <span className="text-brand-gold font-bold text-sm">{program.discountRate}</span>
                          <span className="text-2xl font-bold text-brand-ink">{program.discountPrice}원</span>
                        </div>
                      </div>
                      <Link to="/reservation" className="text-[10px] tracking-widest uppercase font-bold text-brand-gold border-b border-brand-gold/30 pb-1 hover:border-brand-gold transition-all">Book Now</Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function LocationPage() {
  const branches = [
    {
      id: 1,
      name: "언주역 본점",
      address: "서울 강남구 봉은사로24길 8 3층",
      subAddress: "(언주역 8번 출구에서 151m)",
      hours: "매일 10:00 - 20:00",
      phone: "010-1234-5678",
      naverUrl: "https://naver.me/5BwIqWV7"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <section className="bg-white border-t border-brand-ink/5">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-128px)]">
          {/* Left: Branch List */}
          <div className="lg:w-[450px] xl:w-[500px] p-8 md:p-12 lg:p-16 overflow-y-auto bg-white">
            <motion.div {...fadeInUp}>
              <span className="text-brand-ink text-[13px] tracking-[0.2em] uppercase mb-4 block font-bold">LOCATION</span>
              
              <div className="space-y-20 mt-12">
                {branches.map((branch) => (
                  <div key={branch.id} className="group">
                    <h3 className="text-3xl font-serif mb-4 text-brand-ink">{branch.name}</h3>
                    <div className="flex items-start gap-2 mb-6">
                      <p className="text-brand-muted text-[15px] leading-relaxed">
                        {branch.address}<br />
                        <span className="text-[12px] opacity-60">{branch.subAddress}</span>
                      </p>
                      <MapPin className="w-4 h-4 text-brand-ink mt-1 flex-shrink-0" />
                    </div>
                    
                    <div className="h-[1px] bg-brand-ink/10 w-full mb-6"></div>

                    <div className="grid grid-cols-2 gap-8 mb-8 text-[11px] tracking-wider uppercase">
                      <div>
                        <p className="text-brand-ink/40 mb-2 font-bold">OPENING HOURS</p>
                        <p className="font-medium text-brand-ink">{branch.hours}</p>
                        <p className="text-brand-ink/60 mt-1">연중무휴</p>
                      </div>
                      <div>
                        <p className="text-brand-ink/40 mb-2 font-bold">PHONE</p>
                        <p className="font-medium text-brand-ink">{branch.phone}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <a 
                        href={branch.naverUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center justify-center bg-[#03C75A] text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase rounded-sm hover:bg-[#02b351] transition-all shadow-sm"
                      >
                        네이버 예약하기
                      </a>
                      <div className="flex gap-2">
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=서울+강남구+봉은사로24길+8" 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-1 text-center border border-brand-ink/10 py-3 text-[10px] font-bold tracking-widest uppercase rounded-sm hover:bg-brand-beige/30 transition-all"
                        >
                          구글 지도
                        </a>
                        <a 
                          href="https://map.naver.com/v5/search/서울+강남구+봉은사로24길+8" 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-1 text-center border border-brand-ink/10 py-3 text-[10px] font-bold tracking-widest uppercase rounded-sm hover:bg-brand-beige/30 transition-all"
                        >
                          네이버 지도
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Map Section */}
          <div className="flex-1 h-[500px] lg:h-auto relative bg-slate-50 border-l border-brand-ink/5">
            <iframe 
              src="https://maps.google.com/maps?q=서울+강남구+봉은사로24길+8&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Hess Lab Location Map"
            ></iframe>
            
            {/* Open in Map Button Overlay */}
            <div className="absolute top-6 left-6 z-10">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=서울+강남구+봉은사로24길+8" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md shadow-lg border border-brand-ink/5 flex items-center gap-2 text-[11px] font-bold text-brand-ink hover:bg-white transition-all"
              >
                지도에서 열기 <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ReservationPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <section className="pt-12 pb-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span {...fadeInUp} className="text-brand-gold text-[11px] tracking-[0.3em] uppercase mb-4 block">Reservation</motion.span>
            <motion.h2 {...fadeInUp} className="text-5xl font-serif">Book Your Session</motion.h2>
          </div>

          <motion.form 
            {...fadeInUp}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase opacity-60">Name</label>
                <input type="text" className="w-full bg-brand-beige/30 border-b border-brand-ink/10 py-3 focus:border-brand-gold outline-none transition-colors" placeholder="성함을 입력해주세요" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase opacity-60">Phone</label>
                <input type="tel" className="w-full bg-brand-beige/30 border-b border-brand-ink/10 py-3 focus:border-brand-gold outline-none transition-colors" placeholder="연락처를 입력해주세요" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase opacity-60">Program</label>
              <select className="w-full bg-brand-beige/30 border-b border-brand-ink/10 py-3 focus:border-brand-gold outline-none transition-colors appearance-none">
                <option>프로그램을 선택해주세요</option>
                {programs.map(p => (
                  <option key={p.id}>{p.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase opacity-60">Message</label>
              <textarea className="w-full bg-brand-beige/30 border-b border-brand-ink/10 py-3 focus:border-brand-gold outline-none transition-colors h-32 resize-none" placeholder="문의사항이나 특별히 관리받고 싶은 부위가 있다면 적어주세요"></textarea>
            </div>

            <button className="w-full bg-brand-ink text-brand-beige py-6 text-xs tracking-[0.3em] uppercase font-bold hover:bg-brand-gold transition-colors duration-500">
              Request Reservation
            </button>
            <p className="text-center text-[10px] text-brand-muted tracking-widest">
              * 예약 신청 후 담당 테라피스트가 확인 전화를 드립니다.
            </p>
          </motion.form>
        </div>
      </section>
    </motion.div>
  );
}

function AcademyPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      {/* Hero Section */}
      <section className="py-24 flex items-center justify-center bg-brand-beige/30">
        <div className="text-center max-w-2xl px-6">
          <span className="text-brand-gold text-[13px] tracking-[0.3em] uppercase mb-6 block font-bold">ACADEMY</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-ink mb-8 leading-tight">
            HESS LAB Academy<br />
            Coming Soon
          </h2>
          <p className="text-brand-muted leading-relaxed mb-12">
            헤스랩만의 독자적인 테라피 기술과 철학을 공유하는 아카데미가 곧 오픈될 예정입니다. 
            전문 테라피스트 양성을 위한 체계적인 커리큘럼을 준비하고 있습니다.
          </p>
          <div className="h-[1px] bg-brand-ink/10 w-24 mx-auto"></div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-32 bg-brand-ink text-brand-beige">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              아카데미 입학 및<br />
              교육 문의
            </h2>
            <p className="text-brand-beige/60 leading-relaxed mb-12 max-w-md">
              헤스랩의 전문적인 테라피 기술과 철학을 전수받고 싶으신가요?<br />
              교육 과정에 대한 궁금한 점은 언제든 문의주세요.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-beige/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Email</p>
                  <p className="text-lg font-serif">academy@hesslab.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-beige/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Phone</p>
                  <p className="text-lg font-serif">02-1234-5678</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm p-12 md:p-20 rounded-3xl border border-white/10 text-center w-full"
          >
            <h3 className="text-2xl font-serif mb-8 text-white">교육 상담 및 문의</h3>
            <p className="text-brand-beige/60 text-sm mb-12 leading-relaxed">
              아래 버튼을 클릭하여 문의 양식을 작성해 주시면<br />
              확인 후 신속하게 답변해 드리겠습니다.
            </p>
            <a 
              href="https://forms.gle/uLTsWWwC1Yp151FU6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-white px-16 py-6 text-xs tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-brand-ink transition-all duration-500 rounded-xl shadow-2xl"
            >
              문의하기
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-brand-gold selection:text-white">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/academy" element={<AcademyPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Reservation Button (Mobile) */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <Link to="/reservation" className="w-16 h-16 rounded-full bg-brand-gold text-white flex items-center justify-center shadow-2xl">
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </Router>
  );
}
