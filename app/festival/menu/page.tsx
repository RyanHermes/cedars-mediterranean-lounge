import Image from "next/image";
import Link from "next/link";

export default function FestivalMenuPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#eae0d5] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#f4ce86] mb-8">
          Festival Food Menu
        </h1>
        <div className="mb-8">
          <Image
            src="/assets/images/menu.jpeg"
            alt="Festival Menu"
            width={800}
            height={1200}
            className="rounded-lg shadow-lg mx-auto border-2 border-[#8b4513]"
            priority
          />
        </div>
        <Link
          href="/festival"
          className="inline-flex items-center px-6 py-3 bg-[#181818] text-[#f4ce86] rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300"
        >
          &larr; Back to Festival
        </Link>
      </div>
    </div>
  );
}
