"use client";

import {
  Diamond,
  ArrowRight,
  MapPin,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const cols = [
  {
    title: "Shop",
    links: ["Necklaces", "Earrings", "Rings", "Bangles", "Mangalsutra"],
    href: "#shop",
  },
  {
    title: "Help",
    links: ["Track order", "Exchanges", "Warranty", "Care guide", "FAQs"],
    href: "#atelier",
  },
  {
    title: "House",
    links: ["Our story", "Stores", "Gifting", "Contact"],
    href: "#appointment",
  },
];

export default function Footer() {
  return (
    <footer
      id="appointment"
      aria-labelledby="appointment-title"
      className="relative w-full overflow-hidden bg-[#121212] text-[#FAF7F2]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(36rem 20rem at 50% 0%, rgba(198,166,100,0.22), transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-20 min-[380px]:px-6 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <h2
              id="appointment-title"
              className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight min-[380px]:text-5xl md:text-6xl md:leading-[1.03]"
              style={{ textWrap: "balance" }}
            >
              Get the drop before it sells out.
            </h2>
            <p className="mt-4 max-w-[44ch] leading-relaxed text-white/60">
              One email a week. New necklaces, restocks and private previews.
              No noise.
            </p>
          </div>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="h-14 min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-6 text-white placeholder:text-white/40 focus:border-[#C6A664]/60 focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FAF7F2] py-2 pl-8 pr-2 font-medium text-[#121212] active:scale-[0.98]"
            >
              <span className="py-2.5">Subscribe</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#121212]/10 transition-colors group-hover:bg-[#121212]/20">
                <ArrowRight size={17} weight="bold" aria-hidden="true" />
              </span>
            </button>
          </form>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-10 border-t border-white/10 pt-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 text-[13px] font-bold tracking-[0.22em]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C6A664] text-[#121212]">
                <Diamond size={15} weight="fill" aria-hidden="true" />
              </span>
              SWASTIK
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-white/60">
              <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
              Flagship studio · private trials by appointment
            </p>
            <div className="mt-5 flex gap-2">
              {[InstagramLogo, FacebookLogo, YoutubeLogo].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-white/40 hover:text-white sm:h-10 sm:w-10"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                {c.title}
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                {c.links.map((x) => (
                  <a
                    key={x}
                    href={c.href}
                    className="w-fit text-[15px] text-white/75 transition-colors hover:text-white"
                  >
                    {x}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 font-mono text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Swastik Jewels. All rights reserved.</span>
          <span>BIS hallmarked · UPI · Cards · Netbanking</span>
        </div>
      </div>
    </footer>
  );
}
