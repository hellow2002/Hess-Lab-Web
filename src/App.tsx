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

const programCategories = [
  {
    id: "preparation",
    title: "준비맘 PROGRAM",
    description: "건강한 임신을 준비하는 예비 산모를 위한 맞춤 케어",
    image: "/program1.jpg",
    basic: {
      title: "수기 관리 회복",
      description: "차갑고 긴장된 몸을 부드럽게 풀어 순환이 편안하게 이어지도록 돕는 수기 회복 프로그램",
      price: "180,000",
      time: "70분",
      type: "베이직"
    },
    advanced: [
      { title: "골반 구조 회복", description: "임신을 준비하는 몸의 기본 구조를 바로잡고, 골반과 중심 균형을 정돈하는 프로그램" },
      { title: "해독 순환 회복", description: "환경 호르몬과 노폐물 배출을 도와 몸의 부담을 줄이고, 아기를 준비하기 전 가볍고 건강한 몸 상태를 만드는 프로그램" },
      { title: "부종 · 체중 회복", description: "난임 시술 중 갑자기 붓고 체중이 늘어나는 몸의 변화를 순환과 대사 회복으로 관리하는 프로그램" }
    ],
    advancedPricing: [
      { time: "90분", type: "솔루션", price: "240,000" },
      { time: "120분", type: "인텐스", price: "300,000" }
    ]
  },
  {
    id: "prenatal",
    title: "예비맘 PROGRAM",
    description: "편안한 임신 기간과 건강한 출산을 위한 산전 케어",
    image: "/program2.jpg",
    basic: {
      title: "수기 관리 회복",
      description: "임신 전 몸의 순환과 균형을 부드럽게 정돈해 준비된 몸 상태를 만드는 수기 회복 프로그램",
      price: "180,000",
      time: "70분",
      type: "베이직"
    },
    advanced: [
      { title: "체형균형 회복", description: "환도, 꼬리뼈, 치골, 고관절, 허리 통증 개선 프로그램" },
      { title: "하지부종 순환 회복", description: "급격하고 증가하는 부종 완화 프로그램" },
      { title: "임신 중기 체중 컨트롤", description: "20주부터 만삭까지 계획적인 체중 컨트롤 프로그램" },
      { title: "임신 후기 체중 컨트롤", description: "임신 후반 급격한 체중 증가 컨트롤 프로그램" },
      { title: "피부균형 회복", description: "색소침착, 쥐젖, 기미, 튼살, 가려움, 소양증 개선 프로그램" },
      { title: "수면 리듬 회복", description: "수면의 질 회복 프로그램" },
      { title: "긴장·태교 회복", description: "긴장감과 불안감 완화 및 태교 프로그램" }
    ],
    advancedPricing: [
      { time: "90분", type: "솔루션", price: "240,000" },
      { time: "120분", type: "인텐스", price: "300,000" }
    ]
  },
  {
    id: "postpartum",
    title: "출산맘 PROGRAM",
    description: "출산 후 빠른 회복과 예전의 건강한 몸으로 되돌리는 산후 케어",
    image: "/program3.jpg",
    basic: {
      title: "수기 관리 회복",
      description: "출산 후 약해진 관절과 전신의 긴장을 풀어 움직임을 편하게 만드는 수기 회복 프로그램",
      price: "180,000",
      time: "70분",
      type: "베이직"
    },
    advanced: [
      { title: "부종 순환 회복", description: "출산 후 잘 안 빠지는 만성부종을 해결을 위한 근본적인 순환 프로그램" },
      { title: "냉기 배출 회복", description: "출산 후 냉기·시림·쑤심의 문제 해결을 위한 냉기배출 프로그램" },
      { title: "관절 기능 회복", description: "손목 발목 무릎처럼 출산 후 약해진 관절 기능 개선 프로그램" },
      { title: "목·어깨 긴장 회복", description: "목·어깨를 펴주고, 상체의 긴장과 통증을 완화해주는 프로그램" },
      { title: "코어·골반 회복", description: "출산으로 무너진 코어와 골반 중심을 다시 세우는 밸런스 프로그램" },
      { title: "가슴 편안 회복", description: "젖몸살 완화와 흉곽 밸런스 및 가슴 수술 후 모유수유 준비 프로그램" }
    ],
    advancedPricing: [
      { time: "90분", type: "솔루션", price: "240,000" },
      { time: "120분", type: "인텐스", price: "300,000" }
    ]
  },
  {
    id: "parenting",
    title: "육아맘·워킹맘 PROGRAM",
    description: "지친 일상 속 온전한 휴식과 컨디션 회복을 위한 케어",
    image: "/program4.jpg",
    basic: {
      title: "수기 관리 회복",
      description: "반복된 자세와 피로로 굳어진 목·어깨·상체를 풀어 일상 컨디션을 회복하는 수기 프로그램",
      price: "180,000",
      time: "70분",
      type: "베이직"
    },
    advanced: [
      { title: "관절 부담 회복", description: "손목·어깨·허리처럼 반복 사용으로 쌓인 관절 부담을 풀어 움직임을 편하게 만드는 프로그램" },
      { title: "피로 순환 회복", description: "수면 부족과 반복된 피로로 무거워진 몸을 순환과 따뜻함으로 풀어 하루 컨디션을 회복하는 프로그램" },
      { title: "상체 긴장 회복", description: "아기 안기·수유로 굳어진 목·어깨·등의 긴장을 풀어 편안한 상체로 회복하는 프로그램" }
    ],
    advancedPricing: [
      { time: "90분", type: "솔루션", price: "240,000" },
      { time: "120분", type: "인텐스", price: "300,000" }
    ]
  },
  {
    id: "grandmother",
    title: "친정맘 PROGRAM",
    description: "오랜 시간 쌓인 피로를 풀고 활력을 되찾아주는 시니어 케어",
    image: "/program5.jpg",
    basic: {
      title: "수기 관리 회복",
      description: "오랜 피로와 긴장을 부드럽게 풀어 다시 편안하고 가벼운 몸으로 회복하는 수기 프로그램",
      price: "180,000",
      time: "70분",
      type: "베이직"
    },
    advanced: [
      { title: "갱년기 회복", description: "갱년기로 무너진 컨디션 균형을 회복하고 편안한 숙면을 돕는 프로그램" },
      { title: "냉기 배출 회복", description: "출산 후 남은 시린 통증을 완화를 위해 몸의 냉기를 배출시키는 프로그램" },
      { title: "관절 기능 회복", description: "약해진 관절 기능과 근육 긴장을 집중적으로 관리해 움직임의 편안함을 회복하는 프로그램" }
    ],
    advancedPricing: [
      { time: "90분", type: "솔루션", price: "240,000" },
      { time: "120분", type: "인텐스", price: "300,000" }
    ]
  },
  {
    id: "bodyspa",
    title: "바디스파 PROGRAM",
    description: "전신의 순환을 돕고 아름다운 바디 라인을 가꾸는 스파 케어",
    image: "/program6.jpg",
    basic: {
      title: "컨디션 회복",
      description: "쌓인 피로와 긴장을 풀어 몸의 기본 순환과 움직임을 편하게 만드는 프로그램",
      price: "180,000",
      time: "70분",
      type: "베이직"
    },
    advanced: [
      { 
        title: "체형·순환 밸런스 회복", 
        description: "무너진 체형과 순환 불균형을 집중적으로 정돈해 부종과 라인을 함께 개선하는 프로그램",
        priceInfo: { time: "90분", type: "솔루션", price: "240,000" }
      },
      { 
        title: "구조·라인 집중 회복", 
        description: "흉곽·코어·골반까지 구조를 바로잡아 몸의 부피와 라인을 집중적으로 변화시키는 프로그램",
        priceInfo: { time: "120분", type: "인텐스", price: "300,000" }
      }
    ],
    advancedPricing: []
  },
  {
    id: "addon",
    title: "출산맘 Program+++",
    description: "출산 후 특별히 관리가 필요한 부위를 위한 집중 추가 프로그램",
    image: "/program7.jpg",
    isAddon: true,
    advanced: [
      { title: "흉곽 관리", description: "벌어진 흉곽을 안정적으로 모아 상체 라인을 정돈하고 부피를 줄여주는 프로그램" },
      { title: "복부 관리", description: "약해진 복부 중심을 잡아 몸의 축을 세우고 슬림한 복부 라인을 만드는 프로그램" },
      { title: "골반 관리", description: "출산 후 벌어진 골반을 안정적으로 정돈해 하체 균형과 라인을 회복하는 프로그램" }
    ],
    advancedPricing: [
      { time: "30분 추가", type: "+++", price: "100,000" }
    ]
  }
];

