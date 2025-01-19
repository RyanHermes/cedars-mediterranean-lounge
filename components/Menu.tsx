"use client";

import { useState } from "react";

export default function Menu() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section
      id="menu"
      className="w-full py-10 bg-[#181818] px-6 sm:px-10 text-center"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#f4ce86]">
        Our Menu
      </h2>
      <p className="text-sm sm:text-base text-[#eae0d5] mb-8">
        Discover our Mediterranean-inspired dishes, crafted with fresh
        ingredients and bold flavors.
      </p>
      <div className="max-w-5xl mx-auto text-left text-[#eae0d5] space-y-6">
        {/* The Classics */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("classics")}
          >
            The Classics
          </button>
          {openSection === "classics" && (
            <ul className="mt-3 space-y-4 px-4">
              <li>
                <span className="font-bold">Pepperoni Pizza:</span> A classic
                pizza topped with pepperoni slices, melted cheese, and a rich
                pizza sauce for a bold flavor.
              </li>
              <li>
                <span className="font-bold">Cheese Pizza:</span> Simple and
                timeless! Layers of melty cheese on top of our tangy pizza sauce
                (Mozzarella, Analog, Cheddar, Parmesan, & Feta).
              </li>
              <li>
                <span className="font-bold">All Meat Pizza:</span> A meat
                lover's delight with pepperoni, ground beef, and crispy bacon
                smothered in cheese and pizza sauce.
              </li>
              <li>
                <span className="font-bold">Chicken Pizza:</span> Juicy chicken
                paired with melted cheese on a perfectly baked crust with a
                savory pizza sauce.
              </li>
              <li>
                <span className="font-bold">Hawaiian Pizza:</span> A tropical
                blend of sweet pineapple and tender chicken, complemented by
                melted cheese and pizza sauce.
              </li>
              <li>
                <span className="font-bold">Sujok Pizza:</span> A spicy and
                aromatic pizza with sujok sausage, creamy cheese, and our
                signature pizza sauce.
              </li>
              <li>
                <span className="font-bold">Basturma Pizza:</span> (Air-dried,
                spiced beef): Rich, savory basturma paired with melted cheese
                and our traditional pizza sauce.
              </li>
              <li>
                <span className="font-bold">Margherita Pizza:</span> Mozzarella
                cheese, red sauce, fresh basil, and olive oil.
              </li>
              <li>
                <span className="font-bold">Zaatar and Cheese Pizza:</span> A
                flavorful Middle Eastern-inspired pizza featuring zaatar and
                melted cheese (a blend of Mediterranean organic herbs, spices,
                sesame seeds, and veggie oil).
              </li>
              <li>
                <span className="font-bold">Falafel Pizza:</span> Crunchy
                falafel pieces combined with melted cheese and pizza sauce for a
                hearty vegetarian option.
              </li>
              <li>
                <span className="font-bold">Veggie Pizza:</span> A garden-fresh
                pizza with green peppers, onions, mushrooms, and black olives,
                finished with cheese and pizza sauce.
              </li>
              <li className="italic text-sm">
                Prices: Medium (12") $12.99 | Large (14") $16.99 | Extra Large
                (16") $19.99
              </li>
            </ul>
          )}
        </div>

        {/* Salads, Sides, and Extras */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("salads")}
          >
            Salads, Sides, and Extras
          </button>
          {openSection === "salads" && (
            <ul className="mt-3 space-y-4 px-4">
              <li>
                <span className="font-bold">Fattoush Salad:</span> Lettuce,
                cucumbers, tomatoes, radishes, green onions, sumac, olive oil,
                parsley, and mint.
                <br />
                <span className="italic text-sm">
                  Prices: Medium $6.99 | Large $8.99
                </span>
              </li>
              <li>
                <span className="font-bold">French Fries:</span>
                <br />
                <span className="italic text-sm">
                  Prices: Medium $3.99 | Large $5.99
                </span>
              </li>
              <li>
                <span className="font-bold">Poutine:</span> Gravy sauce, cheese.
                <br />
                <span className="italic text-sm">
                  Prices: Medium $4.99 | Large $6.99
                </span>
              </li>
              <li>
                <span className="font-bold">Chicken Wings:</span> 10 pcs (2
                options of sauce): $12.99 | 20 pcs (2 options of sauce): $23.99
              </li>
            </ul>
          )}
        </div>

        {/* Build Your Own Pizza */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("buildYourOwn")}
          >
            Build Your Own Pizza
          </button>
          {openSection === "buildYourOwn" && (
            <div className="mt-3 px-4 space-y-4">
              <p>
                Create your perfect pizza by choosing from a variety of sizes,
                crusts, proteins, vegetables, cheeses, and sauces. Add extra
                toppings for just $1.99 each!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base">
                <div>
                  <strong>Pick Your Size:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Medium (12"): $9.99</li>
                    <li>Large (14"): $11.99</li>
                    <li>Extra Large (16"): $14.99</li>
                  </ul>
                </div>
                <div>
                  <strong>Pick Your Crust:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Hand-tossed</li>
                    <li>Thin crust</li>
                    <li>Gluten-free</li>
                  </ul>
                </div>
                <div>
                  <strong>Pick Your Protein:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Beef</li>
                    <li>Ham</li>
                    <li>Pepperoni</li>
                    <li>Bacon</li>
                    <li>Chicken</li>
                    <li>Italian Sausage</li>
                  </ul>
                </div>
                <div>
                  <strong>Pick Your Vegetables:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Black Olives</li>
                    <li>Mushrooms</li>
                    <li>Tomatoes</li>
                    <li>Onions</li>
                    <li>Green Peppers</li>
                    <li>Spinach</li>
                  </ul>
                </div>
                <div>
                  <strong>Pick Your Cheese:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Mozzarella</li>
                    <li>Feta</li>
                    <li>Gobind (Paneer)</li>
                    <li>Analog Cheese, Cheddar & Parmesan</li>
                    <li>Parmesan</li>
                  </ul>
                </div>
                <div>
                  <strong>Pick Your Sauce:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Jalapeños</li>
                    <li>Banana Hot Pepper Rings</li>
                    <li>Chili Flakes</li>
                    <li>Pineapple</li>
                    <li>Green Olives</li>
                    <li>Garlic</li>
                    <li>Ranch Sauce</li>
                    <li>Hot Sauce</li>
                    <li>BBQ Sauce</li>
                    <li>Honey Garlic</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
