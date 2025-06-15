import Link from "next/link";

export default function PreFestivalEventPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-amber-400 drop-shadow-lg">
          Festival Sneak Peek!
        </h1>
        <div className="bg-gray-800 shadow-2xl rounded-xl p-8 md:p-12 border-2 border-amber-600 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-amber-500">
            Join Us for a Special Preview!
          </h2>
          <p className="text-lg mb-6 text-gray-300">
            Get a sneak peek of the upcoming festival at our special advertising
            event!
          </p>
          <div className="space-y-4 text-lg">
            <p>
              <strong className="text-amber-400">Date:</strong> June 22, 2025
            </p>
            <p>
              <strong className="text-amber-400">Time:</strong> [Specify Time
              Here, e.g., 12:00 PM - 4:00 PM]
            </p>
            <p>
              <strong className="text-amber-400">Location:</strong> [Specify
              Location Here]
            </p>
          </div>
          <p className="text-lg mt-8 text-gray-300">
            Come and experience a taste of what the festival has to offer. There
            will be fun activities, food samples, and information about the main
            event. Don't miss out on this exciting preview!
          </p>
          {/* Add more details as needed, e.g., specific activities, guest appearances, etc. */}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 text-lg"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
