import Link from "next/link";
import Image from "next/image";

export default function KidsZonePage() {
  const activities = [
    {
      name: "Bouncy Castle",
      emoji: "🏰",
      imageUrl: "https://m.media-amazon.com/images/I/81Bbc1R5-HL.jpg",
    },
    {
      name: "Ice Cream",
      emoji: "🍦",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/621c2800158265311ad9107b/86f3422e-eeaa-4c5b-9a9e-4a90b0a3d580/Cones.jpg",
    },
    {
      name: "Cotton Candy",
      emoji: "🍬",
      imageUrl:
        "https://c.ndtvimg.com/2024-02/u1ml970g_cotton-candy_625x300_11_February_24.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384",
    },
    {
      name: "Popcorn",
      emoji: "🍿",
      imageUrl:
        "https://wholefully.com/wp-content/uploads/2014/02/movie-theatre-popcorn.jpg",
    },
    {
      name: "Slushies",
      emoji: "🥤",
      imageUrl:
        "https://www.seededatthetable.com/wp-content/uploads/2020/05/How-to-Make-a-Slushie-SQUARE.jpg",
    },
    {
      name: "Connect 4",
      emoji: "🎲",
      imageUrl:
        "https://bfasset.costco-static.com/U447IH35/as/nr6qwptqt437wrgjq9srb4w/1765942-894__2?auto=webp&format=jpg&width=600&height=600&fit=bounds&canvas=600,600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-[#eae0d5] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f4ce86] mb-6">
            Kids Zone Funland!
          </h1>
          <p className="text-xl md:text-2xl text-[#c7bbae] max-w-2xl mx-auto">
            Get ready for a world of joy! Our Kids Zone is packed with exciting
            activities and delicious treats for an unforgettable festival
            experience.
          </p>
        </div>

        <div className="bg-[#181818] rounded-xl border-2 border-[#8b4513] p-8 md:p-12 shadow-2xl">
          <h2 className="text-4xl font-semibold text-[#f4ce86] mb-10 text-center">
            What&apos;s Happening?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <li
                key={activity.name}
                className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#44403c] hover:border-[#f4ce86]"
              >
                <div className="w-48 h-48 relative mb-4 rounded-md overflow-hidden border-2 border-[#8b4513]">
                  <Image
                    src={activity.imageUrl}
                    alt={activity.name}
                    layout="fill"
                    objectFit="cover"
                    className="bg-gray-700"
                  />
                </div>
                <span className="text-4xl mb-2">{activity.emoji}</span>
                <h3 className="text-xl font-semibold text-[#f4ce86]">
                  {activity.name}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/festival"
            className="inline-flex items-center px-6 py-3 bg-[#181818] text-[#f4ce86] rounded-lg border-2 border-[#8b4513] hover:border-[#f4ce86] hover:scale-105 transition-all duration-300"
          >
            ← Back to Festival
          </Link>
        </div>
      </div>
    </div>
  );
}
