import type { Metadata } from "next";

import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Catering Services | Cedar's Mediterranean Lounge",
  description:
    "Authentic Mediterranean catering in Windsor, Ontario for parties, weddings, corporate events, and gatherings. Customizable menus and event packages from Cedar's Mediterranean Lounge.",
};

export const revalidate = 86400;

const dailyPlates = [
  {
    label: "Chicken",
    items: [
      "Stuffed Chicken (Monday)",
      "Chicken Stroganoff (Wednesday)",
      "Chicken Cordon Bleu (Tuesday)",
      "Mixed BBQ Platter (Thursday — includes Chicken)",
    ],
  },
  {
    label: "Beef",
    items: [
      "Beef Stroganoff (Tuesday)",
      "Beef BBQ (Wednesday)",
      "Sufle Potatoes (Thursday — likely with Beef)",
      "Beef Yakhneh (Monday)",
    ],
  },
  { label: "Veggie", items: ["Loubieh Bi Zait (Wednesday)"] },
  { label: "Seafood", items: ["Fish & Chips (Thursday)"] },
  {
    label: "Pasta",
    items: [
      "Meat Bowls Pasta (Monday)",
      "Lasagna (Monday)",
      "Chicken Linguine (Wednesday)",
    ],
  },
];

const pizzas: [string[], string[]] = [
  ["All Meat Pizza", "Pepperoni Pizza", "Veggie Pizza", "4 Cheese Pizza"],
  [
    "Lebanese Pizza",
    "Meat Bolls Pizza",
    "New York Pizza",
    "Gluten-Free Pizza (choose your toppings)",
  ],
];

const pies: [string[], string[]] = [
  [
    "Hot Dog Cheese Pie",
    "Meat Pie",
    "Zaatar Pie",
    "Cheese Pie",
    "Cheese with Green Olive Pie",
  ],
  ["Hot Pie", "Kafta Pie", "Marina Pie", "Spinach Pie", "Fetta Pie"],
];

const salads = [
  "Salad Ruce: (for 4) / (for 8)",
  "Palmito Salad: (for 4) / (for 8)",
  "Fatoush: (for 4) / (for 8)",
  "Taboule: (for 4) / (for 8)",
  "Cesar Salad: (for 4) / (for 8)",
  "Chicken Cesar Salad: (for 4) / (for 8)",
  "Rocca Salade: (for 4) / (for 8)",
  "Greek Salad: (for 4) / (for 8)",
  "Coleslaw: (for 4) / (for 8)",
  "Smoked Salmon Salade: (for 4) / (for 8)",
  "Special Cedar's King Salade (Fatoush, Zbib, Jawz, Strawberry, Avocado): (for 4) / (for 8)",
  "Sweet and Sour Salade (Lettuce, Apple, Orange, Avocado, Mustard & Lemon Sauce): (for 8)",
];

const appetizers: [string[], string[]] = [
  [
    "Hummus: (1kg for 4)",
    "Hummus with Meat: (1kg for 4)",
    "Tripoly Hummus",
    "Beirut Hummus",
    "Baba Ghanouj",
    "Spicy Potatoes",
    "Stuffed Kebbeh",
    "Grape Leaves: 25pcs",
    "Cheese Roll",
    "Grilled Haloumeh",
    "Greek Brushetta",
    "Garlic Butter Shrimp: 16pcs",
    "Stuffed Mushrooms",
    "Mouhammara",
    "Labneh with Garlic",
    "Labneh",
    "Shanklish with Onion",
    "Makanek: 1.5kg",
    "Sujok: 1.5kg",
  ],
  [
    "Tajen",
    "Harrah",
    "Calamari: 1kg",
    "Bayd Ghanam: 1kg",
    "Lsenet Mtabaleh: 1kg",
    "Mixed Pastry Puff: 8pcs",
    "Soiree",
    "Tuna Bite",
    "Chicken Bite",
    "Hot Dog Bite",
    "Sanbousek (Dozen)",
    "Pizza Pie (Dozen)",
    "Zaatar Pie (Dozen)",
    "Meat Pie Sfiha (Dozen)",
    "Smoked Salmon Pie",
    "Stuffed Eggplant",
    "Focaccia Bread",
    "Mosakaa Eggplant",
    "Mozzarella Sticks",
    "Mac & Cheese",
    "Cheese Garlic Bread",
    "Stuffed Meat Bolls",
    "Chicken Bolls",
    "Loubieh with Garlic",
    "Eggplant Moutabal (Onion & Tomatoes)",
    "Spinach Pie (Dozen)",
    "Falafel (Dozen)",
  ],
];

