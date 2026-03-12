/* CerebrolysinRx — Aurelius Health Group Sister Page
   Typography System (DM Sans — geometric sans-serif):
   ─────────────────────────────────────────────────────
   H1 / Hero:   weight 300, tight tracking -0.03em, generous leading
   H2:          weight 300, tracking -0.02em
   H3 / Cards:  weight 600
   Body:        weight 400, color #3D3D3D (soft charcoal)
   Labels:      weight 500, uppercase, 0.1em tracking, gold
   ─────────────────────────────────────────────────────
*/
import { useState } from "react";

const DM = "'DM Sans', system-ui, sans-serif";

const IMGS = {
  hero:  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&q=80",
  vial:  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
  labs:  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
  brain: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
};

/* ── shared style tokens ── */
const s = {
  label: { fontFamily: DM, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#C9A96E" },
  h1:    { fontFamily: DM, fontWeight: 300, fontSize: "clamp(2.75rem,6vw,5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#F5F0E8" },
  h2dk:  { fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#F5F0E8" },
  h2lt:  { fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1A1A1A" },
  h3dk:  { fontFamily: DM, fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.3, letterSpacing: "-0.01em", color: "#F5F0E8" },
  h3lt:  { fontFamily: DM, fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1A1A1A" },
  body:  { fontFamily: DM, fontWeight: 400, fontSize: "1rem", lineHeight: 1.65, color: "#3D3D3D" },
  bodySm:{ fontFamily: DM, fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.6, color: "#5A5A5A" },
  bodyLt:{ fontFamily: DM, fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.65, color: "rgba(245,240,232,0.62)" },
  cite:  { fontFamily: DM, fontWeight: 400, fontSize: "0.72rem", lineHeight: 1.5, color: "#8C7B6B", fontStyle: "italic" },
};

/* ── Problem cards ── */
const problems = [
  { icon: "⊕", title: "The 'Word Search' mid-sentence", desc: "You know exactly what you want to say, but the word is trapped behind a wall. It's happening more often, and it's costing you credibility in rooms where you can't afford to hesitate." },
  { icon: "◎", title: "The 2 PM cognitive collapse", desc: "No amount of caffeine can fix it. Your brain simply goes offline, leaving you staring at your screen while the world moves on. It's not fatigue — it's a neurochemical problem." },
  { icon: "↓", title: "The anxiety of a dulling edge", desc: "You used to be the sharpest person in the room. Now you're quietly worried your best years are behind you. That fear is a signal, not a verdict — if you act on it." },
];

/* ── Five pathways ── */
const pathways = [
  {
    n: "01", title: "Neuroprotection",
    body: "Cerebrolysin activates endogenous neuroprotective mechanisms, shielding neurons from oxidative stress, excitotoxicity, and amyloid-beta toxicity — the primary drivers of age-related cognitive decline.",
    cite: "Alvarez XA et al. J Neural Transm. 2006;113(7):921–933.",
  },
  {
    n: "02", title: "Neuroplasticity Enhancement",
    body: "By mimicking BDNF and NGF, Cerebrolysin promotes synaptogenesis — the formation of new synaptic connections — and strengthens existing neural pathways, directly improving learning speed and memory consolidation.",
    cite: "Ubhi K et al. PLoS ONE. 2013;8(3):e59505.",
  },
  {
    n: "03", title: "Metabolic Optimization",
    body: "Cerebrolysin improves cerebral glucose transport and oxygen utilization, addressing the energy deficit that underlies brain fog, processing delays, and the inability to sustain focused cognitive effort.",
    cite: "Masliah E et al. J Neural Transm. 2011;118(3):463–471.",
  },
  {
    n: "04", title: "Neurogenesis Stimulation",
    body: "Clinical and preclinical data demonstrate that Cerebrolysin upregulates BDNF expression in the hippocampus — the brain's primary memory center — stimulating the growth of new neurons in adults.",
    cite: "Zhang C et al. J Cereb Blood Flow Metab. 2010;30(5):1021–1031.",
  },
  {
    n: "05", title: "Anti-Amyloid Activity",
    body: "Cerebrolysin has demonstrated the ability to reduce amyloid precursor protein (APP) processing and tau hyperphosphorylation — the two hallmark pathological processes in Alzheimer's disease.",
    cite: "Rockenstein E et al. J Neurosci Res. 2006;83(8):1489–1499.",
  },
];

/* ── Research studies ── */
const studies = [
  {
    authors: "Alvarez XA et al.",
    journal: "J Neural Transm.",
    year: "2006",
    title: "Cerebrolysin in Alzheimer's Disease: A Randomized, Double-Blind, Placebo-Controlled Trial",
    finding: "28-week RCT. Cerebrolysin-treated patients showed significant improvement on ADAS-Cog and MMSE vs. placebo. Cognitive benefits sustained at follow-up.",
    tag: "Phase 3 RCT",
  },
  {
    authors: "Gauthier S et al.",
    journal: "J Neural Transm.",
    year: "2015",
    title: "Cerebrolysin in Mild-to-Moderate Alzheimer's Disease: A Meta-Analysis",
    finding: "Meta-analysis of 6 RCTs (n=1,289). Cerebrolysin produced consistent, statistically significant improvements in global function and cognitive performance.",
    tag: "Meta-Analysis",
  },
  {
    authors: "Zhang C et al.",
    journal: "J Cereb Blood Flow Metab.",
    year: "2010",
    title: "Cerebrolysin Enhances Neurogenesis in the Ischemic Brain",
    finding: "Cerebrolysin significantly increased BDNF expression and neurogenesis in the hippocampus. Spatial memory performance improved by 34% vs. control.",
    tag: "Neurogenesis",
  },
  {
    authors: "Rockenstein E et al.",
    journal: "J Neurosci Res.",
    year: "2006",
    title: "Cerebrolysin Decreases Amyloid-Beta Production and Tau Pathology",
    finding: "Cerebrolysin reduced APP processing by 28% and tau hyperphosphorylation by 41% in transgenic models. Synaptic density was preserved.",
    tag: "Neuroprotection",
  },
  {
    authors: "Ubhi K et al.",
    journal: "PLoS ONE.",
    year: "2013",
    title: "Cerebrolysin Modulates Pronerve Growth Factor/Nerve Growth Factor Ratio",
    finding: "Cerebrolysin normalized the proNGF/NGF ratio — a key marker of neurotrophin dysregulation — and reduced neurodegeneration markers by 22%.",
    tag: "Neurotrophic",
  },
  {
    authors: "Masliah E et al.",
    journal: "J Neural Transm.",
    year: "2011",
    title: "Cerebrolysin Ameliorates Performance Deficits and Reduces Amyloid-Beta",
    finding: "Cerebrolysin treatment reduced amyloid plaque burden by 31% and improved spatial learning performance on Morris Water Maze by 44% vs. vehicle.",
    tag: "Cognitive RCT",
  },
];

/* ── What's included ── */
const included = [
  { icon: "◎", title: "Board-Certified Physician", desc: "A licensed provider reviews your intake, symptom history, and cognitive goals before prescribing. Every protocol is individualized." },
  { icon: "⊕", title: "Baseline Neurological Panel", desc: "Comprehensive labs including metabolic panel, thyroid, inflammatory markers, and optional cognitive baseline assessment." },
  { icon: "◈", title: "Pharma-Grade Compound", desc: "Medical-grade Cerebrolysin sourced from licensed compounding pharmacies. Cold-packed and shipped with sterile injection supplies." },
  { icon: "◷", title: "Telehealth Consultations", desc: "Asynchronous and synchronous visits with your provider. No waiting rooms, no commute. Accessible from anywhere in the U.S." },
  { icon: "↗", title: "Protocol Monitoring", desc: "Monthly provider check-ins with cognitive symptom tracking. Protocol adjusted based on your response and tolerance." },
  { icon: "✉", title: "Direct Messaging", desc: "Unlimited direct messaging with your care team. Questions answered within one business day throughout your protocol." },
];

/* ── FAQ ── */
const faqs = [
  {
    q: "What is Cerebrolysin and how is it different from standard nootropics?",
    a: "Cerebrolysin is a porcine brain-derived peptide preparation consisting of low molecular weight neuropeptides and free amino acids. Unlike standard nootropics that provide a temporary stimulant effect, Cerebrolysin mimics the action of endogenous neurotrophic factors — BDNF, NGF, CNTF, and GDNF — to support the actual survival, repair, and wiring of neurons. It is the only compound with clinically proven neurotrophic activity comparable to natural growth factors.",
  },
  {
    q: "How does Cerebrolysin actually work?",
    a: "Cerebrolysin crosses the blood-brain barrier and acts as a 'fertilizer' for neurons. It stimulates neuroplasticity — the brain's ability to repair itself and form new connections — while protecting neurons from oxidative stress and amyloid-beta accumulation. It also improves cerebral glucose metabolism, addressing the energy deficit that underlies most cognitive symptoms.",
  },
  {
    q: "What are the primary benefits patients report?",
    a: "Patients typically report: elimination of chronic brain fog and mental fatigue, sharper memory recall and faster verbal fluency, enhanced focus during high-stress cognitive tasks, improved mood stability and reduced anxiety, and protection against further age-related cognitive decline. Many patients describe a 'lifting of the veil' within the first few doses.",
  },
  {
    q: "Is it safe?",
    a: "Cerebrolysin has been used clinically in Europe and Asia for over 50 years, with an extensive safety record across thousands of patients. It is non-addictive and does not cause a stimulant crash. The most common side effects are mild and transient: injection site redness, brief dizziness, or mild headaches during the first week as the brain adapts. It is contraindicated in severe renal impairment, epilepsy, and pregnancy.",
  },
  {
    q: "How is it administered?",
    a: "Cerebrolysin is not orally bioavailable — to reach the brain effectively, it must be administered via intramuscular (IM) injection. Our protocols use a 5-day on / 2-day off cycle. The injection is straightforward and comparable to a standard vaccine. All patient plans include supplies and a step-by-step instructional guide with nurse onboarding.",
  },
  {
    q: "How soon will I see results?",
    a: "Cerebrolysin works on two timescales: Acute (Days 1–7): Many patients report a noticeable improvement in clarity, focus, and verbal fluency within the first few doses. Cumulative (2–4 Weeks): The deeper repair work — neuroplasticity, neuron survival, synaptic density — takes time. Significant, sustained improvements are typically realized after a full 20-day cycle.",
  },
  {
    q: "Is it legal?",
    a: "Yes. While Cerebrolysin is not currently FDA-approved for specific indications in the U.S., it is a legal, non-controlled substance. Through our telehealth platform, you are evaluated by a licensed U.S. physician who can prescribe it for off-label use. Your medication is dispensed by a regulated compounding pharmacy, ensuring you receive a medical-grade, sterile product.",
  },
];

/* ── Eligibility quiz ── */
const quizQuestions = [
  { q: "Do you have a history of epilepsy or recurrent seizures?", disqualify: "yes" },
  { q: "Do you have severe kidney impairment or are you on dialysis?", disqualify: "yes" },
  { q: "Are you currently pregnant or planning to become pregnant?", disqualify: "yes" },
  { q: "Do you have a known allergy to porcine (pig) derived products?", disqualify: "yes" },
  { q: "Are you primarily experiencing cognitive symptoms such as brain fog, memory issues, or mental fatigue?", disqualify: "no" },
  { q: "Are you comfortable with a structured 5-day on / 2-day off injection protocol?", disqualify: "no" },
];

function EligibilityQuiz() {
  const [answers, setAnswers] = useState<(string | null)[]>(Array(quizQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = answers.every((a) => a !== null);
  const disqualified = answers.some((a, i) => a === quizQuestions[i].disqualify);

  return (
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      {!submitted ? (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {quizQuestions.map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(245,240,232,0.1)", borderRadius: 8, padding: "20px 24px" }}>
                <p style={{ ...s.body, color: "#F5F0E8", marginBottom: 16, fontWeight: 400 }}>
                  <span style={{ color: "#C9A96E", fontWeight: 600, marginRight: 8 }}>{i + 1}.</span>
                  {item.q}
                </p>
                <div style={{ display: "flex", gap: 12 }}>
                  {["yes", "no"].map((val) => (
                    <button
                      key={val}
                      onClick={() => {
                        const next = [...answers];
                        next[i] = val;
                        setAnswers(next);
                      }}
                      style={{
                        fontFamily: DM, fontWeight: 500, fontSize: "0.875rem",
                        letterSpacing: "0.06em", textTransform: "uppercase",
                        padding: "10px 28px", borderRadius: 6, cursor: "pointer",
                        border: answers[i] === val ? "1.5px solid #C9A96E" : "1.5px solid rgba(245,240,232,0.2)",
                        background: answers[i] === val ? "rgba(201,169,110,0.15)" : "transparent",
                        color: answers[i] === val ? "#C9A96E" : "rgba(245,240,232,0.5)",
                        transition: "all 0.2s",
                      }}
                    >
                      {val.charAt(0).toUpperCase() + val.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            style={{
              marginTop: 32, width: "100%", padding: "16px", borderRadius: 6,
              fontFamily: DM, fontWeight: 500, fontSize: "1rem", cursor: allAnswered ? "pointer" : "not-allowed",
              background: allAnswered ? "#C9A96E" : "rgba(201,169,110,0.25)",
              color: allAnswered ? "#0D0D0D" : "rgba(245,240,232,0.3)",
              border: "none", transition: "all 0.2s",
            }}
          >
            Check My Eligibility
          </button>
        </>
      ) : disqualified ? (
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(245,240,232,0.12)", borderRadius: 10, padding: "40px 32px", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", marginBottom: 16 }}>◎</div>
          <h3 style={{ ...s.h3dk, marginBottom: 12 }}>You may not be a candidate at this time</h3>
          <p style={{ ...s.bodyLt, marginBottom: 24 }}>
            Based on your responses, one or more Cerebrolysin contraindications may apply. We recommend speaking with your primary care physician before proceeding. Our team is available to answer questions.
          </p>
          <a href="mailto:care@cerebrolysinrx.com" className="btn-ghost-cream" style={{ display: "inline-flex" }}>Contact Our Care Team</a>
        </div>
      ) : (
        <div style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.3)", borderRadius: 10, padding: "40px 32px", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", marginBottom: 16, color: "#C9A96E" }}>✓</div>
          <h3 style={{ ...s.h3dk, marginBottom: 12, color: "#C9A96E" }}>You appear to be a strong candidate</h3>
          <p style={{ ...s.bodyLt, marginBottom: 28 }}>
            Based on your responses, no absolute contraindications were identified. The next step is a physician intake and baseline labs to confirm eligibility and design your protocol.
          </p>
          <a href="#cta" className="btn-gold" style={{ display: "inline-flex" }}>Start Your Assessment</a>
        </div>
      )}
    </div>
  );
}

function FaqItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(245,240,232,0.1)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "22px 0", background: "none", border: "none", cursor: "pointer", gap: 16,
        }}
      >
        <span style={{ ...s.h3dk, textAlign: "left", fontSize: "1rem" }}>{item.q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(245,240,232,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#F5F0E8", fontFamily: DM, fontWeight: 300, fontSize: "1.1rem", flexShrink: 0,
          transition: "transform 0.25s", transform: open ? "rotate(45deg)" : "none",
        }}>+</span>
      </button>
      <div style={{ overflow: "hidden", maxHeight: open ? 500 : 0, transition: "max-height 0.35s ease" }}>
        <p style={{ ...s.bodyLt, paddingBottom: 20, paddingRight: 44 }}>{item.a}</p>
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 40), { passive: true });
  }

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "14px 0" : "22px 0",
      background: scrolled ? "rgba(13,13,13,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,169,110,0.1)" : "none",
      transition: "all 0.35s ease",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
            <path d="M24 4 L6 40 L14 40 L24 20 L34 40 L42 40 Z" fill="#C9A96E" />
            <line x1="12" y1="28" x2="36" y2="28" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="24" y1="20" x2="24" y2="44" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div style={{ lineHeight: 1 }}>
            <span style={{ display: "block", fontFamily: DM, fontWeight: 500, fontSize: "0.9375rem", letterSpacing: "0.12em", color: "#F5F0E8", textTransform: "uppercase" }}>Cerebrolysin<span style={{ color: "#D2521A" }}>Rx</span></span>
            <span style={{ display: "block", fontFamily: DM, fontWeight: 300, fontSize: "0.5625rem", letterSpacing: "0.14em", color: "#8C7B6B", textTransform: "uppercase", marginTop: 2 }}>by Aurelius Health Group</span>
          </div>
        </a>
        {/* Desktop Nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
          {[
            { label: "The Problem", href: "#problem" },
            { label: "Mechanism", href: "#mechanism" },
            { label: "Research", href: "#research" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
            { label: "Discover Peptides", href: "/peptides" },
          ].map((link) => (
            <li key={link.label}>
              <a href={link.href} style={{ fontFamily: DM, fontSize: "0.875rem", fontWeight: 400, color: "rgba(245,240,232,0.72)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.72)")}>{link.label}</a>
            </li>
          ))}
        </ul>
        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden md:flex">
          <a href="#quiz" className="btn-ghost-cream" style={{ padding: "10px 20px", fontSize: "0.875rem" }}>See If You Qualify</a>
          <a href="#cta" className="btn-gold" style={{ padding: "10px 20px", fontSize: "0.875rem" }}>Get Started</a>
        </div>
        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5, display: "none" }} className="mobile-hamburger" aria-label="Toggle menu">
          {[0,1,2].map((i) => <span key={i} style={{ display: "block", width: 24, height: 1.5, background: "#F5F0E8", borderRadius: 2 }} />)}
        </button>
        {menuOpen && (
          <div style={{ position: "fixed", top: 70, left: 0, right: 0, background: "rgba(13,13,13,0.97)", backdropFilter: "blur(16px)", padding: "24px 24px 32px", borderBottom: "1px solid rgba(201,169,110,0.15)", display: "flex", flexDirection: "column", gap: 20 }}>
            {[{ label: "The Problem", href: "#problem" }, { label: "Mechanism", href: "#mechanism" }, { label: "Research", href: "#research" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }, { label: "Discover Peptides", href: "/peptides" }].map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: DM, fontSize: "1rem", fontWeight: 400, color: "rgba(245,240,232,0.8)", textDecoration: "none" }}>{link.label}</a>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
              <a href="#quiz" onClick={() => setMenuOpen(false)} className="btn-ghost-cream" style={{ justifyContent: "center" }}>See If You Qualify</a>
              <a href="#cta" onClick={() => setMenuOpen(false)} className="btn-gold" style={{ justifyContent: "center" }}>Get Started</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function CerebrolysinRx() {
  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh" }}>
      <Navbar />

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "#0D0D0D" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMGS.hero})`, backgroundSize: "cover", backgroundPosition: "center 30%", backgroundRepeat: "no-repeat" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.6) 55%, rgba(13,13,13,0.1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 55%)" }} />
        <div className="hero-inner" style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem 100px", width: "100%" }}>
          {/* Sister brand breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <a href="/" style={{ ...s.label, color: "rgba(201,169,110,0.6)", textDecoration: "none" }}>Aurelius Health Group</a>
            <span style={{ color: "rgba(201,169,110,0.4)", fontSize: "0.7rem" }}>›</span>
            <span style={{ ...s.label }}>Cerebrolysin<span style={{ color: "#D2521A" }}>Rx</span></span>
          </div>
            <h1 style={{ ...s.h1, maxWidth: 680, marginBottom: 24 }}>
              Repair your brain.<br />Not just stimulate it.
            </h1>
          <p style={{ ...s.bodyLt, maxWidth: 460, marginBottom: 20, fontSize: "1.0625rem" }}>
            Cerebrolysin doesn't mask cognitive decline. It addresses the root cause — providing the neurotrophic signals your brain needs to repair, rewire, and perform.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A96E", display: "inline-block" }} />
            <span style={{ ...s.bodyLt, fontSize: "0.875rem" }}>Physician-supervised · Pharma-grade compounded · Cold-shipped</span>
          </div>
          <div className="cta-buttons" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#quiz" className="btn-gold">Check My Eligibility</a>
            <a href="#mechanism" className="btn-ghost-cream">How It Works</a>
          </div>
        </div>
      </section>

      {/* ══ PROBLEM — 6 cards ══ */}
      <section id="problem" style={{ background: "#F5F0E8", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>The Problem</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "start", marginBottom: 64 }} className="grid-2">
            <h2 style={{ ...s.h2lt }}>Three signs your neural repair system is failing you</h2>
            <p style={{ ...s.body, maxWidth: 520, paddingTop: 8 }}>
              Age-related decline in neurotrophic factor production begins in your 30s and accelerates through your 40s and 50s. The downstream effects are measurable, progressive, and — with the right intervention — addressable.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
            {problems.map((p) => (
              <div key={p.title} style={{ background: "#fff", border: "1px solid rgba(13,13,13,0.07)", borderRadius: 10, padding: "28px 24px", transition: "box-shadow 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(13,13,13,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(201,169,110,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A96E", fontSize: "1rem", marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ ...s.h3lt, marginBottom: 10, fontSize: "1rem" }}>{p.title}</h3>
                <p style={{ ...s.bodySm, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MECHANISM ══ */}
      <section id="mechanism" style={{ background: "#0D0D0D", padding: "100px 0" }} className="section-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>The Mechanism</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="grid-2 mechanism-grid">
            <div>
              <h2 style={{ ...s.h2dk, marginBottom: 20 }}>The neurotrophic signal itself.</h2>
              <p style={{ ...s.bodyLt, marginBottom: 40 }}>
                Most cognitive supplements work downstream — providing precursors, stimulants, or receptor agonists. Cerebrolysin is different: it is a preparation of low-molecular-weight neuropeptides that directly mimics the action of endogenous neurotrophic factors. This means your neurons receive the actual repair signals — BDNF, NGF, CNTF, GDNF — not a pharmacologic approximation.
              </p>

              {/* Signal cascade */}
              <div style={{ marginBottom: 40 }}>
                <p style={{ ...s.label, marginBottom: 20 }}>Neurotrophic Cascade</p>
                {[
                  { node: "Cerebrolysin", sub: "Crosses the blood-brain barrier intact", arrow: true },
                  { node: "BDNF / NGF Mimicry", sub: "Binds neurotrophic receptors (TrkA, TrkB)", arrow: true },
                  { node: "Neuroplasticity", sub: "Synaptogenesis and axonal sprouting", arrow: true },
                  { node: "Neuroprotection", sub: "Antioxidant and anti-apoptotic signaling", arrow: true },
                  { node: "Cognitive Restoration", sub: "Memory, focus, processing speed", arrow: false },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="cascade-item">
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 14, flexWrap: "wrap" }} className="cascade-row">
                      <div style={{
                        background: i === 0 ? "#C9A96E" : "rgba(201,169,110,0.12)",
                        border: `1.5px solid ${i === 0 ? "#C9A96E" : "rgba(201,169,110,0.3)"}`,
                        borderRadius: 6, padding: "8px 16px", flexShrink: 0,
                      }} className="cascade-pill">
                        <span style={{ fontFamily: DM, fontWeight: 600, fontSize: "0.9375rem", color: i === 0 ? "#0D0D0D" : "#F5F0E8" }}>{item.node}</span>
                      </div>
                      <span style={{ ...s.bodyLt, fontSize: "0.8rem", paddingTop: 10, flex: "1 1 140px" }} className="cascade-sub">{item.sub}</span>
                    </div>
                    {item.arrow && (
                      <div style={{ marginLeft: 24, width: 1.5, height: 20, background: "rgba(201,169,110,0.35)", margin: "4px 0 4px 24px" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison table */}
            <div>
              <p style={{ ...s.label, marginBottom: 20 }}>Mechanism Comparison</p>
              <div className="mech-table-scroll" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" as any }}>
              <div className="mech-table-inner" style={{ border: "1px solid rgba(245,240,232,0.1)", borderRadius: 10, overflow: "hidden", minWidth: 0 }}>
                <div className="mech-table-row" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(245,240,232,0.1)" }}>
                  {["", "Cerebrolysin", "Racetams", "Stimulants"].map((h, i) => (
                    <div key={i} className="mech-cell" style={{ padding: "14px 16px", fontFamily: DM, fontWeight: i === 1 ? 600 : 400, fontSize: "0.8rem", color: i === 1 ? "#C9A96E" : "rgba(245,240,232,0.5)", letterSpacing: "0.04em", borderRight: i < 3 ? "1px solid rgba(245,240,232,0.08)" : "none" }}>{h}</div>
                  ))}
                </div>
                {[
                  ["Mechanism", "Neurotrophic mimicry", "Receptor modulation", "Monoamine release"],
                  ["Neurogenesis", "✓ Documented", "✗ None", "✗ None"],
                  ["Neuroprotection", "✓ Yes", "Partial", "✗ Neurotoxic"],
                  ["Blood-brain barrier", "✓ Crosses intact", "✓ Yes", "✓ Yes"],
                  ["Tolerance / crash", "✓ None", "Partial", "✗ Significant"],
                  ["Clinical trial data", "✓ Phase 3 RCTs", "Limited", "✓ Yes"],
                  ["Long-term repair", "✓ Primary effect", "✗ No", "✗ No"],
                  ["Addiction potential", "✓ None", "✓ None", "✗ High"],
                ].map((row, i) => (
                  <div key={i} className="mech-table-row" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", borderBottom: i < 7 ? "1px solid rgba(245,240,232,0.06)" : "none" }}>
                    {row.map((cell, j) => (
                      <div key={j} className="mech-cell" style={{
                        padding: "12px 16px", fontFamily: DM, fontSize: "0.8rem",
                        color: j === 0 ? "rgba(245,240,232,0.45)" : j === 1 ? (cell.startsWith("✓") ? "#C9A96E" : cell.startsWith("✗") ? "rgba(245,240,232,0.3)" : "#F5F0E8") : (cell.startsWith("✓") ? "rgba(245,240,232,0.6)" : cell.startsWith("✗") ? "rgba(245,240,232,0.25)" : "rgba(245,240,232,0.5)"),
                        borderRight: j < 3 ? "1px solid rgba(245,240,232,0.06)" : "none",
                        background: j === 1 ? "rgba(201,169,110,0.04)" : "transparent",
                      }}>{cell}</div>
                    ))}
                  </div>
                ))}
              </div>
              </div>{/* end scroll wrapper */}
            </div>
          </div>
        </div>
      </section>

      {/* ══ DISCOVER PEPTIDES PREVIEW ══ */}
      <section style={{ background: "#F5F0E8", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>Aurelius Health Group</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "start", marginBottom: 64 }} className="grid-2">
            <h2 style={{ ...s.h2lt }}>Explore the full peptide library</h2>
            <p style={{ ...s.body, paddingTop: 8 }}>
              Cerebrolysin is one of 16 physician-supervised peptide protocols available through Aurelius Health Group. Each protocol is built around peer-reviewed evidence, pharma-grade compounds, and measurable outcomes.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 48 }} className="grid-4">
            {[
              { name: "BPC-157", category: "RECOVERY", tag: "Tissue Repair", desc: "A gastric pentadecapeptide that accelerates healing of tendons, ligaments, and gut mucosa. Activates growth hormone receptors and promotes angiogenesis at injury sites." },
              { name: "Ipamorelin", category: "GROWTH HORMONE", tag: "GH Secretion", desc: "A selective growth hormone secretagogue that stimulates your pituitary's own GH pulse — without cortisol or ACTH elevation. Supports body composition, recovery, and sleep quality." },
              { name: "Tesamorelin", category: "METABOLIC", tag: "Visceral Fat", desc: "An FDA-studied GHRH analogue that reduces visceral adipose tissue and improves metabolic markers. The only peptide with Phase 3 RCT data for abdominal fat reduction." },
              { name: "MOTS-c", category: "LONGEVITY", tag: "Mitochondrial Health", desc: "The first peptide encoded in mitochondrial DNA. Activates AMPK — the master metabolic switch — restoring cellular energy, insulin sensitivity, and longevity signaling from the source." },
            ].map((p) => (
              <div
                key={p.name}
                style={{ background: "#fff", border: "1px solid rgba(13,13,13,0.07)", borderRadius: 10, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, transition: "box-shadow 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(13,13,13,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                  <h3 style={{ ...s.h3lt, margin: 0, fontSize: "1rem" }}>{p.name}</h3>
                  <span style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "3px 8px", borderRadius: 3, background: "rgba(201,169,110,0.1)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.2)", whiteSpace: "nowrap" as const, flexShrink: 0 }}>{p.tag}</span>
                </div>
                <p style={{ ...s.label, margin: 0, fontSize: "0.6rem" }}>{p.category}</p>
                <p style={{ ...s.bodySm, margin: 0, flexGrow: 1 }}>{p.desc}</p>
                <a href="/peptides" style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.875rem", background: "#0D0D0D", color: "#F5F0E8", padding: "10px 16px", borderRadius: 4, textDecoration: "none", textAlign: "center" as const, display: "block", marginTop: 4 }}>Get Started</a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/peptides" style={{ fontFamily: DM, fontWeight: 500, fontSize: "1rem", background: "#C9A96E", color: "#0D0D0D", padding: "16px 40px", borderRadius: 4, textDecoration: "none", display: "inline-block" }}>Discover More Peptides</a>
          </div>
        </div>
      </section>

      {/* ══ COMBINED EVIDENCE — pathways + studies ══ */}
      <section id="research" style={{ background: "#F5F0E8", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
          <p style={{ ...s.label, color: "#C9A96E", marginBottom: 16 }}>Clinical Evidence</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "start", marginBottom: 64 }} className="grid-2">
            <h2 style={{ ...s.h2lt }}>The research behind the protocol</h2>
            <p style={{ ...s.body, paddingTop: 8 }}>
              Cerebrolysin's effects are documented across peer-reviewed Phase 3 trials, randomized controlled studies, and decades of clinical use. Each pathway below is supported by a specific citation.
            </p>
          </div>

          {/* Pathways list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 80 }}>
            {pathways.map((p) => (
              <div key={p.n} style={{
                display: "grid", gridTemplateColumns: "80px 1fr 1fr",
                gap: 40, padding: "36px 0",
                borderBottom: "1px solid rgba(13,13,13,0.08)",
                alignItems: "start",
              }} className="grid-3">
                <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "2rem", color: "rgba(13,13,13,0.12)", letterSpacing: "-0.04em", lineHeight: 1 }}>{p.n}</span>
                <div>
                  <h3 style={{ ...s.h3lt, marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ ...s.body, margin: 0 }}>{p.body}</p>
                </div>
                <div style={{ paddingTop: 4 }}>
                  <p style={{ ...s.cite, color: "#8C7B6B" }}>Source: {p.cite}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Peer-Reviewed Studies removed */}
        </div>
      </section>

      {/* ══ 4-STEP PROTOCOL ══ */}
      <section style={{ background: "#0D0D0D", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>The Protocol</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "start", marginBottom: 64 }} className="grid-2">
            <h2 style={{ ...s.h2dk }}>Four steps from intake to results</h2>
            <p style={{ ...s.bodyLt, paddingTop: 8 }}>Designed to mirror the infrastructure of the clinical trials — physician oversight, baseline labs, pharma-grade compound, and quantified cognitive outcomes at 4 and 8 weeks.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }} className="grid-4">
            {[
              {
                n: "1", title: "Assessment & Intake",
                items: ["Comprehensive health questionnaire", "Cognitive symptom mapping", "Physician review within 48 hours", "Contraindication screening"],
              },
              {
                n: "2", title: "Baseline Labs",
                items: ["Metabolic panel + thyroid", "Inflammatory markers (CRP, homocysteine)", "Optional cognitive baseline assessment", "Physician protocol design"],
              },
              {
                n: "3", title: "Protocol Initiation",
                items: ["Cold-packed Cerebrolysin shipped", "Sterile IM supplies included", "Nurse onboarding session (video)", "Injection technique certification"],
              },
              {
                n: "4", title: "Monitoring & Retest",
                items: ["Monthly provider check-ins", "Cognitive symptom tracking", "Protocol adjusted at 4 weeks", "Full reassessment at 8 weeks"],
              },
            ].map((step) => (
              <div key={step.n} style={{ borderTop: "2px solid rgba(201,169,110,0.4)", paddingTop: 24 }}>
                <div style={{ fontFamily: DM, fontWeight: 300, fontSize: "2.5rem", color: "rgba(245,240,232,0.12)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 12 }}>{step.n}</div>
                <h3 style={{ ...s.h3dk, marginBottom: 16, fontSize: "1rem" }}>{step.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {step.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#C9A96E", fontSize: "0.75rem", marginTop: 3, flexShrink: 0 }}>◎</span>
                      <span style={{ ...s.bodyLt, fontSize: "0.875rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED — removed ══ */}

      {/* ══ PRICING ══ */}
      <section id="pricing" style={{ background: "#F5F0E8", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>Pricing</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
            <div>
              <h2 style={{ ...s.h2lt, marginBottom: 20 }}>Specialist-level care. Without the specialist markup.</h2>
              <p style={{ ...s.body, marginBottom: 32 }}>
                Neurology clinic protocols for cognitive optimization typically run $1,200–$2,000/month when you factor in office visits, lab fees, and compound costs billed separately. Aurelius bundles everything into a single monthly plan.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Physician consultation included", "All baseline and monitoring labs included", "Pharma-grade compound included", "Nurse onboarding and injection training", "Unlimited care team messaging"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#C9A96E" strokeWidth="1.2"/><path d="M5 8l2 2 4-4" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ ...s.bodySm }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: "#0D0D0D", borderRadius: 12, padding: "48px 40px", textAlign: "center", border: "1px solid rgba(201,169,110,0.15)" }}>
                <p style={{ ...s.label, marginBottom: 12 }}>CerebrolysinRx Plan</p>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 4, marginBottom: 8 }}>
                  <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "1.25rem", color: "#C9A96E", marginTop: 10 }}>$</span>
                  <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "5rem", lineHeight: 1, letterSpacing: "-0.04em", color: "#F5F0E8" }}>299</span>
                  <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "1rem", color: "rgba(245,240,232,0.4)", marginTop: 16 }}>/mo</span>
                </div>
                <p style={{ ...s.bodyLt, fontSize: "0.8rem", marginBottom: 32 }}>
                  vs. $1,200–$2,000/mo at a neurology clinic
                </p>
                <a href="#quiz" className="btn-gold" style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "1rem" }}>Check My Eligibility</a>
                <p style={{ ...s.bodyLt, fontSize: "0.75rem", marginTop: 16, opacity: 0.5 }}>No commitment. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BRAIN IMAGE BANNER ══ */}
      <section style={{ background: "#0D0D0D", padding: "0" }}>
        <div style={{ position: "relative", maxHeight: 480, overflow: "hidden" }}>
          <img src={IMGS.brain} alt="Neural network visualization" style={{ width: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.75) 0%, transparent 40%, transparent 60%, rgba(13,13,13,0.75) 100%)" }} />
          <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", textAlign: "center", width: "100%" }}>
            <p style={{ ...s.label, marginBottom: 8 }}>Clinical Trial Outcome</p>
            <p style={{ fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.25rem, 2.5vw, 2rem)", color: "#F5F0E8", letterSpacing: "-0.02em" }}>Significant ADAS-Cog improvement vs. placebo at 28 weeks</p>
          </div>
        </div>
      </section>

      {/* ══ ELIGIBILITY QUIZ ══ */}
      <section id="quiz" style={{ background: "#0D0D0D", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
          <p style={{ ...s.label, marginBottom: 16, textAlign: "center" }}>Eligibility Screening</p>
          <h2 style={{ ...s.h2dk, textAlign: "center", marginBottom: 16 }}>Are you a candidate for CerebrolysinRx?</h2>
          <p style={{ ...s.bodyLt, textAlign: "center", marginBottom: 56, maxWidth: 520, margin: "0 auto 56px" }}>
            This 6-question screen checks for Cerebrolysin-specific contraindications. It takes under 60 seconds and does not constitute a medical evaluation.
          </p>
          <EligibilityQuiz />
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" style={{ background: "#0D0D0D", padding: "100px 0", borderTop: "1px solid rgba(245,240,232,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>Frequently Asked Questions</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }} className="grid-2">
            <div className="faq-sidebar" style={{ position: "sticky", top: 100 }}>
              <h2 style={{ ...s.h2dk, marginBottom: 20 }}>Everything you need to know</h2>
              <p style={{ ...s.bodyLt }}>Including the Cerebrolysin vs. racetams vs. stimulants comparison, administration protocol, off-label prescribing, and what to expect in the first 30 days.</p>
              <div style={{ marginTop: 40 }}>
                <img src={IMGS.labs} alt="Lab review" style={{ width: "100%", borderRadius: 10, objectFit: "cover" }} />
              </div>
            </div>
            <div>
              {faqs.map((item) => (
                <FaqItem key={item.q} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CLOSING CTA ══ */}
      <section id="cta" style={{ background: "#0D0D0D", padding: "120px 0", textAlign: "center", borderTop: "1px solid rgba(245,240,232,0.06)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 2.5rem" }}>
          <p style={{ ...s.label, marginBottom: 20 }}>Start Today</p>
          <h2 style={{ fontFamily: DM, fontWeight: 300, fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F5F0E8", marginBottom: 24 }}>
            The cognitive decline your labs show is not inevitable.
          </h2>
          <p style={{ ...s.bodyLt, marginBottom: 48, fontSize: "1.0625rem" }}>
            Cerebrolysin has more peer-reviewed clinical evidence behind it than any other neurotrophic compound. A physician-supervised protocol is available today. The question is whether you're a candidate.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
            <a href="#quiz" className="btn-gold" style={{ padding: "16px 36px", fontSize: "1rem" }}>Check My Eligibility</a>
            <a href="#mechanism" className="btn-ghost-cream" style={{ padding: "16px 36px", fontSize: "1rem" }}>Review the Research</a>
          </div>
          <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.75rem", color: "rgba(245,240,232,0.25)", lineHeight: 1.6, maxWidth: 560, margin: "0 auto" }}>
            † This page describes off-label use of Cerebrolysin. Off-label prescribing is legal and at the clinical discretion of a licensed physician. This content is for informational purposes only and does not constitute medical advice. Individual results vary. All protocols require physician evaluation and are subject to contraindication screening. Aurelius Health Group is not affiliated with EVER Neuro Pharma GmbH.
          </p>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(245,240,232,0.06)", padding: "64px 0 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }} className="grid-4 footer-grid">
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
              <p style={{ ...s.bodySm, color: "rgba(245,240,232,0.35)", maxWidth: 220, marginTop: 12 }}>Physician-supervised neurotrophic peptide therapy for cognitive restoration and neural repair.</p>
            </div>
            {[
              { heading: "Protocol", links: ["How It Works", "The Research", "Five Pathways", "What's Included"] },
              { heading: "Company", links: ["About Aurelius", "Our Physicians", "All Treatments", "Blog"] },
              { heading: "Support", links: ["Check Eligibility", "FAQ", "Contact Us", "Patient Portal"] },
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
          <div style={{ borderTop: "1px solid rgba(245,240,232,0.06)", paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.8rem", color: "rgba(245,240,232,0.22)" }}>© 2026 Aurelius Health Group. CerebrolysinRx is an off-label telehealth protocol. All rights reserved.</p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacy Policy", "Terms of Service", "Medical Disclaimer"].map((link) => (
                <a key={link} href="#" style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.8rem", color: "rgba(245,240,232,0.22)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.22)")}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
