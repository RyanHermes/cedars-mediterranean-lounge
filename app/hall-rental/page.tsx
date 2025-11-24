export default function HallRentalPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-[#121212] text-[#eae0d5] px-4 py-8">
      <header className="relative w-full py-12 text-center bg-gradient-to-b from-[#181818] to-[#3a5a40] mb-8">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f4ce86] drop-shadow-lg mb-4">
            Hall Rental
          </h1>
          <p className="text-lg sm:text-xl text-[#f4efe8]">
            Host your special events in our beautiful venue.
          </p>
        </div>
      </header>

      <main className="w-full max-w-4xl mx-auto space-y-12">
        <section className="bg-[#181818] p-6 rounded-lg border-2 border-[#8b4513]">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#f4ce86]">
            Event Venue
          </h2>
          <p className="text-sm sm:text-base text-[#eae0d5] mb-4">
            Our hall is perfect for weddings, birthdays, corporate events, and
            more. We offer a spacious and elegant setting for your guests.
          </p>
          <div className="space-y-4 text-[#f4efe8]">
            <p>
              <strong>Capacity:</strong> Contact us for details
            </p>
            <p>
              <strong>Amenities:</strong> Tables, chairs, sound system, and
              catering options available.
            </p>
          </div>
        </section>

        <section className="bg-[#181818] p-6 rounded-lg border-2 border-[#8b4513] text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#f4ce86]">
            Book Your Event
          </h2>
          <p className="text-sm sm:text-base text-[#eae0d5] mb-6">
            Ready to plan your event? Contact us today to check availability and
            pricing.
          </p>
          <div className="text-lg text-[#f4efe8]">
            <p className="mb-2">📞 (226) 739-7240</p>
            <p>📧 cedar.m.b.lounge@gmail.com</p>
          </div>
        </section>
      </main>
    </div>
  );
}
