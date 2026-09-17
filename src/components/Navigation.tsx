"use client";

import { useState } from "react";
import {
  Diamond,
  MagnifyingGlass,
  Heart,
  Handbag,
  List,
  X,
  MapPin,
} from "@phosphor-icons/react";

const links = [
  { href: "#shop", label: "Bestsellers" },
  { href: "#categories", label: "Categories" },
  { href: "#atelier", label: "Atelier" },
  { href: "#appointment", label: "Visit" },
];

const ticker = [
  "Complimentary studs on orders above Rs 2,999",
  "BIS hallmarked · Skin-safe · Waterproof",
  "Private trials by appointment",
  "Easy 7-day exchanges",
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState("400001");

  return (
    <>
      <div className="w-full overflow-hidden bg-[#121212] py-2 text-white">
        <div className="marquee-track items-center gap-0">
          {[0, 1].map((half) => (
            <div
              key={half}
              aria-hidden={half === 1}
              className="flex shrink-0 items-center"
            >
              {ticker.map((t) => (
                <span
                  key={`${half}-${t}`}
                  className="flex items-center gap-3 whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/75"
                >
                  <Diamond
                    size={10}
                    weight="fill"
                    className="text-[#C6A664]"
                    aria-hidden="true"
                  />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="sticky top-3 z-50 mx-auto w-full max-w-7xl px-4 min-[380px]:px-6">
        <header className="nav-fade rounded-full border border-[#121212]/10 bg-white/80 shadow-[0_12px_40px_rgba(18,18,18,0.08)] backdrop-blur-xl">
          <nav
            aria-label="Main navigation"
            className="relative flex h-16 w-full items-center justify-between gap-3 px-4 sm:px-5"
          >
            <div className="hidden flex-1 items-center gap-7 lg:flex">
              {links.slice(0, 2).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-[#121212]/65 transition-colors duration-300 hover:text-[#121212]"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a
              href="#top"
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5"
              aria-label="Swastik Jewels home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#121212] text-[#C6A664]">
                <Diamond size={18} weight="fill" aria-hidden="true" />
              </span>
              <span className="hidden text-[13px] font-bold tracking-[0.22em] min-[420px]:inline">
                SWASTIK&nbsp;JEWELS
              </span>
            </a>

            <div className="flex flex-1 items-center justify-end gap-1.5">
              <form
                className="mr-1 hidden items-center gap-1.5 rounded-full bg-[#121212]/5 px-3.5 py-2 text-[#121212]/60 transition-colors focus-within:bg-[#121212]/10 xl:flex"
                onSubmit={(e) => e.preventDefault()}
              >
                <MapPin size={13} aria-hidden="true" className="shrink-0" />
                <label htmlFor="nav-pincode" className="sr-only">
                  Delivery pincode
                </label>
                <input
                  id="nav-pincode"
                  value={pin}
                  onChange={(e) =>
                    setPin(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="Pincode"
                  aria-label="Delivery pincode"
                  className="w-[3.8rem] bg-transparent font-mono text-base outline-none placeholder:text-[#121212]/35 min-[420px]:text-[11px]"
                />
              </form>
              {links.slice(2).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hidden px-2 text-sm font-medium text-[#121212]/65 transition-colors hover:text-[#121212] lg:inline"
                >
                  {l.label}
                </a>
              ))}
              <button
                type="button"
                aria-label="Search"
                className="flex h-11 w-11 items-center justify-center rounded-full text-[#121212]/70 transition-colors hover:bg-[#121212]/5 hover:text-[#121212] sm:h-10 sm:w-10"
              >
                <MagnifyingGlass size={19} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Wishlist"
                className="hidden h-11 w-11 items-center justify-center rounded-full text-[#121212]/70 transition-colors hover:bg-[#121212]/5 hover:text-[#121212] sm:flex sm:h-10 sm:w-10"
              >
                <Heart size={19} aria-hidden="true" />
              </button>
              <a
                href="#shop"
                aria-label="Shopping bag"
                className="flex h-11 items-center gap-2 rounded-full bg-[#121212] px-4 text-sm font-medium text-white transition-transform duration-300 active:scale-95 sm:h-10"
              >
                <Handbag size={17} aria-hidden="true" />
                <span className="hidden sm:inline">Bag</span>
              </a>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#121212]/10 text-[#121212] sm:h-10 sm:w-10 lg:hidden"
              >
                {open ? (
                  <X size={19} aria-hidden="true" />
                ) : (
                  <List size={19} aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>

          <div
            className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
              open ? "max-h-72" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-1 px-4 pb-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-[#121212]/80 transition-colors hover:bg-[#121212]/5"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
