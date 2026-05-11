import fs from "fs";
import Image from "next/image";
import path from "path";

import Card from "@/components/Card";
import GalleryMosaic from "@/components/GalleryMosaic";

import { FESTIVAL, isFestivalActive } from "./festival/festival-config";

export const revalidate = 86400;

function getImages() {
  const imagesDir = path.join(process.cwd(), "public/assets/images/carousel");
  const files = fs.readdirSync(imagesDir);

  return files
    .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map((file) => `/assets/images/carousel/${file}`);
}

export default function Home() {
  const images = getImages();
  const showFestival = isFestivalActive();

  return (
    <>
      {/* Hero */}
      <section className="relative px-4 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink to-olive-deep/60"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mx-auto mb-10 w-64 sm:w-80 bg-bone rounded-2xl ring-1 ring-gold/30 shadow-glow p-6">
            <Image
              src="/assets/images/logo.JPG"
              alt="Cedar's Mediterranean Breakfast Lounge"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Windsor, Ontario
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-gold tracking-tight leading-[1.05] mb-6">
            Cedar&apos;s Mediterranean Lounge
          </h1>
          <p className="text-lg sm:text-xl text-bone-muted leading-relaxed max-w-2xl mx-auto">
            Authentic flavors, cozy ambiance, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="px-4 py-20 sm:py-24 bg-ink">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight mb-4">
              Events
            </h2>
            <p className="text-bone-muted max-w-2xl mx-auto">
              Join us for special events and cultural celebrations throughout
              the year.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Card
              href="/catering"
              title="Catering Services"
              tagline="Available for your events"
              cta="View catering menu"
            >
              Bring the taste of Cedar&apos;s to your special occasions. We
              offer a wide range of catering options for parties, gatherings,
              and corporate events.
            </Card>
            <Card
              href="/hall-rental"
              title="Hall Rental"
              tagline="Host your event with us"
              cta="See details"
            >
              Our beautiful hall is available for private events, parties, and
              gatherings. Contact us to book your date.
            </Card>
            {showFestival && (
              <Card
                href="/festival"
                title={FESTIVAL.shortName}
                tagline={FESTIVAL.dateRange}
                cta="View festival"
              >
                Join the {FESTIVAL.name} &mdash; Lebanese food, live music, folk
                dance, kids games, and more.
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-4 py-20 sm:py-24 bg-ink-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight mb-4">
              Gallery
            </h2>
            <p className="text-bone-muted max-w-2xl mx-auto">
              A glimpse of our ambiance and culinary delights. Tap any photo to
              browse the full gallery.
            </p>
          </div>
          <GalleryMosaic images={images} />
        </div>
      </section>

      {/* Location */}
      <section id="location" className="px-4 py-20 sm:py-24 bg-ink">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight mb-4">
              Visit Us
            </h2>
            <p className="text-bone-muted max-w-2xl mx-auto">
              Find us in Windsor &mdash; enter through the parking lot door.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-bone/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.242163168727!2d-83.03321532444136!3d42.29617897919061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2b85f50dd0d1%3A0xa1f5c8df1fbe52af!2s166%20Tecumseh%20Rd%20W%2C%20Windsor%2C%20ON%20N8X%201E9%2C%20Canada!5e0!3m2!1sen!2sus!4v1674192318769!5m2!1sen!2sus"
              title="Map to Cedar's Mediterranean Lounge"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            />
          </div>
        </div>
      </section>

      {/* Hours */}
      <section
        id="hours"
        className="px-4 py-20 sm:py-24 bg-ink-900/50 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight mb-4">
            Open Daily
          </h2>
          <p className="text-bone-muted mb-10">
            From breakfast through late night &mdash; we&apos;re ready when you
            are.
          </p>
          <div className="bg-ink p-8 rounded-2xl ring-1 ring-gold/30 shadow-glow">
            <p className="font-display text-2xl sm:text-3xl text-gold mb-3">
              Breakfast · Lunch · Dinner · Late Night
            </p>
            <p className="text-bone leading-relaxed mb-6">
              Pop in, call ahead, or order delivery.
            </p>
            <a
              href="tel:+12267397240"
              className="inline-block bg-gold text-ink font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gold-hover transition-colors"
            >
              Call (226) 739-7240
            </a>
          </div>
        </div>
      </section>

      {/* Story / Video */}
      <section id="story" className="px-4 py-20 sm:py-24 bg-ink">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight mb-4">
              Our Story
            </h2>
            <p className="text-bone-muted max-w-2xl mx-auto">
              From the kitchen to the dining room, a glimpse of what makes
              Cedar&apos;s special.
            </p>
          </div>
          <div className="max-w-[360px] mx-auto rounded-2xl overflow-hidden ring-1 ring-bone/10 shadow-glow">
            <video
              className="w-full h-auto block"
              controls
              style={{ aspectRatio: "9/16" }}
            >
              <source src="/assets/videos/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-4 py-20 sm:py-24 bg-ink-900/50 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight mb-4">
            Stay in Touch
          </h2>
          <p className="text-bone-muted mb-10">
            We&apos;d love to hear from you. Reach out or follow along.
          </p>
          <ul className="space-y-3 text-bone mb-10">
            <li className="flex items-center justify-center gap-2">
              <span aria-hidden>📍</span> 166 Tecumseh Rd W, Windsor, ON N8X 1E9
            </li>
            <li className="flex items-center justify-center gap-2">
              <span aria-hidden>📞</span>{" "}
              <a
                href="tel:+12267397240"
                className="hover:text-gold transition-colors"
              >
                (226) 739-7240
              </a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span aria-hidden>📧</span>{" "}
              <a
                href="mailto:cedar.m.b.lounge@gmail.com"
                className="hover:text-gold transition-colors"
              >
                cedar.m.b.lounge@gmail.com
              </a>
            </li>
          </ul>
          <a
            href="https://www.facebook.com/cedarsmediterraneanlounge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1877F2] text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            <Image
              src="/assets/icons/facebook-logo.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            Follow us on Facebook
          </a>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="px-4 py-20 sm:py-24 bg-ink text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight mb-4">
            Order Delivery
          </h2>
          <p className="text-bone-muted mb-10">
            Enjoy your favorite dishes from the comfort of your home, through
            our trusted delivery partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ubereats.com/ca/store/cedars-mediterranean-breakfast-lounge/orOBLU8pSLqgCwry8eLenQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#05A357] text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              <Image
                src="/assets/icons/ubereats-logo.svg"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              Order on Uber Eats
            </a>
            <a
              href="https://www.doordash.com/store/cedar's-mediterranean-breakfast-lounge-windsor-32283435/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#ef3b24] font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              <Image
                src="/assets/icons/doordash-logo.svg"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              Order on DoorDash
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
