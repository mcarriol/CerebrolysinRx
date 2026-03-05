import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Brain, 
  Zap, 
  Shield, 
  Activity, 
  Plus, 
  Minus,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#E89B86] rounded-full flex items-center justify-center">
            <Brain className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Cerebrolysin<span className="text-[#E89B86]">Rx</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Science', 'Benefits', 'Pricing', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-[#E89B86] transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-[#2D2D2D] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#4A4A4A] transition-all">
            Get Started
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Science', 'Benefits', 'Pricing', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                {item}
              </a>
            ))}
            <button className="bg-[#E89B86] text-white px-6 py-3 rounded-xl text-sm font-medium">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Abstract Shapes - Inspired by Image 1 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 bg-radial-gradient from-[#E89B86] via-transparent to-transparent blur-3xl" />
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-[#E89B86]/20 rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-[#E89B86]/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E89B86]/10 text-[#C56E58] text-[10px] font-bold uppercase tracking-widest">
              <Activity className="w-3 h-3" />
              Neurotrophic Breakthrough
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
              <Shield className="w-3 h-3" />
              Telehealth Certified
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light leading-[1.1] mb-8 tracking-tight">
            Unlocking <span className="font-semibold italic text-[#E89B86]">Cognitive</span> Resilience
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            Cerebrolysin is a multimodal neuropeptide that mimics the action of endogenous neurotrophic factors, designed to enhance focus, reduce anxiety, and accelerate neural repair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#2D2D2D] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black transition-all flex items-center justify-center gap-2 group">
              Start Therapy <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all">
              View Research
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/telehealth-consult/800/1000" 
              alt="Telehealth consultation with a specialist" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          
          {/* Floating Stats - Inspired by Image 4 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass-card p-6 rounded-3xl shadow-xl z-20 max-w-[200px]"
          >
            <div className="text-3xl font-bold text-[#E89B86] mb-1">94%</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Reported Focus Improvement</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -top-6 -right-6 glass-card p-6 rounded-3xl shadow-xl z-20 max-w-[200px]"
          >
            <div className="text-3xl font-bold text-[#C56E58] mb-1">2.4x</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Neural Regeneration Rate</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const pains = [
    {
      title: "The 'Word Search' Mid-Sentence",
      desc: "You know exactly what you want to say, but the word is trapped behind a wall. It's embarrassing, frustrating, and it's happening more often."
    },
    {
      title: "The 2:00 PM Cognitive Collapse",
      desc: "No amount of caffeine can fix it. Your brain simply goes 'offline,' leaving you staring at your screen while the world moves on without you."
    },
    {
      title: "The Anxiety of Declining Edge",
      desc: "You used to be the sharpest person in the room. Now, you're quietly worried that your best years are behind you and your 'edge' is dulling."
    }
  ];

  return (
    <section className="py-32 bg-[#F5F2ED] relative">
      {/* Decorative side rail - Recipe 11/12 inspired */}
      <div className="absolute left-6 top-32 hidden xl:block">
        <div className="writing-mode-vertical text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold opacity-50">
          The Cognitive Ceiling
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5">
            <span className="text-[#E89B86] font-bold uppercase tracking-widest text-xs mb-4 block">The Silent Struggle</span>
            <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
              Beyond the <span className="font-semibold italic text-[#E89B86]">Fog</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              You're doing everything right. You sleep, you exercise, you take the standard supplements. Yet, the fog remains. The "ceiling" on your focus hasn't moved in years.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-black/5 hover:shadow-md transition-all duration-500 group">
              <div className="text-4xl font-serif italic text-[#E89B86]/20 mb-6 group-hover:text-[#E89B86] transition-colors">0{i+1}</div>
              <h3 className="text-2xl font-semibold mb-4">{pain.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{pain.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#2D2D2D] rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="text-3xl font-light mb-4">It’s not a lack of <span className="italic font-semibold text-[#E89B86]">Willpower</span>.</h3>
            <p className="text-gray-400 leading-relaxed">It's a lack of neurotrophic support. Your brain is trying to repair itself with an empty toolbox. Cerebrolysin provides the tools.</p>
          </div>
          <button className="bg-[#E89B86] text-white px-10 py-5 rounded-full font-semibold hover:bg-[#C56E58] transition-all whitespace-nowrap shadow-lg hover:scale-105 active:scale-95">
            Break the Ceiling
          </button>
        </div>
      </div>
    </section>
  );
};

const ScienceSection = () => {
  return (
    <section id="science" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden h-64">
                    <img src="https://picsum.photos/seed/medical-tech/400/600" alt="Modern Medical Technology" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="bg-[#E89B86]/10 p-8 rounded-3xl">
                    <h4 className="text-2xl font-semibold mb-2">BDNF Mimicry</h4>
                    <p className="text-sm text-gray-600">Acts as a natural brain-derived neurotrophic factor to support neuron survival.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-[#2D2D2D] text-white p-8 rounded-3xl">
                    <h4 className="text-2xl font-semibold mb-2">Synaptogenesis</h4>
                    <p className="text-sm text-gray-300">Promotes the formation of new synaptic connections for faster learning.</p>
                  </div>
                  <div className="rounded-3xl overflow-hidden h-64">
                    <img src="https://picsum.photos/seed/doctor-tablet/400/600" alt="Doctor reviewing data" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
             </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-5xl font-light mb-8 leading-tight">
              The <span className="font-semibold italic text-[#E89B86]">Science</span> of Neuro-Restoration
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cerebrolysin is a porcine brain-derived peptide preparation consisting of low molecular weight peptides and free amino acids. It is the only drug with proven neurotrophic activity similar to natural neurotrophic factors.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Neuroprotection", desc: "Protects neurons against metabolic stress and toxicity." },
                { title: "Neuroplasticity", desc: "Enhances the brain's ability to reorganize and form new paths." },
                { title: "Metabolic Support", desc: "Optimizes brain glucose transport and oxygen utilization." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border-b border-gray-100 pb-6 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-[#FDFBF9] border border-[#E89B86]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#E89B86] font-bold">0{i+1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    { icon: <Zap />, title: "Hyper-Focus", desc: "Eliminate brain fog and maintain deep work states for hours." },
    { icon: <Shield />, title: "Anxiety Relief", desc: "Stabilize emotional response and reduce cortisol-induced stress." },
    { icon: <Brain />, title: "Memory Recall", desc: "Accelerate information processing and long-term retention." },
    { icon: <Activity />, title: "Neural Repair", desc: "Support recovery from cognitive burnout and physical neural stress." }
  ];

  return (
    <section id="benefits" className="py-32 bg-[#FDFBF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light mb-6">Transformative <span className="font-semibold italic text-[#E89B86]">Benefits</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Experience a profound shift in how you process the world, from emotional stability to peak cognitive performance.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-50 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-3xl bg-[#E89B86]/10 text-[#E89B86] flex items-center justify-center mb-8 group-hover:bg-[#E89B86] group-hover:text-white transition-all duration-500">
                {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Questionnaire = () => {
  const [step, setStep] = useState(0);
  const questions = [
    "Where is your \"Mental Ceiling\" right now?",
    "How would you describe your current mental \"Processing Speed\"?",
    "Have you experienced any of the following?",
    "Are you comfortable with a 5-day on / 2-day off protocol?",
    "Are you comfortable with self-administration? (Cerebrolysin requires a small IM injection)",
    "Medical Safety Check: Please indicate if any of the following apply:"
  ];
  const options = [
    [
      "The \"Word Search\" Struggle: I forget common words or names mid-sentence.",
      "The Focus Wall: I can’t stay on task for more than 20 minutes without drifting.",
      "The Morning Fog: My brain feels \"offline\" until late morning.",
      "The Burnout Recovery: I feel \"fried\" from years of high-stress work or poor sleep."
    ],
    [
      "Delayed: I feel a split-second behind in conversations or tasks.",
      "Inconsistent: Some days I'm sharp; most days I’m just \"getting by.\"",
      "Declining: I’m not as fast as I was 5 or 10 years ago."
    ],
    [
      "Previous concussions or head injuries (TBI).",
      "Long-term \"Brain Fog\" after an illness.",
      "Significant age-related memory lapses.",
      "None—I just want to achieve peak cognitive performance."
    ],
    [
      "Yes, I am committed to a structured protocol.",
      "I prefer occasional, \"as-needed\" supplements (Warning: This may not be effective)."
    ],
    [
      "Yes, I am comfortable with needles/injections.",
      "I am willing to learn with your medical team’s guidance."
    ],
    [
      "Severe kidney impairment.",
      "History of epilepsy or frequent seizures.",
      "Pregnancy or breastfeeding.",
      "None of the above."
    ]
  ];

  return (
    <section className="py-32 bg-[#2D2D2D] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <Brain className="w-full h-full text-white" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="text-[#E89B86] font-bold uppercase tracking-widest text-xs">Assessment</span>
          <h2 className="text-4xl font-light mt-2">Find your <span className="italic font-semibold">Protocol</span></h2>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-[40px] p-12 border border-white/10">
          <div className="flex gap-2 mb-8">
            {questions.map((_, i) => (
              <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-[#E89B86]' : 'bg-white/10'}`} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="min-h-[400px]"
            >
              <h3 className="text-2xl font-medium mb-10">{questions[step]}</h3>
              <div className="grid grid-cols-1 gap-4">
                {options[step].map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => step < questions.length - 1 ? setStep(step + 1) : null}
                    className="p-6 rounded-2xl border border-white/10 hover:border-[#E89B86] hover:bg-white/5 text-left transition-all group flex justify-between items-center"
                  >
                    <span>{opt}</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex justify-between items-center">
            <button 
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="text-sm text-gray-400 hover:text-white disabled:opacity-0 transition-all"
            >
              Back
            </button>
            {step === questions.length - 1 && (
              <button className="bg-[#E89B86] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#C56E58] transition-all">
                See Results
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-light mb-8">Simple, <span className="font-semibold italic text-[#E89B86]">Transparent</span> Pricing</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We believe in making high-end neurotrophic therapy accessible. Our monthly protocol includes everything you need for a complete cycle of cognitive restoration.
            </p>
            <ul className="space-y-4 mb-10">
              {['Full Monthly Supply', 'Physician Consultation', 'Custom Protocol Design', 'Priority Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-[#E89B86] w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#E89B86] rounded-[50px] rotate-3 opacity-10" />
            <div className="relative bg-white border border-gray-100 p-16 rounded-[50px] shadow-2xl text-center">
              <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">The Protocol</div>
              <div className="flex items-center justify-center gap-1 mb-8">
                <span className="text-4xl font-light">$</span>
                <span className="text-8xl font-bold tracking-tighter">100</span>
                <span className="text-xl text-gray-400">/mo</span>
              </div>
              <button className="w-full bg-[#2D2D2D] text-white py-6 rounded-3xl text-xl font-semibold hover:bg-black transition-all mb-6">
                Subscribe Now
              </button>
              <p className="text-sm text-gray-400">No long-term contracts. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "What is Cerebrolysin?", 
      a: "Cerebrolysin is a multimodal peptide preparation derived from purified porcine brain proteins. Unlike standard 'nootropics' that just provide a temporary caffeine like buzz, Cerebrolysin mimics natural neurotrophic factors (CNTF, GDNF, IGF-1) to support the survival, repair, and 'wiring' of neurons." 
    },
    { 
      q: "How does it actually work?", 
      a: "It acts as a 'fertilizer' for your brain. It crosses the blood brain barrier to stimulate neuroplasticity—the brain's ability to repair itself and form new connections. It also protects neurons from oxidative stress and 'amyloid' buildup, which are often the culprits behind cognitive decline." 
    },
    { 
      q: "What are the primary benefits?", 
      a: "Patients typically report: Elimination of chronic 'Brain Fog', sharper memory recall and faster verbal fluency, enhanced focus during high-stress cognitive tasks, and protection against age-related cognitive decline." 
    },
    { 
      q: "Is it safe?", 
      a: "Cerebrolysin has been used clinically in Europe and Asia for decades. It has an excellent safety profile. The most common side effects are mild (temporary injection site redness, slight dizziness, or headaches as the brain adapts). It is non-addictive and does not cause a 'crash' like stimulants." 
    },
    { 
      q: "How is it administered?", 
      a: "Unlike Ibutamoren, Cerebrolysin is not orally active. To reach the brain effectively, it is administered via intramuscular (IM) injection. Our patient plans include all necessary supplies and a step-by-step instructional guide for easy self-administration." 
    },
    { 
      q: "How soon will I see results?", 
      a: "Cerebrolysin works on two levels: 1) Acute (Hours to Days): Many patients report a 'lifting of the veil' or immediate clarity and improved focus within the first few doses. 2) Cumulative (2–4 Weeks): The deep 'repair' work like neuroplasticity and neuron survival takes time. Significant improvements are typically realized after a full 20-day cycle." 
    },
    { 
      q: "Is it legal?", 
      a: "Yes. While Cerebrolysin is not currently FDA-approved for specific medical claims in the U.S., it is a legal, non-controlled substance. Through our telehealth platform, you are evaluated by a licensed U.S. physician who can prescribe it for 'off-label' use. Your medication is then dispensed by a regulated pharmacy, ensuring you receive a medical-grade, sterile product." 
    }
  ];

  return (
    <section id="faq" className="py-32 bg-[#FDFBF9]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light">Common <span className="font-semibold italic text-[#E89B86]">Questions</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left hover:bg-gray-50 transition-all"
              >
                <span className="text-xl font-medium">{faq.q}</span>
                {openIndex === i ? <Minus className="text-[#E89B86]" /> : <Plus className="text-[#E89B86]" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8 text-gray-500 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 bg-[#2D2D2D] text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E89B86] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E89B86] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
          Your Brain, <span className="font-semibold italic text-[#E89B86]">Reclaimed.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          Stop managing the symptoms of cognitive decline. Start addressing the root cause with the world's most powerful neurotrophic therapy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-white text-[#2D2D2D] px-10 py-5 rounded-full text-xl font-semibold hover:bg-[#E89B86] hover:text-white transition-all shadow-xl group">
            Start Your Protocol <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="text-left">
            <div className="flex items-center gap-2 text-[#E89B86] font-bold">
              <Shield className="w-5 h-5" />
              <span>Medical Grade Guarantee</span>
            </div>
            <p className="text-sm text-gray-500">Prescribed by U.S. Physicians</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10">
          {[
            { label: "No Contracts", val: "Cancel Anytime" },
            { label: "Discrete", val: "Direct Shipping" },
            { label: "Support", val: "24/7 Medical Team" },
            { label: "Quality", val: "FDA Regulated Pharmacy" }
          ].map((item, i) => (
            <div key={i}>
              <div className="text-[#E89B86] font-bold text-sm uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-gray-400 text-xs">{item.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#E89B86] rounded-full flex items-center justify-center">
                <Brain className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-semibold tracking-tight">Cerebrolysin<span className="text-[#E89B86]">Rx</span></span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Advancing human potential through neurotrophic science. Our mission is to provide the highest quality peptide therapy for cognitive resilience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#science" className="hover:text-[#E89B86]">Science</a></li>
              <li><a href="#benefits" className="hover:text-[#E89B86]">Benefits</a></li>
              <li><a href="#pricing" className="hover:text-[#E89B86]">Pricing</a></li>
              <li><a href="#faq" className="hover:text-[#E89B86]">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>support@cerebrolysinrx.com</li>
              <li>1-800-NEURO-RX</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 gap-6">
          <p className="text-xs text-gray-400">© 2024 CerebrolysinRx. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-gray-400 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-[#E89B86]">Privacy Policy</a>
            <a href="#" className="hover:text-[#E89B86]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans selection:bg-[#E89B86]/30 selection:text-[#C56E58]">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ScienceSection />
        <BenefitsSection />
        <Questionnaire />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
