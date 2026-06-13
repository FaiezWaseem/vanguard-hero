import { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7 bg-black/80 backdrop-blur-md border-b border-white/10">
        {/* Brand */}
        <div className="font-podium text-2xl sm:text-3xl tracking-wider text-white uppercase">VANGUARD</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Projects', 'Studio', 'Offerings', 'Inquire'].map((link) => (
            <a
              key={link}
              href="#"
              className="font-inter text-sm text-white/80 hover:text-white tracking-widest uppercase transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/10 px-6 py-3 text-xs tracking-widest uppercase text-white transition-all duration-300 group"
        >
          GET IN TOUCH
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-end gap-1.5"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-4 h-0.5 bg-white"></div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm md:hidden menu-overlay flex flex-col ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5 lg:py-7 border-b border-white/10">
          <div className="font-podium text-2xl sm:text-3xl tracking-wider text-white uppercase">VANGUARD</div>
          <button onClick={closeMenu} className="text-white">
            <X size={28} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 text-center space-y-8">
          {['Projects', 'Studio', 'Offerings', 'Inquire'].map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={closeMenu}
              className="font-podium text-4xl sm:text-5xl text-white uppercase tracking-tight hover:text-white/80 transition-colors"
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              {link}
            </a>
          ))}

          <a
            href="#"
            onClick={closeMenu}
            className="mt-12 border border-white/30 hover:border-white/60 hover:bg-white/10 px-8 py-4 text-sm tracking-widest uppercase text-white transition-all duration-300 inline-flex items-center gap-2"
            style={{
              transitionDelay: '500ms',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            GET IN TOUCH
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative h-screen flex items-center justify-center pt-20">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6 lg:mb-8 animate-fade-up">
            <Crown className="w-4 h-4 text-white/70" />
            <p className="font-inter text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase">WORLD-CLASS DIGITAL COLLECTIVE</p>
          </div>

          {/* Main Heading */}
          <div className="font-podium text-white uppercase leading-[0.92] tracking-tight animate-fade-up-delay-1">
            <div className="text-[clamp(2.8rem,8vw,7rem)]">Design.</div>
            <div className="text-[clamp(2.8rem,8vw,7rem)]">Disrupt.</div>
            <div className="text-[clamp(2.8rem,8vw,7rem)]">Conquer.</div>
          </div>

          {/* Subtext */}
          <p className="mt-6 lg:mt-8 max-w-md text-white/70 text-sm sm:text-base font-inter leading-relaxed animate-fade-up-delay-2">
            We build fierce brand identities that don&apos;t just turn heads — <span className="font-semibold text-white">they lead.</span>
          </p>

          {/* CTA Row */}
          <div className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-up-delay-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-900 border border-white/20 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase text-white transition-all duration-300"
            >
              SEE OUR WORK
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="hidden sm:flex items-center gap-3">
              <Award className="w-8 h-8 text-white/50" />
              <div>
                <div className="text-white/60 text-xs tracking-wider uppercase">Top-Rated</div>
                <div className="text-white/60 text-xs tracking-wider uppercase">Brand Studio</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16 animate-fade-up-delay-4">
            <div>
              <div className="font-inter text-2xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">250+</div>
              <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Brands Transformed</div>
            </div>
            <div>
              <div className="font-inter text-2xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">95%</div>
              <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Client Retention</div>
            </div>
            <div>
              <div className="font-inter text-2xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">10+</div>
              <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Years in the Game</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;