const featuredPrograms = [
  {
    id: 1,
    category: "PREPARATION",
    title: "준비맘 PROGRAM",
    duration: "70분",
    details: ["수기 관리 회복", "차갑고 긴장된 몸을 부드럽게 풀어 순환이 편안하게 이어지도록 돕는 수기 회복 프로그램"],
    originalPrice: "180,000",
    discountPrice: "180,000",
    discountRate: "베이직",
    image: "/program1.jpg",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 2,
    category: "PRENATAL",
    title: "예비맘 PROGRAM",
    duration: "70분",
    details: ["수기 관리 회복", "임신 전 몸의 순환과 균형을 부드럽게 정돈해 준비된 몸 상태를 만드는 수기 회복 프로그램"],
    originalPrice: "180,000",
    discountPrice: "180,000",
    discountRate: "베이직",
    image: "/program2.jpg",
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 3,
    category: "POSTPARTUM",
    title: "출산맘 PROGRAM",
    duration: "70분",
    details: ["수기 관리 회복", "출산 후 약해진 관절과 전신의 긴장을 풀어 움직임을 편하게 만드는 수기 회복 프로그램"],
    originalPrice: "180,000",
    discountPrice: "180,000",
    discountRate: "베이직",
    image: "/program3.jpg",
    icon: <Flower2 className="w-6 h-6" />
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
          
          <div className="flex items-center gap-4 md:gap-6">
            <a href="https://naver.me/5BwIqWV7" target="_blank" rel="noreferrer" className={`text-[11px] font-medium tracking-widest uppercase border px-4 md:px-6 py-2 rounded-full transition-colors ${!isScrolled && isHome ? "text-white border-white/20 hover:bg-white hover:text-brand-ink" : "text-brand-ink border-brand-ink/20 hover:bg-brand-ink hover:text-brand-beige"}`}>
              예약하기
            </a>
            <button className={`md:hidden ${!isScrolled && isHome ? "text-white" : "text-brand-ink"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
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
            <p className="mb-8">Premium Maternity Wellness Center</p>
            <div className="flex flex-col gap-2 normal-case tracking-normal text-xs text-brand-beige/50">
              <p className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1">
                <span><strong className="font-medium text-brand-beige/70">대표자</strong> 이진희</span>
                <span className="hidden md:inline text-brand-beige/20">|</span>
                <span><strong className="font-medium text-brand-beige/70">사업자등록번호</strong> 202-30-04889</span>
              </p>
              <p className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1">
                <span><strong className="font-medium text-brand-beige/70">주소</strong> 서울 강남구 봉은사로24길 8 3층</span>
              </p>
              <p className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1">
                <span><strong className="font-medium text-brand-beige/70">전화번호</strong> 02-566-1279</span>
                <span className="hidden md:inline text-brand-beige/20">|</span>
                <span><strong className="font-medium text-brand-beige/70">이메일</strong> hesslab2025@gmail.com</span>
              </p>
            </div>
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
              <a href="https://www.instagram.com/thelife.therapy" target="_blank" rel="noopener noreferrer" className="hover:text-brand-beige">Instagram</a>
              <a href="https://youtube.com/@thelife_therapy?si=xHi0NsV59SN7DS4K" target="_blank" rel="noopener noreferrer" className="hover:text-brand-beige">YouTube</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2026 HESS LAB. All Rights Reserved.</p>
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
            src="/main1.jpg" 
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
            헤스랩(Hess Lab)은 임신과 출산이라는 경이로운 여정을 걷는 여성들을 위한 프리미엄 산전·산후 전문 스파입니다.<br />
            단순한 관리를 넘어, 생명의 탄생을 준비하고 회복하는 모든 과정에서 최상의 웰니스를 경험하실 수 있도록 설계되었습니다.<br /><br />
            또한 헤스랩은 일반인의 일상 회복까지, 몸의 구조와 기능을 바탕으로 회복을 설계하는 전문 센터입니다.
            구조·순환·기능을 기준으로 재현 가능한 회복을 제공하며, 컨디션의 회복을 통해 일상의 균형을 되찾는 변화를 만들어 갑니다.
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
            {featuredPrograms.slice(0, 3).map((program, idx) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-ink/20"></div>
                </div>
                <h3 className="text-xl font-serif mb-2">{program.title}</h3>
                <h4 className="text-lg font-bold text-brand-ink mb-2">{program.details[0]}</h4>
                <p className="text-sm text-brand-muted mb-4 line-clamp-2">{program.details[1]}</p>
                <div className="flex justify-between items-center pt-4 border-t border-brand-ink/5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-xl bg-brand-gold/10 text-brand-gold px-2 py-1 rounded-sm font-bold w-14 md:w-auto text-center">{program.duration}</span>
                    <span className="text-sm md:text-xl font-bold text-brand-gold">{program.discountRate}</span>
                  </div>
                  <span className="text-sm md:text-xl font-bold text-brand-ink text-right">{program.originalPrice}원</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-40 relative overflow-hidden bg-brand-ink text-brand-beige">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1544161515-436cefb657f8?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Background"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-light tracking-wide leading-relaxed">
                이미 다 해봤는데도, 아직 해결되지 않았다면<br />
                <span className="font-serif italic text-brand-gold">마지막은 헤스랩입니다.</span>
              </p>
            </div>
            
            <div className="w-12 h-[1px] bg-brand-gold/50 mx-auto"></div>

            <h3 className="text-3xl md:text-5xl font-serif leading-tight break-keep">
              “몸이 정말 달라졌다고 말할 수 있을 때까지,<br />
              우리는 당신 곁에 남아 있습니다.”
            </h3>
          </motion.div>
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
              헤스랩(Hess Lab)은 임신과 출산이라는 경이로운 여정을 걷는<br />
              여성들을 위한 프리미엄 산전·산후 전문 스파입니다.<br />
              단순한 관리를 넘어, 생명의 탄생을 준비하고 회복하는 모든 과정에서 최상의 웰니스를 경험하실 수 있도록 설계되었습니다.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8 max-w-md">
              또한 헤스랩은 일반인의 일상 회복까지, 몸의 구조와 기능을 바탕으로 회복을 설계하는 전문 센터입니다.<br /><br />
              단순한 이완이나 일시적인 시원함에 그치지 않고, 구조·순환·기능을 기준으로 재현 가능한 회복을 제공합니다.<br /><br />
              표준화된 프로그램을 통해 누구에게나 적용 가능한 회복의 기준을 제안합니다.<br /><br />
              헤스랩은 컨디션의 회복을 통해 일상의 균형을 되찾는 변화를 만들어 갑니다.
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

      {/* Founder Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div 
              {...fadeInUp}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="/about1.jpg" 
                alt="Founder 이진희" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div {...fadeInUp} className="space-y-12">
              <div>
                <span className="text-brand-gold text-base tracking-[0.3em] uppercase mb-4 block">Founder | 대표 소개</span>
                <h2 className="text-4xl font-serif mb-8 text-brand-ink">이진희 대표</h2>
                <p className="text-brand-muted leading-relaxed break-keep">
                  헤스랩은 임신·출산 여성의 회복에서 시작되었습니다.<br />
                  대표 이진희는 13년 이상의 현장 경험과 1만 명 이상의 임산부 테라피 데이터를 바탕으로, 몸의 구조와 기능을 기준으로 한 회복 시스템 표준화를 구축해왔습니다.<br /><br />
                  현재, 국내 대형병원과 산후조리원에서의 임상 경험, 그리고 통합의학 연구를 기반으로 누구에게나 재현 가능한 회복의 기준을 만들어가고 있습니다.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-base tracking-[0.2em] uppercase text-brand-gold font-bold mb-4 border-b border-brand-gold/20 pb-2">EDUCATION & RESEARCH</h3>
                  <ul className="text-base text-brand-muted space-y-2 break-keep">
                    <li>차의과학대학교 통합의학대학원 통합의학과 석사</li>
                    <li>‘산전마사지 중재가 고령 임신부의 체성분 및 부종에 미치는 영향’ 연구 발표</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base tracking-[0.2em] uppercase text-brand-gold font-bold mb-4 border-b border-brand-gold/20 pb-2">CAREER</h3>
                  <ul className="text-base text-brand-muted space-y-2 break-keep">
                    <li>(현) 헤스랩 회복센터 대표</li>
                    <li>(현) 국제산후조리협회장</li>
                    <li>(현) 임신·출산 여성들의 플랫폼 ‘헤스몰’ 운영</li>
                    <li>(현) 임산부신생아관리전문가 - 민간자격증발급처</li>
                    <li>(전) 일산차병원, 동탄제일병원, 곽생로 산후조리원 스파실장</li>
                    <li>(전) 알롱제 미용간호학원 임산부관리전문 강사</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-40 relative overflow-hidden bg-brand-beige text-center">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-light tracking-wide leading-relaxed text-brand-muted">
                이미 다 해봤는데도, 아직 해결되지 않았다면<br />
                <span className="font-serif italic text-brand-gold">마지막은 헤스랩입니다.</span>
              </p>
            </div>
            
            <div className="w-12 h-[1px] bg-brand-gold/50 mx-auto"></div>

            <h3 className="text-3xl md:text-5xl font-serif leading-tight text-brand-ink break-keep">
              “몸이 정말 달라졌다고 말할 수 있을 때까지,<br />
              우리는 당신 곁에 남아 있습니다.”
            </h3>
          </motion.div>
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

          <div className="space-y-24">
            {programCategories.map((category, idx) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group bg-brand-beige/20 rounded-3xl overflow-hidden border border-brand-ink/5 hover:border-brand-gold/20 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative aspect-square md:aspect-auto">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-brand-ink/30 transition-colors duration-500"></div>
                  </div>
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                      <h3 className="text-3xl font-serif mb-4 group-hover:text-brand-gold transition-colors">{category.title}</h3>
                      <p className="text-brand-muted">{category.description}</p>
                    </div>

                    {!category.isAddon && category.basic && (
                      <div className="mb-8 bg-white p-6 rounded-2xl border border-brand-ink/5">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-brand-ink">{category.basic.title}</h4>
                        </div>
                        <p className="text-sm text-brand-muted mb-4">{category.basic.description}</p>
                        <div className="flex justify-between items-center pt-4 border-t border-brand-ink/5">
                          <div className="flex items-center gap-2">
                            <span className="text-sm md:text-xl bg-brand-gold/10 text-brand-gold px-2 py-1 rounded-sm font-bold w-14 md:w-auto text-center">{category.basic.time}</span>
                            <span className="text-sm md:text-xl font-bold text-brand-gold">{category.basic.type}</span>
                          </div>
                          <span className="text-sm md:text-xl font-bold text-brand-ink text-right">{category.basic.price}원</span>
                        </div>
                      </div>
                    )}

                    <div className="bg-white p-6 rounded-2xl border border-brand-ink/5">
                      <h4 className="text-lg font-bold text-brand-ink mb-4">{category.isAddon ? "추가 프로그램" : "심화 프로그램"}</h4>
                      <ul className="space-y-4 mb-6">
                        {category.advanced.map((adv, i) => (
                          <li key={i} className="flex flex-col">
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0"></div>
                              <div className="flex-1">
                                <span className="block font-bold text-brand-ink text-sm mb-1">{adv.title}</span>
                                <span className="block text-sm text-brand-muted">{adv.description}</span>
                              </div>
                            </div>
                            {adv.priceInfo && (
                              <div className="flex justify-between items-center pt-4 border-t border-brand-ink/5 mt-4">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm md:text-xl bg-brand-gold/10 text-brand-gold px-2 py-1 rounded-sm font-bold w-14 md:w-auto text-center">{adv.priceInfo.time}</span>
                                  <span className="text-sm md:text-xl font-bold text-brand-gold">{adv.priceInfo.type}</span>
                                </div>
                                <span className="text-sm md:text-xl font-bold text-brand-ink text-right">{adv.priceInfo.price}원</span>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                      {category.advancedPricing && category.advancedPricing.length > 0 && (
                        <div className="pt-4 border-t border-brand-ink/5 space-y-2">
                          {category.advancedPricing.map((price, i) => (
                            <div key={i} className="flex flex-col">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm md:text-xl bg-brand-gold/10 text-brand-gold px-2 py-1 rounded-sm font-bold w-14 md:w-auto text-center">{price.time}</span>
                                  <span className="text-sm md:text-xl font-bold text-brand-gold">{price.type}</span>
                                </div>
                                <span className="text-sm md:text-xl font-bold text-brand-ink text-right">{price.price}원</span>
                              </div>
                              {(price.type === "인텐스" || price.type === "+++") && (
                                <span className="text-[10px] text-brand-muted text-right mt-1">*컨디션별 1가지 솔루션 맞춤 관리</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
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
      hours: "10:00 - 18:00",
      phone: "02-566-1279",
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
            <div className="absolute top-2 right-2 z-10">
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

const prenatalSchedule = [
  {
    date: "3/30",
    day: "mon",
    title: "부종과 체중 증가 STOP!",
    details: [
      "20주라면 만삭까지 10KG증가 작전!",
      "이미 15KG이상 증가했다면 증가 중지 작전"
    ]
  },
  {
    date: "3/31",
    day: "tue",
    title: "통증과 체형 변화 STOP!",
    details: [
      "환도, 꼬리뼈, 치골, 허리, 고관절"
    ]
  },
  {
    date: "4/1",
    day: "wed",
    title: "피부 변화와 면역력의 관계",
    details: [
      "튼살, 색소침착, 임신선, 기미, 쥐젖 관리법",
      "가려움, 소양증 대처법"
    ]
  },
  {
    date: "4/2",
    day: "thu",
    title: "출산 후 관리법",
    details: [
      "출산직후 ~ 6주간의 관리법",
      "산후후유증 예방 및 대처법"
    ]
  },
  {
    date: "4/4",
    day: "sat",
    title: "남편이 해주는 관리",
    details: [
      "부종과 통증, 불면 개선",
      "신체 포인트별 관리 테크닉"
    ]
  }
];

function AcademyPage() {
  const [activeTab, setActiveTab] = useState<'prenatal' | 'professional'>('prenatal');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-center gap-8 border-b border-brand-ink/10">
        <button
          onClick={() => setActiveTab('prenatal')}
          className={`pb-4 text-sm tracking-widest uppercase font-bold transition-colors relative ${
            activeTab === 'prenatal' ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-ink'
          }`}
        >
          Prenatal Class
          {activeTab === 'prenatal' && (
            <motion.div layoutId="academyTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('professional')}
          className={`pb-4 text-sm tracking-widest uppercase font-bold transition-colors relative ${
            activeTab === 'professional' ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-ink'
          }`}
        >
          Professional Training
          {activeTab === 'professional' && (
            <motion.div layoutId="academyTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
          )}
        </button>
      </div>

      {activeTab === 'professional' ? (
        <>
          {/* Hero Section */}
          <section className="py-24 bg-brand-beige/30">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <img 
                  src="/professional_training1.jpg" 
                  alt="Professional Training" 
                  className="rounded-3xl shadow-xl w-full h-[400px] md:h-[500px] object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 md:order-2 text-center md:text-left"
              >
                <span className="text-brand-gold text-[13px] tracking-[0.3em] uppercase mb-6 block font-bold">ACADEMY</span>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-ink mb-8 leading-tight">
                  HESS LAB Academy
                </h2>
                <div className="text-brand-muted leading-relaxed mb-12 break-keep space-y-4">
                  <p>
                    헤스랩 아카데미는 산전·산후 관리의 새로운 기준을 제시하는 전문 테라피스트 양성 기관입니다.
                  </p>
                  <p>
                    수많은 산모님들을 케어하며 쌓아온 헤스랩만의 독자적인 테라피 기술과 철학을 바탕으로, 체계적이고 실무 중심적인 커리큘럼을 제공합니다. 여성의 신체 변화에 대한 깊은 이해와 전문적인 케어 노하우를 전수하여 최고의 프리미엄 테라피스트를 육성합니다.
                  </p>
                </div>
                <div className="h-[1px] bg-brand-ink/10 w-24 mx-auto md:mx-0"></div>
              </motion.div>
            </div>
          </section>

          {/* Inquiry Section */}
          <section className="py-32 bg-brand-ink text-brand-beige">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                  아카데미 교육 문의
                </h2>
                <p className="text-brand-beige/60 leading-relaxed mb-12 break-keep">
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
                      <p className="text-lg font-serif">hesslab2025@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-brand-beige/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Phone</p>
                      <p className="text-lg font-serif">02-566-1279</p>
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
        </>
      ) : (
        <section className="py-24 bg-brand-beige/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-brand-gold text-[13px] tracking-[0.3em] uppercase mb-4 block font-bold">Prenatal Class</span>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-ink mb-4 leading-tight">
                  '진짜맘카페' 산모교실
                </h2>
                <p className="text-brand-muted text-lg mb-12">by 헤스랩 회복센터</p>

                <div className="text-brand-ink/80 leading-relaxed space-y-6 break-keep">
                  <p>
                    임신과 출산은 여성의 몸에 가장 경이롭고도 급격한 변화를 가져오는 시기입니다. 하지만 체중 증가, 통증, 피부 변화 등 낯선 신체 변화로 인해 막연한 불안감과 불편함을 겪는 산모님들이 많습니다.
                  </p>
                  <p>
                    헤스랩 회복센터는 수많은 산모님들을 케어해 온 전문적인 노하우를 바탕으로, 임신 기간 동안 겪게 되는 신체 변화의 원인을 정확히 이해하고 현명하게 대처할 수 있는 실질적인 솔루션을 제공하고자 <strong className="text-brand-gold font-medium">'진짜맘카페' 산모교실</strong>을 준비했습니다.
                  </p>
                  <p>
                    단순한 이론 교육을 넘어, 집에서도 쉽게 따라 할 수 있는 홈케어 관리법과 남편과 함께하는 관리 테크닉까지. 건강한 임신 기간과 행복한 출산, 그리고 완벽한 산후 회복을 위한 헤스랩만의 특별한 노하우를 만나보세요.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img 
                  src="/prenatal_class1.jpg" 
                  alt="Prenatal Class" 
                  className="rounded-3xl shadow-xl w-full h-[400px] md:h-[600px] object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-ink/5">
              <div className="bg-brand-ink text-brand-beige py-4 text-center font-serif text-xl">
                클래스 주제
              </div>
              <div className="p-8 md:p-12">
                <div className="space-y-8">
                  {prenatalSchedule.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="pb-8 border-b border-brand-ink/10 last:border-0 last:pb-0"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-brand-ink mb-4">{item.title}</h3>
                        <ul className="space-y-2">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-brand-muted">
                              <span className="text-brand-gold mt-1.5 text-[10px]">●</span>
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 pt-12 border-t border-brand-ink/10 text-center">
                  <p className="text-brand-muted mb-6">자세한 일정은 인스타그램에서 확인해 주세요.</p>
                  <a 
                    href="https://www.instagram.com/thelife.therapy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-ink text-brand-beige px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-brand-gold transition-colors duration-300"
                  >
                    Instagram 가기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
}

function EventPage() {
  const [activeTab, setActiveTab] = useState<'taejeon' | 'siheung'>('taejeon');

  const tabImages = {
    taejeon: {
      representative: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
      body: "/program6.jpg",
      head: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop",
      face: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
      prenatal: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
      growth: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=2069&auto=format&fit=crop"
    },
    siheung: {
      representative: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
      body: "/program6.jpg",
      head: "https://images.unsplash.com/photo-1544161515-436cefb657f8?q=80&w=2070&auto=format&fit=crop",
      face: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2070&auto=format&fit=crop",
      prenatal: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
      growth: "https://images.unsplash.com/photo-1502086223501-7ea244394582?q=80&w=2032&auto=format&fit=crop"
    }
  };

  const currentImages = tabImages[activeTab];

  const content = (
    <div className="max-w-4xl mx-auto">
      {/* Intro Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-serif mb-6">“내 몸에 필요한 회복을 찾는 곳”</h3>
        <p className="text-brand-gold tracking-[0.2em] font-medium mb-4">바디스파 · 헤드스파 · 페이스관리 · 산전산후</p>
        <p className="text-brand-muted leading-relaxed">
          일반 여성부터 남성, <br />
          임신과 출산 시기의 몸까지 <br />
          편안하게 받을 수 있는 헤스랩
        </p>
      </motion.div>

      {/* Representative Image */}
      <motion.div 
        key={`rep-${activeTab}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-24"
      >
        <img 
          src={currentImages.representative} 
          alt="Hess Lab Representative" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-ink/10"></div>
      </motion.div>

      {/* Selection Section */}
      <div className="mb-32">
        <h4 className="text-xl font-serif text-center mb-12">지금 내 몸에 맞는 관리를 선택해보세요</h4>
        <div className="grid gap-12">
          {[
            {
              title: "1) 바디스파",
              desc: "붓기, 피로, 순환, 뭉침 완화를 위한 전신 중심 테라피",
              img: currentImages.body
            },
            {
              title: "2) 헤드스파",
              desc: "두피 답답함과 목 주변 긴장을 편안하게 풀어주는 헤드 케어",
              img: currentImages.head
            },
            {
              title: "3) 페이스관리",
              desc: "얼굴 붓기와 피부 컨디션을 고려한 섬세한 페이스 케어",
              img: currentImages.face
            },
            {
              title: "4) 산전산후",
              desc: "임신과 출산으로 달라진 몸의 흐름을 고려한 전문 회복 관리",
              img: currentImages.prenatal
            },
            {
              title: "5) 성장판 케어",
              desc: "성장하는 아이들의 성장판을 위한 케어",
              img: currentImages.growth
            }
          ].map((item, idx) => (
            <motion.div 
              key={`${activeTab}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-4 items-center text-center"
            >
              <div className="max-w-2xl">
                <h5 className="text-xl font-bold text-brand-ink mb-2">{item.title}</h5>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHY HESSLAB Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-brand-beige/50 rounded-[40px] p-12 md:p-20 text-center mb-24"
      >
        <span className="text-brand-gold text-[11px] tracking-[0.3em] uppercase mb-6 block">WHY HESSLAB</span>
        <div className="max-w-2xl mx-auto space-y-6 text-brand-ink leading-relaxed mb-12">
          <p>
            헤스랩은 잠깐의 시원함보다 <br />
            몸의 순환, 긴장, 붓기, 컨디션을 함께 보며 <br />
            지금 필요한 방향의 관리를 제안합니다.
          </p>
          <p>
            바디, 헤드, 페이스, 산전산후, 성장판까지 <br />
            한 사람의 몸 상태에 맞춰 <br />
            편안한 회복을 돕습니다.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm font-medium">
          <div className="flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
            <span>몸 상태에 맞춘 관리</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
            <span>바디부터 산전산후까지 폭넓은 케어</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
            <span>편안함 그 이상을 생각하는 테라피</span>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center pb-24"
      >
        <p className="text-brand-muted mb-8">지금 내 몸에 필요한 관리가 궁금하다면 편하게 문의해 주세요</p>
        <a 
          href="https://naver.me/5BwIqWV7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-brand-ink text-brand-beige px-10 py-5 rounded-full text-sm tracking-widest uppercase hover:bg-brand-gold transition-all duration-300 shadow-xl"
        >
          문의 및 예약하기
        </a>
      </motion.div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">Event</h2>
        
        {/* Tabs */}
        <div className="flex justify-center gap-8 border-b border-brand-ink/10 mb-16">
          <button
            onClick={() => setActiveTab('taejeon')}
            className={`pb-4 text-sm tracking-widest uppercase font-bold transition-colors relative ${
              activeTab === 'taejeon' ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-ink'
            }`}
          >
            태전점
            {activeTab === 'taejeon' && (
              <motion.div layoutId="eventTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('siheung')}
            className={`pb-4 text-sm tracking-widest uppercase font-bold transition-colors relative ${
              activeTab === 'siheung' ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-ink'
            }`}
          >
            시흥점
            {activeTab === 'siheung' && (
              <motion.div layoutId="eventTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
            )}
          </button>
        </div>

        {/* Content */}
        {content}
      </div>
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
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/event" element={<EventPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
