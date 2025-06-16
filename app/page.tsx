import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import path from "path";

import Carousel from "@/components/Carousel";

function getImages() {
  const imagesDir = path.join(process.cwd(), "public/assets/images/carousel");
  const files = fs.readdirSync(imagesDir);

  return files
    .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map((file) => `/assets/images/carousel/${file}`);
}

export default function Home() {
  const images = getImages();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-[#121212] text-[#eae0d5]">
      <section className="relative w-full py-16 text-center bg-gradient-to-b from-[#181818] to-[#3a5a40] px-4">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#f4ce86] drop-shadow-lg mb-4">
            Cedar&apos;s Mediterranean Lounge
          </h1>
          <p className="text-lg sm:text-xl text-[#f4efe8]">
            Authentic flavors, cozy ambiance, and unforgettable moments.
          </p>
        </div>
        <div className="relative z-10 flex items-center justify-center mx-auto mt-8">
          <div className="w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-b from-[#556b2f] to-[#3a5a40] rounded-full flex items-center justify-center shadow-lg border-4 border-[#8b4513]">
            <div className="w-56 h-56 sm:w-68 sm:h-68 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/logo.JPG"
                alt="Cedar's Mediterranean Lounge Logo"
                width={250}
                height={250}
                className="object-contain scale-90 w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="events"
        className="w-full py-10 bg-[#181818] px-4 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#f4ce86]">
          Events
        </h2>
        <p className="text-sm sm:text-base text-[#eae0d5] mb-6">
          Join us for special events and cultural celebrations throughout the
          year.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/june-22-event"
            className="block bg-[#f4ce86] p-6 rounded-lg border-2 border-[#8b4513] hover:border-white hover:scale-105 transition-all duration-300 md:col-span-2"
          >
            <h3 className="text-xl font-semibold text-[#181818] mb-3">
              Festival Sneak Peek!
            </h3>
            <p className="text-[#181818] mb-2 font-bold">June 22nd</p>
            <p className="text-sm text-[#3a3a3a] mb-3">
              Get a sneak peek of the upcoming festival. Join us for fun
              activities and food samples!
            </p>
            <p className="text-sm text-[#181818] font-semibold mt-3">
              Click for details &rarr;
            </p>
          </Link>

          <a
            href="/festival"
            className="block bg-[#121212] p-6 rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-[#f4ce86] mb-3">
              Lebanese Festival
            </h3>
            <p className="text-[#eae0d5] mb-2">June 27th - June 29th</p>
            <p className="text-sm text-[#f4efe8] mb-3">
              Celebrate with us during this special cultural festival featuring
              traditional Mediterranean cuisine, music, and entertainment
            </p>
            <p className="text-sm text-[#f4ce86] mt-3">
              Click to view festival details &rarr;
            </p>
          </a>
          <a
            href="/catering"
            className="block bg-[#121212] p-6 rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-[#f4ce86] mb-3">
              Catering Services
            </h3>
            <p className="text-[#eae0d5] mb-2">Available for your events</p>
            <p className="text-sm text-[#f4efe8] mb-3">
              Bring the taste of Cedar&apos;s to your special occasions. We
              offer a wide range of catering options for parties, gatherings,
              and corporate events.
            </p>
            <p className="text-sm text-[#f4ce86] mt-3">
              Click for full catering menu and to discuss your event needs!
              &rarr;
            </p>
          </a>
          <Link
            href="/special-fundraising-event"
            className="block bg-[#121212] p-6 rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300 md:col-span-2"
          >
            <h3 className="text-xl font-semibold text-[#f4ce86] mb-3">
              Special Fundraising Event
            </h3>
            <p className="text-sm text-[#f4efe8]">
              Join us for a special fundraising event.
            </p>
            <p className="text-sm text-[#f4ce86] mt-3">
              Click to learn more &rarr;
            </p>
          </Link>
        </div>
      </section>
      <section id="gallery" className="w-full py-10 bg-[#121212] px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#f4ce86]">
          Gallery
        </h2>
        <p className="text-sm sm:text-base text-[#eae0d5] mb-6">
          Explore our ambiance and culinary delights.
        </p>
        <Carousel images={images} />
      </section>
      <section
        id="location"
        className="w-full py-10 bg-[#181818] px-4 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#f4ce86]">
          Our Location
        </h2>
        <p className="text-sm sm:text-base text-[#eae0d5] mb-6">
          Visit us at our cozy location in Windsor.
        </p>
        <p className="text-sm sm:text-base text-[#eae0d5] mb-6">
          Enter through the parking lot door.
        </p>
        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-[#8b4513]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.242163168727!2d-83.03321532444136!3d42.29617897919061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2b85f50dd0d1%3A0xa1f5c8df1fbe52af!2s166%20Tecumseh%20Rd%20W%2C%20Windsor%2C%20ON%20N8X%201E9%2C%20Canada!5e0!3m2!1sen!2sus!4v1674192318769!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96"
          ></iframe>
        </div>
      </section>
      <section
        id="hours"
        className="w-full py-10 bg-[#181818] px-4 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#f4ce86]">
          Hours of Operation
        </h2>
        <p className="text-sm sm:text-base text-[#eae0d5] mb-8">
          Join us during our opening hours for a delightful Mediterranean
          experience.
        </p>
        <div className="max-w-md mx-auto bg-[#202020] rounded-lg p-6 border-2 border-[#8b4513] shadow-lg">
          <div className="grid grid-cols-2 gap-3 text-[#f4efe8]">
            <div className="text-right font-semibold">Sunday:</div>
            <div className="text-left text-[#f4ce86]">Closed</div>

            <div className="text-right font-semibold">Monday:</div>
            <div className="text-left text-[#f4ce86]">Closed</div>

            <div className="text-right font-semibold">Tuesday:</div>
            <div className="text-left text-[#f4ce86]">Closed</div>

            <div className="text-right font-semibold">Wednesday:</div>
            <div className="text-left text-[#f4ce86]">Closed</div>

            <div className="text-right font-semibold">Thursday:</div>
            <div className="text-left text-[#f4ce86]">9 a.m. – 6 p.m.</div>

            <div className="text-right font-semibold">Friday:</div>
            <div className="text-left text-[#f4ce86]">9 a.m. – 6 p.m.</div>

            <div className="text-right font-semibold">Saturday:</div>
            <div className="text-left text-[#f4ce86]">9 a.m. – 6 p.m.</div>
          </div>
        </div>
      </section>
      <section id="videos" className="w-full py-10 px-4 bg-[#181818]">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#f4ce86] text-center">
          Our Story
        </h2>
        <p className="text-sm sm:text-base text-[#eae0d5] mb-8 text-center max-w-2xl mx-auto">
          Experience the heart and soul of Cedar&apos;s Mediterranean Lounge
          through our videos. From our authentic cooking process to the warm
          atmosphere, get a glimpse of what makes us special.
        </p>
        <div className="max-w-[360px] mx-auto">
          <video
            className="w-full h-auto rounded-lg border-2 border-[#8b4513]"
            controls
            style={{ aspectRatio: "9/16" }}
          >
            <source src="/assets/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section
        id="contact"
        className="w-full py-10 bg-[#121212] px-4 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#f4ce86]">
          Contact Us
        </h2>
        <p className="text-sm sm:text-base text-[#eae0d5] mb-4">
          We&apos;d love to hear from you. Reach out or visit us!
        </p>
        <div className="text-sm sm:text-base text-[#f4efe8] mb-6">
          <p className="mb-2">📍 166 Tecumseh Rd W, Windsor, ON N8X 1E9</p>
          <p className="mb-2">📞 (226) 739-7240</p>
          <p>📧 cedar.m.b.lounge@gmail.com</p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.facebook.com/cedarsmediterraneanlounge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1877F2] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <Image
              src="/assets/icons/facebook-logo.png"
              alt="Facebook"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            Follow us on Facebook
          </a>
        </div>
      </section>
      <section
        id="delivery"
        className="w-full py-10 bg-[#121212] px-4 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#f4ce86]">
          Order Delivery
        </h2>
        <p className="text-sm sm:text-base text-[#eae0d5] mb-6">
          Enjoy your favorite dishes from the comfort of your home! Order now
          through our trusted delivery partners.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://www.ubereats.com/ca/store/cedars-mediterranean-breakfast-lounge/orOBLU8pSLqgCwry8eLenQ"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#05A357] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <Image
              src="/assets/icons/ubereats-logo.svg"
              alt="Uber Eats"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            Order on Uber Eats
          </a>
          <a
            href="https://www.doordash.com/store/cedar's-mediterranean-breakfast-lounge-windsor-32283435/"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#ef3b24] font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <Image
              src="/assets/icons/doordash-logo.svg"
              alt="DoorDash"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            Order on DoorDash
          </a>
        </div>
      </section>
    </div>
  );
}
