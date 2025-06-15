import Image from "next/image";
import Link from "next/link";

export default function FestivalPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#eae0d5] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Title and Introduction */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#f4ce86] mb-4">
            St. Peter&apos;s Annual Festival
          </h1>
          <p className="text-lg md:text-xl text-[#eae0d5] max-w-3xl mx-auto">
            Join us for a vibrant celebration of community, culture, and fun!
            Our annual festival brings together amazing music, delicious food,
            exciting games for kids, and much more. Explore what we have in
            store for you this year.
          </p>
        </div>

        {/* Festival Poster */}
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/assets/images/festival.jpeg"
            alt="St. Peter's Festival Poster"
            width={600}
            height={800}
            className="rounded-lg shadow-lg border-2 border-[#8b4513]"
            priority
          />
        </div>

        {/* Festival Features Grid */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#f4ce86]">
            Festival Highlights
          </h2>
          <p className="text-md text-[#eae0d5]">
            Discover all the exciting activities and offerings at this
            year&apos;s festival.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Singers Button - Disabled */}
          <div
            aria-disabled="true"
            className="w-full h-48 flex items-center justify-center bg-[#2a2a2a] rounded-lg border-2 border-[#5a5a5a] cursor-not-allowed opacity-60"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#a0a0a0]">Singers</h3>
              <p className="text-sm text-[#a0a0a0]">TBD</p>
            </div>
          </div>

          {/* Schedule Button - Disabled */}
          <div
            aria-disabled="true"
            className="w-full h-48 flex items-center justify-center bg-[#2a2a2a] rounded-lg border-2 border-[#5a5a5a] cursor-not-allowed opacity-60"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#a0a0a0]">Schedule</h3>
              <p className="text-sm text-[#a0a0a0]">TBD</p>
            </div>
          </div>

          {/* Kids Zone Button */}
          <Link
            href="/festival/kids-zone"
            className="w-full h-48 flex items-center justify-center bg-[#181818] rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300"
            legacyBehavior>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#f4ce86]">
                Kids Zone
              </h3>
              <p className="text-sm text-[#eae0d5]">
                Fun activities for children
              </p>
            </div>
          </Link>

          {/* Food Menu Button - Disabled */}
          <div
            aria-disabled="true"
            className="w-full h-48 flex items-center justify-center bg-[#2a2a2a] rounded-lg border-2 border-[#5a5a5a] cursor-not-allowed opacity-60"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#a0a0a0]">
                Food Menu
              </h3>
              <p className="text-sm text-[#a0a0a0]">TBD</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#181818] text-[#f4ce86] rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
