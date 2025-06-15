import Link from "next/link";

export default function June22EventPage() {
  return (
    <div className="bg-[#121212] text-[#eae0d5] min-h-screen">
      <section className="w-full py-10 bg-[#181818] px-6 sm:px-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#f4ce86]">
          June 22nd Event
        </h1>
        <p className="text-lg sm:text-xl text-[#f4ce86] mb-2">
          Date: June 22nd
        </p>
        <p className="text-lg sm:text-xl text-[#eae0d5] mb-8">
          More details about this exciting event will be posted here soon!
        </p>
        <Link href="/" legacyBehavior>
          <button className="w-full max-w-xs mx-auto mb-8 bg-[#f4ce86] text-[#181818] py-3 px-6 rounded-lg hover:bg-[#f0c164] transition-colors duration-300 text-lg font-semibold">
            Back to Home
          </button>
        </Link>
      </section>
      {/* You can add more specific content for this page later */}
    </div>
  );
}
