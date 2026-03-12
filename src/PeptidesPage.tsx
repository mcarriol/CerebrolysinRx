/*
  Discover Peptides — Full Page
  Design: matches mitochondrial-rx /peptides page
  Dark theme (#0D0D0D), DM Sans, gold accents (#C9A96E)
*/
import { useState } from "react";
import Navbar from "./Navbar";

const DM = "'DM Sans', system-ui, sans-serif";

const s = {
  label:  { fontFamily: DM, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#C9A96E" },
  h1:     { fontFamily: DM, fontWeight: 300, fontSize: "clamp(2.75rem,6vw,5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#F5F0E8" },
  h2dk:   { fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#F5F0E8" },
  h3dk:   { fontFamily: DM, fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.3, letterSpacing: "-0.01em", color: "#F5F0E8" },
  bodyLt: { fontFamily: DM, fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.65, color: "rgba(245,240,232,0.62)" },
};

/* ── All 16 peptide protocols ── */
const allPeptides = [
  {
    name: "Cerebrolysin",
    category: "COGNITIVE",
    tag: "Neuroprotection",
    desc: "A porcine brain-derived peptide preparation containing low molecular weight neuropeptides that mimic BDNF and NGF. Supported by Phase 3 RCT data for Alzheimer's disease and cognitive decline.",
    features: ["BDNF / NGF mimicry", "Neuroplasticity", "Phase 3 RCT data", "Amyloid reduction"],
  },
  {
    name: "BPC-157",
    category: "RECOVERY",
    tag: "Tissue Repair",
    desc: "A gastric pentadecapeptide that accelerates healing of tendons, ligaments, muscles, and gut mucosa. Activates growth hormone receptors and promotes angiogenesis at injury sites.",
    features: ["Tendon & ligament repair", "Gut mucosal healing", "Angiogenesis promotion", "Anti-inflammatory"],
  },
  {
    name: "Thymosin Alpha-1",
    category: "IMMUNITY",
    tag: "Immune Modulation",
    desc: "A naturally occurring peptide derived from the thymus gland that modulates innate and adaptive immune responses. Used clinically in over 35 countries for immune deficiency and chronic infections.",
    features: ["T-cell activation", "Innate immune support", "Antiviral properties", "Anti-inflammatory"],
  },
  {
    name: "AOD-9604",
    category: "BODY COMPOSITION",
    tag: "Fat Metabolism",
    desc: "A modified fragment of human growth hormone (hGH 176–191) that stimulates lipolysis and inhibits lipogenesis without the side effects of full hGH. Targets adipose tissue directly.",
    features: ["Lipolysis stimulation", "Lipogenesis inhibition", "No insulin resistance", "Cartilage repair"],
  },
  {
    name: "CJC-1295",
    category: "GROWTH HORMONE",
    tag: "GH Axis",
    desc: "A synthetic analogue of growth hormone-releasing hormone (GHRH) with an extended half-life due to drug affinity complex (DAC) technology. Produces sustained elevation of GH and IGF-1 levels.",
    features: ["Sustained GH elevation", "IGF-1 increase", "Muscle mass support", "Fat reduction"],
  },
  {
    name: "Epitalon",
    category: "ANTI-AGING",
    tag: "Longevity",
    desc: "A tetrapeptide derived from the pineal gland that activates telomerase and elongates telomeres — the protective caps on chromosomes that shorten with age.",
    features: ["Telomerase activation", "Telomere elongation", "Circadian regulation", "Antioxidant effects"],
  },
  {
    name: "Semax",
    category: "NOOTROPIC",
    tag: "Cognitive Enhancement",
    desc: "A synthetic analogue of ACTH (4–7) developed in Russia that upregulates BDNF and NGF expression in the brain. Clinically used for stroke recovery, cognitive decline, and neuroprotection.",
    features: ["BDNF upregulation", "Neuroprotection", "Focus & memory", "Anxiety reduction"],
  },
  {
    name: "Kisspeptin-10",
    category: "ENDOCRINE",
    tag: "Hormonal Health",
    desc: "A neuropeptide that acts as a master regulator of the hypothalamic-pituitary-gonadal (HPG) axis, stimulating LH and FSH release. Used to restore hormonal balance and support reproductive health.",
    features: ["LH & FSH stimulation", "Testosterone support", "HPG axis regulation", "Fertility support"],
  },
  {
    name: "SS-31",
    category: "CELLULAR HEALTH",
    tag: "Mitochondrial Protection",
    desc: "A mitochondria-targeted antioxidant peptide that selectively concentrates in the inner mitochondrial membrane, reducing oxidative stress and preserving ATP synthesis.",
    features: ["Mitochondrial targeting", "ROS reduction", "ATP preservation", "Cardioprotection"],
  },
  {
    name: "Tesamorelin",
    category: "METABOLIC",
    tag: "Visceral Fat",
    desc: "An FDA-studied GHRH analogue with Phase 3 RCT data demonstrating significant reduction in visceral adipose tissue. The only peptide with robust human clinical trial evidence for abdominal fat reduction.",
    features: ["Visceral fat reduction", "Phase 3 RCT data", "IGF-1 normalization", "Metabolic improvement"],
  },
  {
    name: "Ipamorelin",
    category: "GROWTH HORMONE",
    tag: "GH Secretion",
    desc: "A selective growth hormone secretagogue that stimulates your pituitary's own GH pulse without cortisol or ACTH elevation. Supports body composition, recovery, sleep quality, and metabolic health.",
    features: ["Selective GH release", "No cortisol elevation", "Sleep quality", "Body composition"],
  },
  {
    name: "Argireline",
    category: "AESTHETICS",
    tag: "Skin & Aesthetics",
    desc: "A hexapeptide (Acetyl Hexapeptide-3) that inhibits neurotransmitter release at the neuromuscular junction, reducing the appearance of expression lines. A topical alternative to botulinum toxin.",
    features: ["Expression line reduction", "Neurotransmitter inhibition", "Topical application", "Collagen support"],
  },
  {
    name: "Selank",
    category: "NOOTROPIC",
    tag: "Anxiolytic",
    desc: "A synthetic analogue of the endogenous immunomodulatory peptide tuftsin, developed in Russia for anxiety and cognitive enhancement. Modulates GABA, serotonin, and dopamine systems without sedation.",
    features: ["Anxiety reduction", "GABA modulation", "Cognitive clarity", "Non-sedating"],
  },
  {
    name: "TB-500",
    category: "RECOVERY",
    tag: "Tissue Regeneration",
    desc: "A synthetic version of Thymosin Beta-4, a naturally occurring peptide that promotes actin polymerization, cell migration, and tissue repair. Widely used for injury recovery and wound healing.",
    features: ["Actin polymerization", "Cell migration", "Wound healing", "Anti-inflammatory"],
  },
  {
    name: "Melanotan II",
    category: "AESTHETICS",
    tag: "Skin Pigmentation",
    desc: "A synthetic analogue of alpha-melanocyte-stimulating hormone (α-MSH) that stimulates melanogenesis, producing a natural tan without UV exposure. Also studied for its effects on libido.",
    features: ["Melanogenesis stimulation", "UV-independent tanning", "Libido support", "Appetite modulation"],
  },
  {
    name: "MOTS-c",
    category: "LONGEVITY",
    tag: "Mitochondrial Health",
    desc: "The first peptide encoded in mitochondrial DNA, discovered at USC in 2015. Activates AMPK — the master metabolic switch — restoring cellular energy, insulin sensitivity, and longevity signaling.",
    features: ["AMPK activation", "Mitochondrial biogenesis", "Insulin sensitivity", "Longevity signaling"],
  },
];

const CATEGORIES = ["ALL", "RECOVERY", "IMMUNITY", "BODY COMPOSITION", "GROWTH HORMONE", "ANTI-AGING", "NOOTROPIC", "ENDOCRINE", "CELLULAR HEALTH", "METABOLIC", "COGNITIVE", "AESTHETICS", "LONGEVITY"];

const trustBadges = [
  { icon: "◎", title: "Physician-Supervised", desc: "Every protocol reviewed and prescribed by a licensed provider before dispensing." },
  { icon: "⊕", title: "Pharma-Grade Compounds", desc: "Sourced from licensed compounding pharmacies with Certificates of Analysis." },
  { icon: "◷", title: "Cold-Chain Shipping", desc: "Temperature-controlled packaging with overnight delivery to preserve potency." },
  { icon: "✓", title: "Evidence-Based Only", desc: "Every peptide in our library is backed by peer-reviewed published research." },
];

export default function PeptidesPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered = activeCategory === "ALL"
    ? allPeptides
    : allPeptides.filter((p) => p.category === activeCategory);

  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh", fontFamily: DM }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ background: "#0D0D0D", padding: "clamp(60px,8vw,100px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
            <a href="/" style={{ ...s.label, color: "rgba(201,169,110,0.55)", textDecoration: "none" }}>Aurelius Health Group</a>
            <span style={{ color: "rgba(201,169,110,0.4)", fontSize: "0.7rem" }}>›</span>
            <span style={{ ...s.label }}>Discover Peptides</span>
          </div>

          <div className="peptides-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <h1 style={{ ...s.h1, marginBottom: 24 }}>
                Physician-supervised<br />peptide protocols.
              </h1>
              <p style={{ ...s.bodyLt, maxWidth: 480, marginBottom: 40, fontSize: "1.0625rem" }}>
                Every protocol in the Aurelius library is built around peer-reviewed evidence, pharma-grade compounds, and measurable outcomes — supervised by licensed physicians from intake to results.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#protocols" style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.9375rem", background: "#C9A96E", color: "#0D0D0D", padding: "14px 28px", borderRadius: 4, textDecoration: "none", display: "inline-block" }}>Browse Protocols</a>
                <a href="/" style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.9375rem", border: "1px solid rgba(245,240,232,0.25)", color: "#F5F0E8", padding: "14px 28px", borderRadius: 4, textDecoration: "none", display: "inline-block" }}>Back to CerebrolysinRx</a>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { val: "16", label: "Peptide Protocols" },
                { val: "8+", label: "Clinical Categories" },
                { val: "100%", label: "Physician-Supervised" },
                { val: "48h", label: "Avg. Consultation" },
              ].map((stat) => (
                <div key={stat.label} style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.08)", borderRadius: 10, padding: "28px 24px" }}>
                  <div style={{ fontFamily: DM, fontWeight: 300, fontSize: "clamp(2rem,4vw,2.75rem)", lineHeight: 1, letterSpacing: "-0.04em", color: "#C9A96E", marginBottom: 8 }}>{stat.val}</div>
                  <div style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(245,240,232,0.35)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter bar + cards ── */}
      <section id="protocols" style={{ background: "#0D0D0D", padding: "0 0 clamp(60px,8vw,100px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>

          {/* Scrollable category filter */}
          <div style={{ overflowX: "auto", paddingBottom: 4, marginBottom: 40, borderBottom: "1px solid rgba(245,240,232,0.06)" }}>
            <div style={{ display: "flex", gap: 6, minWidth: "max-content", paddingBottom: 16 }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: DM, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.1em",
                    textTransform: "uppercase" as const, padding: "8px 16px", borderRadius: 4,
                    cursor: "pointer", transition: "all 0.2s", border: "1px solid",
                    background: activeCategory === cat ? "#C9A96E" : "transparent",
                    color: activeCategory === cat ? "#0D0D0D" : "rgba(245,240,232,0.45)",
                    borderColor: activeCategory === cat ? "#C9A96E" : "rgba(245,240,232,0.12)",
                  }}
                >{cat}</button>
              ))}
            </div>
          </div>

          {/* Protocol count */}
          <p style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(245,240,232,0.3)", marginBottom: 28 }}>
            {filtered.length} Protocol{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Cards grid */}
          <div className="peptides-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {filtered.map((p) => (
              <div
                key={p.name}
                style={{
                  background: "rgba(245,240,232,0.025)", border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: 10, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,240,232,0.08)"; }}
              >
                {/* Card header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <h3 style={{ ...s.h3dk, margin: 0 }}>{p.name}</h3>
                  <span style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "4px 10px", borderRadius: 3, background: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)", whiteSpace: "nowrap" as const, flexShrink: 0 }}>{p.tag}</span>
                </div>
                {/* Category label */}
                <p style={{ ...s.label, margin: 0 }}>{p.category}</p>
                {/* Description */}
                <p style={{ ...s.bodyLt, margin: 0, fontSize: "0.875rem" }}>{p.desc}</p>
                {/* Feature tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.features.map((f) => (
                    <span key={f} style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.7rem", letterSpacing: "0.03em", padding: "3px 10px", borderRadius: 20, background: "rgba(245,240,232,0.05)", color: "rgba(245,240,232,0.45)", border: "1px solid rgba(245,240,232,0.1)" }}>{f}</span>
                  ))}
                </div>
                {/* CTA */}
                <a href="/" style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.9rem", background: "#C9A96E", color: "#0D0D0D", padding: "12px 20px", borderRadius: 4, textDecoration: "none", textAlign: "center" as const, marginTop: "auto", display: "block" }}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust badges ── */}
      <section style={{ background: "#0D0D0D", borderTop: "1px solid rgba(245,240,232,0.06)", padding: "clamp(40px,6vw,64px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div className="peptides-trust-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {trustBadges.map((b) => (
              <div key={b.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.25rem", color: "#C9A96E", flexShrink: 0, marginTop: 2 }}>{b.icon}</span>
                <div>
                  <p style={{ fontFamily: DM, fontWeight: 600, fontSize: "0.875rem", color: "#F5F0E8", marginBottom: 6 }}>{b.title}</p>
                  <p style={{ ...s.bodyLt, fontSize: "0.8125rem", margin: 0 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ background: "#0D0D0D", borderTop: "1px solid rgba(245,240,232,0.06)", padding: "clamp(60px,8vw,100px) 0", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>Aurelius Health Group</p>
          <h2 style={{ ...s.h2dk, marginBottom: 20 }}>Not sure which protocol is right for you?</h2>
          <p style={{ ...s.bodyLt, marginBottom: 40 }}>Our physicians review your intake, labs, and goals to design a personalized protocol. Start with a 3-minute eligibility screen.</p>
          <a href="/" style={{ fontFamily: DM, fontWeight: 500, fontSize: "1rem", background: "#C9A96E", color: "#0D0D0D", padding: "16px 36px", borderRadius: 4, textDecoration: "none", display: "inline-block" }}>Check Eligibility</a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(245,240,232,0.06)", padding: "clamp(40px,6vw,64px) 0 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4 L6 40 L14 40 L24 20 L34 40 L42 40 Z" fill="#C9A96E" />
                  <line x1="12" y1="28" x2="36" y2="28" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="24" y1="20" x2="24" y2="44" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div>
                  <span style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#F5F0E8", display: "block" }}>Cerebrolysin<span style={{ color: "#D2521A" }}>Rx</span></span>
                  <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#8C7B6B" }}>by Aurelius Health Group</span>
                </div>
              </div>
              <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.875rem", color: "rgba(245,240,232,0.35)", maxWidth: 220, marginTop: 12, lineHeight: 1.6 }}>Physician-supervised neurotrophic peptide therapy for cognitive restoration and neural repair.</p>
            </div>
            {[
              { heading: "Protocol", links: ["MOTS-c", "Ipamorelin", "Tesamorelin", "Cerebrolysin", "BPC-157"] },
              { heading: "Company", links: ["About Aurelius", "Our Physicians", "All Treatments", "Blog"] },
              { heading: "Support", links: ["Privacy Policy", "Terms of Service", "Medical Disclaimer", "HIPAA Notice"] },
            ].map((col) => (
              <div key={col.heading}>
                <p style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(245,240,232,0.3)", marginBottom: 16 }}>{col.heading}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.875rem", color: "rgba(245,240,232,0.45)", textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(245,240,232,0.06)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.75rem", color: "rgba(245,240,232,0.25)", margin: 0 }}>© 2026 Aurelius Health Group. All rights reserved.</p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["Privacy Policy", "Terms of Service", "Medical Disclaimer"].map((link) => (
                <a key={link} href="#" style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.75rem", color: "rgba(245,240,232,0.25)", textDecoration: "none" }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 900px) {
          .peptides-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .peptides-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .peptides-trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 600px) {
          .peptides-grid { grid-template-columns: 1fr !important; }
          .peptides-trust-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
