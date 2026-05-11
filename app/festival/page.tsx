import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "@/components/PageHero";

import { FESTIVAL, isFestivalActive } from "./festival-config";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: `${FESTIVAL.name} | Cedar's Mediterranean Lounge`,
  description: `Join the ${FESTIVAL.name} in Windsor, Ontario, ${FESTIVAL.dateRange}. ${FESTIVAL.highlights.join(", ")}.`,
};

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.242163168727!2d-83.03321532444136!3d42.29617897919061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2b85f50dd0d1%3A0xa1f5c8df1fbe52af!2s166%20Tecumseh%20Rd%20W%2C%20Windsor%2C%20ON%20N8X%201E9%2C%20Canada!5e0!3m2!1sen!2sus!4v1674192318769!5m2!1sen!2sus";

export default function FestivalPage() {
  if (!isFestivalActive()) notFound();

  return (
    <>
      <PageHero
        eyebrow="Annual Event"
        title={FESTIVAL.name}
        subtitle={`"${FESTIVAL.tagline}"`}
      />

      <div className="px-4 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div
                aria-hidden
                className="absolute -inset-6 bg-gradient-to-b from-gold/15 via-gold/5 to-transparent rounded-[2rem] blur-2xl"
              />
              <Image
                src={FESTIVAL.posterSrc}
                alt={`${FESTIVAL.name} poster`}
                width={FESTIVAL.posterWidth}
                height={FESTIVAL.posterHeight}
                className="relative rounded-2xl shadow-glow w-full h-auto"
                priority
              />
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight text-center mb-8">
              When
            </h2>
            <div className="bg-ink-900 rounded-2xl ring-1 ring-bone/10 p-8 max-w-2xl mx-auto">
              <ul className="divide-y divide-bone/5">
                {FESTIVAL.schedule.map((d) => (
                  <li
                    key={d.date}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="font-display text-xl text-gold">
                      {d.day}
                      <span className="text-bone-muted text-sm font-sans ml-2">
                        · {d.date}
                      </span>
                    </span>
                    <span className="text-bone-muted">{d.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight text-center mb-8">
              What to Expect
            </h2>
            <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {FESTIVAL.highlights.map((h) => (
                <li
                  key={h}
                  className="px-5 py-2.5 rounded-full bg-ink-900 ring-1 ring-bone/10 text-bone text-sm hover:ring-gold/30 transition-colors"
                >
                  {h}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight text-center mb-8">
              Where
            </h2>
            <div className="bg-ink-900 rounded-2xl ring-1 ring-bone/10 p-8 mb-6 text-center">
              <p className="text-bone mb-3">
                <span aria-hidden>📍</span> {FESTIVAL.address}
              </p>
              <p>
                <a
                  href={`tel:${FESTIVAL.phoneTel}`}
                  className="text-gold font-semibold hover:text-gold-hover transition-colors"
                >
                  <span aria-hidden>📞</span> {FESTIVAL.phoneDisplay}
                </a>
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-bone/10">
              <iframe
                src={MAP_SRC}
                title={`Map to ${FESTIVAL.name}`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              />
            </div>
          </section>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block text-bone-muted hover:text-gold transition-colors text-sm"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
