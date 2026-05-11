import type { Metadata } from "next";

import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hall Rental | Cedar's Mediterranean Lounge",
  description:
    "Rent our beautiful hall in Windsor, Ontario for weddings, birthdays, corporate events, and private gatherings. Tables, chairs, sound system, and catering options available.",
};

export const revalidate = 86400;

export default function HallRentalPage() {
  return (
    <>
      <PageHero
        eyebrow="Venue"
        title="Hall Rental"
        subtitle="Host your special events in our beautiful venue."
      />

      <div className="px-4 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-ink-900 rounded-2xl ring-1 ring-bone/10 p-8">
            <h2 className="font-display text-2xl sm:text-3xl text-gold tracking-tight mb-4">
              Event Venue
            </h2>
            <p className="text-bone-muted mb-6 leading-relaxed">
              Our hall is perfect for weddings, birthdays, corporate events, and
              more. We offer a spacious and elegant setting for your guests.
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-6 gap-y-3 text-bone">
              <dt className="font-semibold text-gold">Capacity</dt>
              <dd className="text-bone-muted">Contact us for details</dd>
              <dt className="font-semibold text-gold">Amenities</dt>
              <dd className="text-bone-muted">
                Tables, chairs, sound system, and catering options available.
              </dd>
            </dl>
          </section>

          <section className="bg-ink-900 rounded-2xl ring-1 ring-bone/10 p-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl text-gold tracking-tight mb-4">
              Book Your Event
            </h2>
            <p className="text-bone-muted mb-8 leading-relaxed max-w-md mx-auto">
              Ready to plan your event? Contact us today to check availability
              and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+12267397240"
                className="inline-block bg-gold text-ink font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gold-hover transition-colors"
              >
                Call (226) 739-7240
              </a>
              <a
                href="mailto:cedar.m.b.lounge@gmail.com"
                className="inline-block bg-ink ring-1 ring-bone/20 text-bone font-semibold px-8 py-3 rounded-full hover:ring-gold/40 hover:text-gold transition-all"
              >
                Email us
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
