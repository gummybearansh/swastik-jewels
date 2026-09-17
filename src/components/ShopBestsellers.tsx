"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Star,
  Heart,
  Handbag,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Product = {
  name: string;
  detail: string;
  price: string;
  mrp: string;
  off: string;
  rating: string;
  reviews: string;
  tag?: string;
  seed: string;
  alt: string;
  cat: "Necklaces" | "Earrings" | "Rings";
};

const products: Product[] = [
  {
    name: "Round solitaire necklace",
    detail: "On-skin pendant · gold tone",
    price: "Rs 1,111",
    mrp: "Rs 3,998",
    off: "Bestseller",
    rating: "4.8",
    reviews: "1,128",
    tag: "Bestseller",
    seed: "prod-solitaire-necklace",
    alt: "Model wearing a round solitaire necklace",
    cat: "Necklaces",
  },
  {
    name: "Hearts all-over bracelet",
    detail: "Everyday charm stack",
    price: "Rs 999",
    mrp: "Rs 3,184",
    off: "Buy 4 at Rs 2,999",
    rating: "4.8",
    reviews: "2,667",
    tag: "Bestseller",
    seed: "prod-hearts-bracelet",
    alt: "Model wearing a hearts charm bracelet",
    cat: "Necklaces",
  },
  {
    name: "Athena solitaire hoops",
    detail: "Sleep-in hoops · hypoallergenic",
    price: "Rs 1,111",
    mrp: "Rs 3,226",
    off: "Bestseller",
    rating: "4.7",
    reviews: "1,311",
    tag: "Bestseller",
    seed: "prod-athena-hoops",
    alt: "Model wearing solitaire hoop earrings",
    cat: "Earrings",
  },
  {
    name: "Diamond huggie hoops",
    detail: "Close-fit huggies",
    price: "Rs 2,346",
    mrp: "Rs 3,351",
    off: "Flat 40% off",
    rating: "4.5",
    reviews: "793",
    seed: "prod-huggie-hoops",
    alt: "Model wearing diamond huggie hoop earrings",
    cat: "Earrings",
  },
  {
    name: "Classic emerald necklace",
    detail: "Green stone · layered",
    price: "Rs 999",
    mrp: "Rs 3,175",
    off: "Buy 4 at Rs 2,999",
    rating: "4.7",
    reviews: "914",
    seed: "prod-emerald-necklace",
    alt: "Model wearing an emerald pendant necklace",
    cat: "Necklaces",
  },
  {
    name: "Twist stone ring",
    detail: "Stackable crossover band",
    price: "Rs 1,199",
    mrp: "Rs 4,147",
    off: "Bestseller",
    rating: "4.7",
    reviews: "641",
    tag: "Bestseller",
    seed: "prod-twist-ring",
    alt: "Model wearing a crossover stone ring",
    cat: "Rings",
  },
  {
    name: "Bow pendant necklace",
    detail: "Delicate bow motif",
    price: "Rs 999",
    mrp: "Rs 2,499",
    off: "Buy 4 at Rs 2,999",
    rating: "4.7",
    reviews: "641",
    seed: "prod-bow-necklace",
    alt: "Model wearing a bow pendant necklace",
    cat: "Necklaces",
  },
  {
    name: "Love hug ring",
    detail: "Sculpted open band",
    price: "Rs 999",
    mrp: "Rs 3,226",
    off: "Buy 4 at Rs 2,999",
    rating: "4.8",
    reviews: "148",
    seed: "prod-hug-ring",
    alt: "Model wearing a sculpted hug ring",
    cat: "Rings",
  },
];

const tabs = ["All", "Necklaces", "Earrings", "Rings"] as const;

export default function ShopBestsellers() {
  const root = useRef<HTMLElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [wished, setWished] = useState<Set<string>>(new Set());

  const visible =
    tab === "All" ? products : products.filter((p) => p.cat === tab);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".shop-card").forEach((card, i) => {
          gsap.from(card, {
            y: 32,
            opacity: 0,
            duration: 0.8,
            delay: (i % 4) * 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 92%", once: true },
          });
        });
      }, root);
      return () => ctx.revert();
    },
    { scope: root }
  );

  const scrollBy = (dir: number) => {
    rail.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const toggleWish = (seed: string) => {
    setWished((prev) => {
      const next = new Set(prev);
      if (next.has(seed)) next.delete(seed);
      else next.add(seed);
      return next;
    });
  };

  return (
    <section
      id="shop"
      ref={root}
      aria-labelledby="shop-title"
      className="relative w-full bg-white py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 min-[380px]:px-6">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-xl">
            <h2
              id="shop-title"
              className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight md:text-5xl"
              style={{ textWrap: "balance" }}
            >
              Most bought, never boxed.
            </h2>
            <p className="mt-3 text-lg text-[#121212]/60">
              The pieces women re-order and gift. Tap a tab, add to bag.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll products left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#121212]/15 transition-all hover:bg-[#121212] hover:text-white"
            >
              <CaretLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll products right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#121212]/15 transition-all hover:bg-[#121212] hover:text-white"
            >
              <CaretRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 active:scale-95 ${
                tab === t
                  ? "bg-[#121212] text-white"
                  : "border border-[#121212]/15 bg-transparent text-[#121212]/65 hover:border-[#121212]/40 hover:text-[#121212]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div
          ref={rail}
          className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 min-[380px]:-mx-6 min-[380px]:px-6"
        >
          {visible.map((p) => (
            <article
              key={p.seed}
              className="shop-card group w-[240px] shrink-0 snap-start overflow-hidden rounded-3xl border border-[#121212]/10 bg-[#FAF7F2] transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(18,18,18,0.12)] sm:w-[280px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F3E7D7]">
                <Image
                  src={`/${p.seed}.jpg`}
                  alt={p.alt}
                  fill
                  sizes="280px"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {p.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#121212] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {p.tag}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => toggleWish(p.seed)}
                  aria-label={`Wishlist ${p.name}`}
                  aria-pressed={wished.has(p.seed)}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow backdrop-blur transition-transform active:scale-90"
                >
                  <Heart
                    size={17}
                    weight={wished.has(p.seed) ? "fill" : "regular"}
                    className={
                      wished.has(p.seed) ? "text-[#8a6f35]" : "text-[#121212]"
                    }
                    aria-hidden="true"
                  />
                </button>
                <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold backdrop-blur">
                  <Star
                    size={12}
                    weight="fill"
                    className="text-[#C6A664]"
                    aria-hidden="true"
                  />
                  {p.rating} · {p.reviews}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a6f35]">
                  {p.off}
                </p>
                <h3 className="mt-1.5 font-medium leading-snug">{p.name}</h3>
                <p className="mt-0.5 text-sm text-[#121212]/55">{p.detail}</p>
                <p className="mt-2.5 flex items-baseline gap-2">
                  <span className="text-lg font-semibold">{p.price}</span>
                  <span className="text-sm text-[#121212]/40 line-through">
                    {p.mrp}
                  </span>
                </p>
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-[#121212]/15 py-3 text-sm font-medium transition-all duration-300 group-hover:border-[#121212] group-hover:bg-[#121212] group-hover:text-white active:scale-[0.98]"
                >
                  <Handbag size={16} aria-hidden="true" />
                  Add to bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
