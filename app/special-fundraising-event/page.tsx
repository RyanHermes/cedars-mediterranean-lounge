import Menu from "@/components/Menu";
import Link from "next/link";

export default function SpecialFundraisingEventPage() {
  return (
    <div className="bg-[#121212] text-[#eae0d5] min-h-screen">
      <section className="w-full py-10 bg-[#181818] px-6 sm:px-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#f4ce86]">
          Special Fundraising Event
        </h1>
        <p className="text-lg sm:text-xl text-[#eae0d5] mb-8">
          Join us for a special fundraising event to support our community. All
          proceeds from this menu will go towards the cause.
        </p>
        <Link href="/">
          <button className="mb-8 bg-[#f4ce86] text-[#181818] py-2 px-4 rounded-lg hover:bg-[#f0c164] transition-colors duration-300">
            Back to Home
          </button>
        </Link>
      </section>
      <Menu />
    </div>
  );
}
