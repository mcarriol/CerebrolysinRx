/* CerebrolysinRx — Shared Navbar
   Matches mitochondrial-rx Navbar design exactly.
   Context-aware routing:
   - On "/" (main page): anchor links scroll within the page
   - On "/peptides": anchor links become "/#anchor" to navigate back + scroll
*/
import { useState, useEffect } from "react";

const DM = "'DM Sans', system-ui, sans-serif";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect if we're on the peptides page
  const onPeptidesPage = typeof window !== "undefined" && window.location.pathname === "/peptides";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Build href: if on peptides page, prefix anchor links with "/"
  const href = (anchor: string) => onPeptidesPage ? `/${anchor}` : anchor;

  const navLinks = [
    { label: "The Problem", anchor: "#problem" },
    { label: "Mechanism",   anchor: "#mechanism" },
    { label: "Research",    anchor: "#research" },
    { label: "Pricing",     anchor: "#pricing" },
    { label: "FAQ",         anchor: "#faq" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "clamp(14px,2.5vw,20px) clamp(16px,4vw,40px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease",
          background: scrolled || menuOpen ? "rgba(13,13,13,0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
            <path d="M24 4 L6 40 L14 40 L24 20 L34 40 L42 40 Z" fill="#C9A96E" />
            <line x1="12" y1="28" x2="36" y2="28" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="24" y1="20" x2="24" y2="44" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div style={{ lineHeight: 1 }}>
            <span style={{
              display: "block",
              fontFamily: DM,
              fontWeight: 600,
              fontSize: "0.9375rem",
              letterSpacing: "0.1em",
              color: "#F5F0E8",
              textTransform: "uppercase",
            }}>
              Cerebrolysin<span style={{ color: "#D2521A" }}>Rx</span>
            </span>
            <span style={{
              display: "block",
              fontFamily: DM,
              fontWeight: 300,
              fontSize: "0.5625rem",
              letterSpacing: "0.12em",
              color: "#8C7B6B",
              textTransform: "uppercase",
              marginTop: 2,
            }}>Aurelius Health Group</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }} className="hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={href(link.anchor)}
                style={{
                  fontFamily: DM,
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  color: "rgba(245,240,232,0.72)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.72)")}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Discover Peptides — gold pill */}
          <li>
            <a
              href="/peptides"
              style={{
                fontFamily: DM,
                fontSize: "0.875rem",
                fontWeight: 500,
                color: onPeptidesPage ? "#F5F0E8" : "#C9A96E",
                textDecoration: "none",
                transition: "color 0.2s, background 0.2s",
                border: "1px solid rgba(201,169,110,0.3)",
                borderRadius: 5,
                padding: "5px 12px",
                background: onPeptidesPage ? "rgba(201,169,110,0.15)" : "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F5F0E8";
                e.currentTarget.style.background = "rgba(201,169,110,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = onPeptidesPage ? "#F5F0E8" : "#C9A96E";
                e.currentTarget.style.background = onPeptidesPage ? "rgba(201,169,110,0.15)" : "transparent";
              }}
            >
              Discover Peptides
            </a>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden md:flex">
          <a href={href("#quiz")} className="btn-ghost-cream" style={{ padding: "10px 20px", fontSize: "0.875rem" }}>
            Check Eligibility
          </a>
          <a href={href("#quiz")} className="btn-gold" style={{ padding: "10px 20px", fontSize: "0.875rem" }}>
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span style={{
            display: "block",
            width: 24,
            height: 1.5,
            background: "#F5F0E8",
            borderRadius: 2,
            transition: "transform 0.25s, opacity 0.25s",
            transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
          }} />
          <span style={{
            display: "block",
            width: 24,
            height: 1.5,
            background: "#F5F0E8",
            borderRadius: 2,
            transition: "opacity 0.25s",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block",
            width: 24,
            height: 1.5,
            background: "#F5F0E8",
            borderRadius: 2,
            transition: "transform 0.25s, opacity 0.25s",
            transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* Mobile Menu — full screen overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: "clamp(56px,10vw,70px)",
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(13,13,13,0.98)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "32px 24px 40px",
          borderTop: "1px solid rgba(201,169,110,0.12)",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          zIndex: 99,
          overflowY: "auto",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={href(link.anchor)}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: DM,
                fontSize: "1.125rem",
                fontWeight: 400,
                color: "rgba(245,240,232,0.8)",
                textDecoration: "none",
                padding: "16px 0",
                borderBottom: "1px solid rgba(245,240,232,0.06)",
                display: "block",
              }}
            >
              {link.label}
            </a>
          ))}
          {/* Discover Peptides mobile link */}
          <a
            href="/peptides"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: DM,
              fontSize: "1.125rem",
              fontWeight: 500,
              color: "#C9A96E",
              textDecoration: "none",
              padding: "16px 0",
              borderBottom: "1px solid rgba(245,240,232,0.06)",
              display: "block",
            }}
          >
            Discover Peptides
          </a>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 32 }}>
            <a href={href("#quiz")} onClick={() => setMenuOpen(false)} className="btn-ghost-cream" style={{ justifyContent: "center", textAlign: "center" }}>
              Check Eligibility
            </a>
            <a href={href("#quiz")} onClick={() => setMenuOpen(false)} className="btn-gold" style={{ justifyContent: "center", textAlign: "center" }}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
