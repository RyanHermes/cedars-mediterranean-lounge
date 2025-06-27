"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const singers = [
  {
    name: "George Jabbour",
    image: "/assets/images/singers/george jabbour.jpg",
  },
  {
    name: "Jacqueline Francis",
    image: "/assets/images/singers/jacqueline francis.jpg",
  },
  { name: "Nasser Deeb", image: "/assets/images/singers/nasser deeb.jpg" },
  {
    name: "Natasha Nakhle",
    image: "/assets/images/singers/natasha nakhle.jpg",
  },
  { name: "Salim Barakat", image: "/assets/images/singers/salim barakat.jpg" },
  {
    name: "Wissam El Hajj",
    image: "/assets/images/singers/wissam el hajj.jpg",
  },
];

export default function SingersPage() {
  const [visibleSingers, setVisibleSingers] = useState<string[]>([]);

  useEffect(() => {
    const timers = singers.map((singer, index) =>
      setTimeout(() => {
        setVisibleSingers((prev) => [...prev, singer.name]);
      }, index * 150),
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#121212] text-[#eae0d5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#f4ce86] mb-4 tracking-tight">
          Featured Singers
        </h1>
        <p className="text-lg sm:text-xl text-[#c5b8a5] max-w-3xl mx-auto mb-12">
          Get ready for an unforgettable musical experience with our talented
          lineup of artists.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {singers.map((singer) => (
            <div
              key={singer.name}
              className={`
                relative rounded-xl overflow-hidden shadow-2xl 
                transform transition-all duration-500 ease-in-out
                hover:scale-105 hover:shadow-[0_0_25px_rgba(244,206,134,0.5)]
                ${
                  visibleSingers.includes(singer.name)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            >
              <div className="relative h-96 w-full">
                <Image
                  src={singer.image}
                  alt={singer.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  {singer.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link
            href="/festival"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#f4ce86] to-[#e6b86a] text-[#181818] font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            &larr; Back to Festival
          </Link>
        </div>
      </div>
    </div>
  );
}
