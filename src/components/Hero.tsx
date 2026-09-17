"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Star, Drop, ShieldCheck } from "@phosphor-icons/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  { label: "Necklaces", file: "/cat-necklace.jpg" },
  { label: "Earrings", file: "/cat-earrings.jpg" },
  { label: "Rings", file: "/cat-rings.jpg" },
  { label: "Bangles", file: "/cat-bangles.jpg" },
  { label: "Mangalsutra", file: "/cat-mangalsutra.jpg" },
  { label: "Men", file: "/cat-men.jpg" },
];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-h1", { y: 40, opacity: 0, duration: 1 }, 0.05)
          .from(".hero-sub", { y: 26, opacity: 0, duration: 0.9 }, 0.25)
          .from(".hero-cta", { y: 22, opacity: 0, duration: 0.8 }, 0.4)
          .from(".hero-proof", { y: 16, opacity: 0, duration: 0.7 }, 0.52)
          .from(
            ".hero-visual",
            { y: 48, opacity: 0, scale: 0.97, duration: 1.1 },
            0.2
          )
          .from(".hero-chip", { y: 18, opacity: 0, duration: 0.7, stagger: 0.12 }, 0.55)
          .from(".hero-cat", { y: 22, opacity: 0, duration: 0.6, stagger: 0.06 }, 0.6);

        gsap.to(".hero-visual-inner", {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-main",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }, root);
      return () => ctx.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative w-full overflow-hidden bg-[#FAF7F2]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52rem 30rem at 85% -5%, rgba(198,166,100,0.22), transparent 60%), radial-gradient(40rem 26rem at -10% 30%, rgba(243,231,215,0.9), transparent 60%)",
        }}
      />

      <section
        id="top"
        aria-labelledby="hero-title"
        className="hero-main relative w-full"
      >
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-10 pt-8 min-[380px]:px-6 md:pt-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="hero-proof inline-flex items-center gap-2 rounded-full border border-[#121212]/10 bg-white/70 py-1.5 pl-2 pr-4 text-sm backdrop-blur">
            <span className="flex items-center gap-0.5 rounded-full bg-[#121212] px-2.5 py-1 text-xs font-semibold text-white">
              <Star size={12} weight="fill" aria-hidden="true" /> 4.8
            </span>
            <span className="text-[#121212]/65">
              Loved by 12,000+ everyday wearers
            </span>
          </p>

          <h1
            id="hero-title"
            className="hero-h1 mt-6 w-full max-w-2xl font-[family-name:var(--font-display)] font-medium tracking-[-0.02em] text-[#121212]"
            style={{
              fontSize: "clamp(2.7rem, 4.6vw, 4.5rem)",
              lineHeight: "1.03",
              textWrap: "balance",
            }}
          >
            Jewellery you never take off.
          </h1>

          <p className="hero-sub mt-5 max-w-[44ch] text-lg leading-relaxed text-[#121212]/65">
            Necklaces, hoops and rings modelled on real women. Waterproof,
            skin-safe and made for office days to late dinners.
          </p>

          <div className="hero-cta mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#shop"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#121212] py-2 pl-8 pr-2 text-base font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              <span className="py-2.5">Shop bestsellers</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-white/30">
                <ArrowRight size={18} weight="bold" aria-hidden="true" />
              </span>
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center rounded-full border border-[#121212]/15 bg-white/60 px-8 py-4 text-base font-medium text-[#121212] backdrop-blur transition-all duration-500 hover:border-[#121212]/35 active:scale-[0.98]"
            >
              Shop by category
            </a>
          </div>

          <div className="hero-proof mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#121212]/60">
            <span className="flex items-center gap-2">
              <Drop size={16} aria-hidden="true" className="text-[#8a6f35]" />
              Waterproof shine
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} aria-hidden="true" className="text-[#8a6f35]" />
              BIS hallmarked
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#121212]/45">
              Rs 999 onwards
            </span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="hero-visual relative mx-auto w-full max-w-[440px]">
            <div className="absolute -left-6 top-10 hidden w-40 rotate-[-6deg] rounded-2xl border border-[#121212]/10 bg-white/85 p-3 shadow-[0_18px_50px_rgba(18,18,18,0.12)] backdrop-blur sm:block">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/hero-hoops.jpg"
                  alt="Model wearing gold hoop earrings"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-xs font-semibold">Athena hoops</p>
              <p className="text-xs text-[#121212]/55">Rs 1,111 · 4.7 rating</p>
            </div>

            <div className="hero-visual-inner relative overflow-hidden rounded-b-[2rem] rounded-t-[999px] border-[6px] border-white bg-[#F3E7D7] shadow-[0_30px_80px_rgba(18,18,18,0.16)]">
              <div className="relative aspect-[4/5]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/hero-muse.jpg"
                  aria-label="Model wearing layered Swastik Jewels necklaces"
                  className="h-full w-full object-cover contrast-105 saturate-[0.95]"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-6 pt-14">
                <p className="text-sm font-medium text-white">
                  Round solitaire necklace · on skin
                </p>
              </div>
            </div>

            <div className="hero-chip float-soft absolute -right-3 top-16 rounded-2xl border border-[#121212]/10 bg-white/90 px-4 py-3 shadow-[0_18px_50px_rgba(18,18,18,0.14)] backdrop-blur sm:-right-8">
              <p className="flex items-center gap-1 text-xs font-semibold">
                <Star size={13} weight="fill" className="text-[#C6A664]" aria-hidden="true" />
                4.8 · 2,667 reviews
              </p>
              <p className="mt-1 text-xs text-[#121212]/55">
                Hearts bracelet · Rs 999
              </p>
            </div>

            <div className="hero-chip float-soft-late absolute bottom-5 left-6 flex items-center gap-3 rounded-full border border-[#121212]/10 bg-[#121212] py-2 pl-2 pr-5 text-white shadow-xl">
              <span className="relative block h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/hero-detail.jpg"
                  alt="Macro of gold necklace detail"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="text-left">
                <span className="block text-xs font-semibold">
                  Buy 1 Get 1 · code B1G1
                </span>
                <span className="block text-[11px] text-white/60">
                  This weekend only
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section
        id="categories"
        aria-label="Shop by category"
        className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-8 min-[380px]:px-6 md:pt-10"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight md:text-3xl">
            Shop by category
          </h2>
          <a
            href="#shop"
            className="shrink-0 text-sm font-medium text-[#121212]/60 underline-offset-4 hover:text-[#121212] hover:underline"
          >
            View all
          </a>
        </div>
        <div className="no-scrollbar -mx-4 mt-6 flex gap-5 overflow-x-auto px-4 pb-2 min-[380px]:-mx-6 min-[380px]:px-6 md:justify-center">
          {categories.map((c) => (
            <a
              key={c.label}
              href="#shop"
              className="hero-cat group w-28 shrink-0 text-center sm:w-32"
            >
              <span className="block overflow-hidden rounded-full border border-[#121212]/10 bg-white p-1.5 transition-all duration-500 group-hover:border-[#C6A664]/60 group-hover:shadow-[0_14px_36px_rgba(198,166,100,0.25)]">
                <span className="relative block aspect-square overflow-hidden rounded-full">
                  <Image
                    src={c.file}
                    alt={`Model wearing ${c.label.toLowerCase()}`}
                    fill
                    sizes="128px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </span>
              </span>
              <span className="mt-2.5 block text-sm font-medium text-[#121212]/75 group-hover:text-[#121212]">
                {c.label}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