const mainCourses = [
  "Mixed BBQ Tray (Chicken Tawouk, Beef BBQ, Kabab BBQ, add Grilled Shrimp option)",
  "Fried Fish",
  "Grilled Fish",
  "Grilled Salmon",
];

const sides = ["Mashed Potatoes", "French Fries", "Rice", "Soup"];

const packages = [
  { price: "$35", desc: "Main Course + 5 Appetizers" },
  { price: "$55", desc: "Main Course + 7 Appetizers" },
  { price: "$85+", desc: "2 Main Courses + 10 Appetizers" },
];

function MenuSection({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="bg-ink-900 rounded-2xl ring-1 ring-bone/10 p-6 sm:p-8"
    >
      <h2 className="font-display text-2xl sm:text-3xl text-gold tracking-tight mb-3">
        {title}
      </h2>
      {intro && <p className="text-bone-muted text-sm mb-6">{intro}</p>}
      {children}
    </section>
  );
}

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-bone">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-relaxed">
          <span className="text-gold/60 mt-1.5 shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CateringPage() {
  return (
    <>
      <PageHero
        eyebrow="Catering"
        title="Cedar's Catering Services"
        subtitle="Bring the taste of Cedar's to your special occasions."
      />

      <div className="px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <MenuSection
            id="daily-plates"
            title="Daily Special Plates"
            intro="Delicious and convenient options for lunch and dinner."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {dailyPlates.map((cat) => (
                <div key={cat.label}>
                  <h3 className="font-display text-lg text-bone mb-3">
                    {cat.label}
                  </h3>
                  <ItemList items={cat.items} />
                </div>
              ))}
            </div>
          </MenuSection>

          <MenuSection
            id="bakery"
            title="Fresh Bakery"
            intro="A wide variety of pizzas and traditional pies."
          >
            <h3 className="font-display text-lg text-bone mb-3">Pizzas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
              <ItemList items={pizzas[0]} />
              <ItemList items={pizzas[1]} />
            </div>
            <h3 className="font-display text-lg text-bone mb-3">Pies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              <ItemList items={pies[0]} />
              <ItemList items={pies[1]} />
            </div>
          </MenuSection>

          <MenuSection
            id="salads"
            title="Salads"
            intro="Fresh and flavorful salads, available in two sizes."
          >
            <ItemList items={salads} />
          </MenuSection>

          <MenuSection
            id="appetizers"
            title="Appetizers"
            intro="A wide selection of traditional and contemporary appetizers."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              <ItemList items={appetizers[0]} />
              <ItemList items={appetizers[1]} />
            </div>
          </MenuSection>

          <MenuSection id="main-courses" title="Main Courses & Trays">
            <ItemList items={mainCourses} />
          </MenuSection>

          <MenuSection id="sides" title="Sides">
            <ItemList items={sides} />
          </MenuSection>

          <MenuSection
            id="event-packages"
            title="Event Packages"
            intro="Customizable packages to suit your event needs."
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {packages.map((p) => (
                <div
                  key={p.price}
                  className="bg-ink rounded-xl ring-1 ring-bone/10 p-6 text-center hover:ring-gold/30 transition-colors"
                >
                  <p className="font-display text-2xl text-gold mb-2">
                    {p.price}
                    <span className="text-bone-muted text-sm font-sans ml-1">
                      / person
                    </span>
                  </p>
                  <p className="text-bone-muted text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-bone-muted text-sm">
              Add Lebanese BBQ by the shish: Kafta ($2.99 or $3.99), Taouk
              ($6.99), Lahme ($8.99). Seafood options also available.
            </p>
          </MenuSection>

          <section className="text-center py-8">
            <h2 className="font-display text-3xl sm:text-4xl text-gold tracking-tight mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-bone-muted mb-8 max-w-xl mx-auto">
              Contact us today to discuss your catering needs and get a
              personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:cedar.m.b.lounge@gmail.com"
                className="inline-block bg-gold text-ink font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gold-hover transition-colors"
              >
                Email cedar.m.b.lounge@gmail.com
              </a>
              <a
                href="tel:+12267397240"
                className="inline-block bg-ink-900 ring-1 ring-bone/20 text-bone font-semibold px-8 py-3 rounded-full hover:ring-gold/40 hover:text-gold transition-all"
              >
                Call (226) 739-7240
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
