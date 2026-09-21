"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CaretLeft,
  CaretRight,
  Star,
  ShieldCheck,
  Drop,
  Sparkle,
} from "@phosphor-icons/react";
import { track } from "@/lib/analytics";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const quotes = [
  {
    text: "I sleep, shower and train in my hoops. Six months on, they shine like day one.",
    name: "Meera K.",
    detail: "Athena hoops · verified buyer",
    seed: "face-meera",
    alt: "Portrait of customer Meera",
  },
  {
    text: "The solitaire necklace sits exactly on the collarbone. I get asked about it every single week.",
    name: "Ananya S.",
    detail: "Round solitaire · verified buyer",
    seed: "face-ananya",
    alt: "Portrait of customer Ananya",
  },
];

const assurances = [
  { icon: ShieldCheck, title: "BIS hallmarked", note: "Certified metals" },
  { icon: Drop, title: "Waterproof", note: "Shower-safe shine" },
  { icon: Sparkle, title: "Skin-safe", note: "No nickel, no green" },
];

export default function AtelierOffer() {
  const root = useRef<HTMLElement>(null);
  const [qi, setQi] = useState(0);
  const [paused, setPaused] = useState(false);
  const q = quotes[qi];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setQi((v) => (v + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(t);
  }, [qi, paused]);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".atelier-panel", {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        });
        gsap.utils.toArray<HTMLElement>(".atelier-zoom").forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 0.85 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top 95%",
                end: "top 45%",
                scrub: 1,
              },
            }
          );
        });
      }, root);
      return () => ctx.revert();
    },
    { scope: root }
  );

  return (
    <section
      id="atelier"
      ref={root}
      aria-labelledby="atelier-title"
      className="relative w-full bg-[#FAF7F2] py-24 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 min-[380px]:px-6 lg:grid-cols-2">
        <div className="atelier-panel relative overflow-hidden rounded-[2rem] bg-[#121212] p-8 text-white md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(30rem 18rem at 80% 0%, rgba(198,166,100,0.35), transparent 60%)",
            }}
          />
          <p className="relative font-mono text-[11px] uppercase tracking-[0.24em] text-[#C6A664]">
            Preview weekend
          </p>
          <h2
            id="atelier-title"
            className="relative mt-4 font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight md:text-5xl md:leading-[1.05]"
            style={{ textWrap: "balance" }}
          >
            Try it on skin before you decide.
          </h2>
          <p className="relative mt-4 max-w-[42ch] leading-relaxed text-white/65">
            Book a private trial. A stylist brings the shortlist, you wear each
            necklace in daylight and motion. Complimentary studs with every
            preview order.
          </p>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#appointment"
              onClick={() => track("appointment_click", { location: "atelier" })}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white py-2 pl-8 pr-2 font-medium text-[#121212] active:scale-[0.98]"
            >
              <span className="py-2.5">Book a trial</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#121212]/10 transition-colors group-hover:bg-[#121212]/20">
                <ArrowRight size={18} weight="bold" aria-hidden="true" />
              </span>
            </a>
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 font-medium text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Use code B1G1
            </a>
          </div>
          <div className="relative mt-10 grid grid-cols-1 gap-5 border-t border-white/10 pt-8 min-[420px]:grid-cols-3 min-[420px]:gap-4">
            {assurances.map((a) => (
              <div key={a.title}>
                <a.icon size={22} aria-hidden="true" className="text-[#C6A664]" />
                <p className="mt-2 text-sm font-semibold">{a.title}</p>
                <p className="text-xs text-white/55">{a.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="atelier-panel flex flex-col overflow-hidden rounded-[2rem] border border-[#121212]/10 bg-white">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#F3E7D7]">
            <div className="atelier-zoom absolute inset-0">
              <Image
                src="/atelier-muse.jpg"
                alt="Model laughing while wearing a layered necklace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            <span className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
              <Star size={13} weight="fill" className="text-[#C6A664]" aria-hidden="true" />
              4.8 · 6,200+ reviews
            </span>
          </div>
          <div
            className="flex flex-1 flex-col justify-between gap-6 p-8 md:p-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div key={qi} className="quote-in flex items-start gap-4">
              <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#121212]/10">
                <Image
                  src={`/${q.seed}.jpg`}
                  alt={q.alt}
                  fill
                  sizes="56px"
                  loading="lazy"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="text-lg font-light leading-relaxed md:text-xl">
                  {q.text}
                </p>
                <p className="mt-3 text-sm font-semibold">{q.name}</p>
                <p className="text-xs text-[#121212]/55">{q.detail}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setQi(i)}
                    aria-label={`Show review ${i + 1}`}
                    className="flex min-h-[44px] min-w-[24px] items-center justify-center"
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-2 rounded-full transition-all duration-300 ${
                        i === qi ? "w-8 bg-[#121212]" : "w-2 bg-[#121212]/20"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setQi((qi + quotes.length - 1) % quotes.length)}
                  aria-label="Previous review"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#121212]/15 transition-all hover:bg-[#121212] hover:text-white"
                >
                  <CaretLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setQi((qi + 1) % quotes.length)}
                  aria-label="Next review"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#121212]/15 transition-all hover:bg-[#121212] hover:text-white"
                >
                  <CaretRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
