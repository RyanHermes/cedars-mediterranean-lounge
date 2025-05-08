import Image from "next/image";
import Link from "next/link";

export default function FestivalPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#eae0d5] py-12 px-4">
      <div className="max-w-6xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Singers Button */}
          <Link
            href="/festival/singers"
            className="w-full h-48 flex items-center justify-center bg-[#181818] rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#f4ce86]">Singers</h3>
              <p className="text-sm text-[#eae0d5]">View Performers</p>
            </div>
          </Link>

          {/* Schedule Button */}
          <Link
            href="/festival/schedule"
            className="w-full h-48 flex items-center justify-center bg-[#181818] rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#f4ce86]">Schedule</h3>
              <p className="text-sm text-[#eae0d5]">View Event Times</p>
            </div>
          </Link>

          {/* Kids Games Button */}
          <Link
            href="/festival/kids-games"
            className="w-full h-48 flex items-center justify-center bg-[#181818] rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#f4ce86]">
                Kids Games
              </h3>
              <p className="text-sm text-[#eae0d5]">
                Fun activities for children
              </p>
            </div>
          </Link>

          {/* Food Menu Button */}
          <Link
            href="/festival/food-menu"
            className="w-full h-48 flex items-center justify-center bg-[#181818] rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#f4ce86]">
                Food Menu
              </h3>
              <p className="text-sm text-[#eae0d5]">Special festival dishes</p>
            </div>
          </Link>
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
