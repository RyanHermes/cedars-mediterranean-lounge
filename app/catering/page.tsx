import Image from "next/image";

export default function CateringPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-[#121212] text-[#eae0d5] px-4 py-8">
      <header className="relative w-full py-12 text-center bg-gradient-to-b from-[#181818] to-[#3a5a40] mb-8">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f4ce86] drop-shadow-lg mb-4">
            Cedar&apos;s Catering Services
          </h1>
          <p className="text-lg sm:text-xl text-[#f4efe8]">
            Bring the taste of Cedar&apos;s to your special occasions.
          </p>
        </div>
      </header>

      <main className="w-full max-w-4xl mx-auto space-y-12">
        <section
          id="daily-plates"
          className="bg-[#181818] p-6 rounded-lg border-2 border-[#8b4513]"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#f4ce86]">
            Daily Special Plates
          </h2>
          <p className="text-sm sm:text-base text-[#eae0d5] mb-4">
            Delicious and convenient options for lunch and dinner. Each platter
            is priced at $23.99.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="text-xl font-semibold text-[#f4ce86] mb-2">
                Chicken
              </h3>
              <ul className="list-disc list-inside text-[#f4efe8] space-y-1">
                <li>Stuffed Chicken (Monday)</li>
                <li>Chicken Stroganoff (Wednesday)</li>
                <li>Chicken Cordon Bleu (Tuesday)</li>
                <li>Mixed BBQ Platter (Thursday - Includes Chicken)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f4ce86] mb-2">
                Beef
              </h3>
              <ul className="list-disc list-inside text-[#f4efe8] space-y-1">
                <li>Beef Stroganoff (Tuesday)</li>
                <li>Beef BBQ (Wednesday)</li>
                <li>Sufle Potatoes (Thursday - Likely with Beef)</li>
                <li>Beef Yakhneh (Monday)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f4ce86] mb-2">
                Veggie
              </h3>
              <ul className="list-disc list-inside text-[#f4efe8] space-y-1">
                <li>Loubieh Bi Zait (Wednesday)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f4ce86] mb-2">
                Seafood
              </h3>
              <ul className="list-disc list-inside text-[#f4efe8] space-y-1">
                <li>Fish & Chips (Thursday)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f4ce86] mb-2">
                Pasta
              </h3>
              <ul className="list-disc list-inside text-[#f4efe8] space-y-1">
                <li>Meat Bowls Pasta (Monday)</li>
                <li>Lasagna (Monday)</li>
                <li>Chicken Linguine (Wednesday)</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="bakery"
          className="bg-[#181818] p-6 rounded-lg border-2 border-[#8b4513]"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#f4ce86]">
            Fresh Bakery
          </h2>
          <p className="text-sm sm:text-base text-[#eae0d5] mb-4">
            A wide variety of pizzas and traditional pies. Prices as per our
            regular menu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#f4efe8]">
            <h3 className="text-xl font-semibold text-[#f4ce86] mb-2 md:col-span-2">
              Pizzas
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>All Meat Pizza</li>
              <li>Pepperoni Pizza</li>
              <li>Veggie Pizza</li>
              <li>4 Cheese Pizza</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Lebanese Pizza</li>
              <li>Meat Bolls Pizza</li>
              <li>New York Pizza</li>
              <li>Gluten-Free Pizza (Choose your toppings)</li>
            </ul>
            <h3 className="text-xl font-semibold text-[#f4ce86] mt-4 mb-2 md:col-span-2">
              Pies
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Hot Dog Cheese Pie</li>
              <li>Meat Pie</li>
              <li>Zaatar Pie</li>
              <li>Cheese Pie</li>
              <li>Cheese with Green Olive Pie</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Hot Pie</li>
              <li>Kafta Pie</li>
              <li>Marina Pie</li>
              <li>Spinach Pie</li>
              <li>Fetta Pie</li>
            </ul>
          </div>
        </section>

        <section
          id="salads"
          className="bg-[#181818] p-6 rounded-lg border-2 border-[#8b4513]"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#f4ce86]">
            Salads
          </h2>
          <p className="text-sm sm:text-base text-[#eae0d5] mb-4">
            Fresh and flavorful salads, available in two sizes.
          </p>
          <ul className="space-y-2 text-sm text-[#f4efe8]">
            <li>Salad Ruce: $9.99 (for 4) / $14.99 (for 8)</li>
            <li>Palmito Salad: $9.99 (for 4) / $16.99 (for 8)</li>
            <li>Fatoush: $8.99 (for 4) / $15.99 (for 8)</li>
            <li>Taboule: $8.99 (for 4) / $15.99 (for 8)</li>
            <li>Cesar Salad: $8.99 (for 4) / $15.99 (for 8)</li>
            <li>Chicken Cesar Salad: $10.99 (for 4) / $19.99 (for 8)</li>
            <li>Rocca Salade: $8.99 (for 4) / $19.99 (for 8)</li>
            <li>Greek Salad: $8.99 (for 4) / $16.99 (for 8)</li>
            <li>Coleslaw: $7.99 (for 4) / $16.99 (for 8)</li>
            <li>Smoked Salmon Salade: $14.99 (for 4) / $29.99 (for 8)</li>
            <li>
              Special Cedar&apos;s King Salade (Fatoush, Zbib, Jawz, Strawberry,
              Avocado): $15.99 (for 4) / $29.99 (for 8)
            </li>
            <li>
              Sweet and Sour Salade (Lettuce, Apple, Orange, Avocado, Mustard &
              Lemon Sauce): $29.99 (for 8)
            </li>
          </ul>
        </section>

        <section
          id="appetizers"
          className="bg-[#181818] p-6 rounded-lg border-2 border-[#8b4513]"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#f4ce86]">
            Appetizers
          </h2>
          <p className="text-sm sm:text-base text-[#eae0d5] mb-4">
            A wide selection of traditional and contemporary appetizers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#f4efe8]">
            <ul className="space-y-1">
              <li>Hummus: $8.99 (1kg for 4) / $21.99</li>
              <li>Hummus with Meat: $8.99 (1kg for 4) / $21.99</li>
              <li>Tripoly Hummus: $21.99</li>
              <li>Beirut Hummus: $21.99</li>
              <li>Baba Ghanouj: $23.99</li>
              <li>Spicy Potatoes: $24.99</li>
              <li>Stuffed Kebbeh: $15.99</li>
              <li>Grape Leaves: 25pcs $12.99</li>
              <li>Cheese Roll: $11.99</li>
              <li>Grilled Haloumeh: $26.99</li>
              <li>Greek Brushetta: $11.99</li>
              <li>Garlic Butter Shrimp: 16pcs $22.99</li>
              <li>Stuffed Mushrooms: $22.99</li>
              <li>Mouhammara: $19.99</li>
              <li>Labneh with Garlic: $29.99</li>
              <li>Labneh: $29.99</li>
              <li>Shanklish with Onion: $29.99</li>
              <li>Makanek: 1.5kg $34.99</li>
              <li>Sujok: 1.5kg $34.99</li>
            </ul>
            <ul className="space-y-1">
              <li>Tajen: $27.99</li>
              <li>Harrah: $18.99</li>
              <li>Calamari: 1kg $25.99</li>
              <li>Bayd Ghanam: 1kg $32.99</li>
              <li>Lsenet Mtabaleh: 1kg $32.99</li>
              <li>Mixed Pastry Puff: 8pcs $16.99</li>
              <li>Soiree: $11.99</li>
              <li>Tuna Bite: $11.99</li>
              <li>Chicken Bite: $11.99</li>
              <li>Hot Dog Bite: $11.99</li>
              <li>Sanbousek (Dozen Price)</li>
              <li>Pizza Pie (Dozen Price)</li>
              <li>Zaatar Pie (Dozen Price)</li>
              <li>Meat Pie Sfiha (Dozen Price)</li>
              <li>Smoked Salmon Pie: $20.99</li>
              <li>Stuffed Eggplant: $24.99</li>
              <li>Focaccia Bread: $11.99</li>
              <li>Mosakaa Eggplant: $19.99</li>
              <li>Mozzarella Sticks: $11.99</li>
              <li>Mac & Cheese: $20.99</li>
              <li>Cheese Garlic Bread: $11.99</li>
              <li>Stuffed Meat Bolls: $11.99</li>
              <li>Chicken Bolls: $11.99</li>
              <li>Loubieh with Garlic: $15.99</li>
              <li>Eggplant Moutabal (Onion & Tomatoes): $24.99</li>
              <li>Spinach Pie (Dozen Price)</li>
              <li>Falafel (Dozen Price)</li>
            </ul>
          </div>
        </section>

        <section
          id="main-courses"
          className="bg-[#181818] p-6 rounded-lg border-2 border-[#8b4513]"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#f4ce86]">
            Main Courses & Trays
          </h2>
          <ul className="space-y-2 text-sm text-[#f4efe8]">
            <li>
              Mixed BBQ Tray (Chicken Tawouk, Beef BBQ, Kabab BBQ, add Grilled
              Shrimp option): $159.99
            </li>
            <li>Fried Fish (By Pound)</li>
            <li>Grilled Fish (By Pound)</li>
            <li>Grilled Salmon (By Pound)</li>
          </ul>
        </section>

        <section
          id="sides"
          className="bg-[#181818] p-6 rounded-lg border-2 border-[#8b4513]"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#f4ce86]">
            Sides
          </h2>
          <ul className="space-y-2 text-sm text-[#f4efe8]">
            <li>Mashed Potatoes: $6.99 / $12.99</li>
            <li>French Fries: $6.99 / $9.99</li>
            <li>Rice: $2.99 / $9.99</li>
            <li>Soup: $3.99 / $12.99</li>
          </ul>
        </section>

        <section
          id="event-packages"
          className="bg-[#181818] p-6 rounded-lg border-2 border-[#8b4513]"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#f4ce86]">
            Event Packages (Per Person)
          </h2>
          <p className="text-sm sm:text-base text-[#eae0d5] mb-4">
            Customizable packages to suit your event needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-center">
            <div className="bg-[#202020] p-4 rounded-md border border-[#556b2f]">
              <h3 className="text-xl font-semibold text-[#f4ce86] mb-2">
                $35/person
              </h3>
              <p className="text-[#f4efe8]">Main Course + 5 Appetizers</p>
            </div>
            <div className="bg-[#202020] p-4 rounded-md border border-[#556b2f]">
              <h3 className="text-xl font-semibold text-[#f4ce86] mb-2">
                $55/person
              </h3>
              <p className="text-[#f4efe8]">Main Course + 7 Appetizers</p>
            </div>
            <div className="bg-[#202020] p-4 rounded-md border border-[#556b2f]">
              <h3 className="text-xl font-semibold text-[#f4ce86] mb-2">
                $85+/person
              </h3>
              <p className="text-[#f4efe8]">2 Main Courses + 10 Appetizers</p>
            </div>
          </div>
          <p className="text-sm text-[#eae0d5] mt-4">
            Add Lebanese BBQ by the shish: Kafta ($2.99 or $3.99), Taouk
            ($6.99), Lahme ($8.99). Seafood options also available.
          </p>
        </section>

        <section id="contact-catering" className="text-center py-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#f4ce86]">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-[#f4efe8] mb-6">
            Contact us today to discuss your catering needs and get a
            personalized quote.
          </p>
          <a
            href="mailto:cedar.m.b.lounge@gmail.com"
            className="inline-block bg-[#f4ce86] text-[#121212] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#e0b85c] transition-colors duration-300"
          >
            Email Us: cedar.m.b.lounge@gmail.com
          </a>
          <p className="text-lg text-[#f4efe8] my-4">Or Call Us At</p>
          <a
            href="tel:+12267397240"
            className="inline-block bg-[#f4ce86] text-[#121212] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#e0b85c] transition-colors duration-300"
          >
            (226) 739-7240
          </a>
        </section>
      </main>

      <footer className="w-full mt-12 py-4 sm:py-6 text-center bg-[#8b4513] text-[#f4efe8]">
        <a href="/" className="text-sm hover:underline">
          ← Back to Homepage
        </a>
        <p className="text-xs sm:text-sm mt-2">
          © {new Date().getFullYear()} Cedar&apos;s Mediterranean Lounge. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
