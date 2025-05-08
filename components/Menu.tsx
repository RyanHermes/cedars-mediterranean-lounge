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
              <li className="italic text-sm">
                M 12&quot; &ndash; $12.99 | L 14&quot; &ndash; $16.99 | XL
                16&quot; &ndash; $19.99
              </li>
              <li>
                <span className="font-bold">1- Pepperoni Pizza:</span> A classic
                pizza topped with pepperoni slices, melted cheese, and a rich
                pizza sauce for a bold flavor.
              </li>
              <li>
                <span className="font-bold">2- Cheese Pizza:</span> Simple and
                timeless! Layers of melty cheese on top of our tangy pizza sauce
                (Mozzarella, Swiss, Cheddar, Parmesan &amp; Feta).
              </li>
              <li>
                <span className="font-bold">3- All Meat Pizza:</span> A meat
                lover&apos;s delight with pepperoni, ground beef, and crispy
                bacon smothered in cheese and pizza sauce.
              </li>
              <li>
                <span className="font-bold">4- Chicken Pizza:</span> Juicy
                chicken paired with melted cheese on a perfectly baked crust
                with a savory pizza sauce.
              </li>
              <li>
                <span className="font-bold">5- Hawaiian Pizza:</span> A tropical
                blend of sweet pineapple and tender chicken, complemented by
                melted cheese and pizza sauce.
              </li>
              <li>
                <span className="font-bold">6- Sujok or Pasturma Pizza:</span> A
                spicy and aromatic pizza with sujok sausage, creamy cheese, and
                our signature pizza sauce.
              </li>
              <li>
                <span className="font-bold">7- Veggie Pizza:</span> A
                garden-fresh pizza with green peppers, onions, mushrooms, and
                black olives, finished with cheese and pizza sauce.
              </li>
              <li>
                <span className="font-bold">8- Zaatar and Cheese Pizza:</span> A
                flavorful Middle Eastern-inspired pizza featuring zaatar and
                melted cheese (Zaatar is a blend of mediterranean organic herbs,
                spices, sesame seeds with veggie oil).
              </li>
              <li>
                <span className="font-bold">9- Margherita Pizza:</span>{" "}
                Mozzarella cheese, red sauce, Fresh Basil, Olive oil.
              </li>
              <li>
                <span className="font-bold">10- Cedar&apos;s Pizza:</span> Pizza
                sauce, Black Forest Ham, 2 Cheese toppings, green olives,
                mushroom, green peppers, Oregano.
                <br />
                <span className="italic text-sm">
                  L 14&quot; &ndash; $18.99 | XL 16&quot; &ndash; $21.99
                </span>
              </li>
              <li>
                <span className="font-bold">11- New York Pizza:</span> Pizza
                sauce & 4 Cheese mixed.
                <br />
                <span className="italic text-sm">
                  L 14&quot; &ndash; $18.99 | XL 16&quot; &ndash; $21.99
                </span>
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
            Build Your Own
          </button>
          {openSection === "buildYourOwn" && (
            <div className="mt-3 px-4 space-y-4">
              <p className="italic text-sm">
                Choose any Toppings &ndash; $1.99 Each
                <br />M 12&quot; &ndash; $9.99 | L 14&quot; &ndash; $11.99 | XL
                16&quot; &ndash; $14.99
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base">
                <div>
                  <strong>Pick your size:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>M 12&quot; $9.99</li>
                    <li>L 14&quot; $11.99</li>
                    <li>XL 16&quot; $14.99</li>
                  </ul>
                </div>
                <div>
                  <strong>Pick your crust:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Hand-tossed</li>
                    <li>Thin crust</li>
                    <li>Gluten-free</li>
                  </ul>
                </div>
                <div>
                  <strong>Pick your protein:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Beef</li>
                    <li>Ham</li>
                    <li>Pepperoni</li>
                    <li>Bacon</li>
                    <li>Chicken</li>
                    <li>Italian sausage</li>
                    <li>Sujok</li>
                    <li>Basturma</li>
                  </ul>
                </div>
                <div>
                  <strong>Pick your vegetables:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Black olives</li>
                    <li>Mushrooms</li>
                    <li>Tomatoes</li>
                    <li>Onions</li>
                    <li>Green peppers</li>
                    <li>Spinach</li>
                  </ul>
                </div>
                <div>
                  <strong>Pick your cheese:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Mozzarella</li>
                    <li>Feta</li>
                    <li>Gobind (Paneer)</li>
                    <li>Swiss, Cheddar & Parmesan</li>
                    <li>Parmesan</li>
                  </ul>
                </div>
                <div>
                  <strong>Sauces:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Jalape&ntilde;os</li>
                    <li>Banana Hot pepper rings</li>
                    <li>Chili flakes</li>
                    <li>Pineapple</li>
                    <li>Green olives</li>
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

        {/* Sides & More */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("sides")}
          >
            Sides & More
          </button>
          {openSection === "sides" && (
            <ul className="mt-3 space-y-4 px-4">
              <li>
                <span className="font-bold">12- Fattoush salad:</span> Lettuce,
                Cucumbers, Tomatoes, Radishes, Green Onions, Sumac sauce, Mint,
                green pepper.
                <br />
                <span className="italic text-sm">
                  Medium $6.99, Large $8.99
                </span>
              </li>
              <li>
                <span className="font-bold">13- French Fries:</span>
                <br />
                <span className="italic text-sm">
                  Medium $3.99, Large $5.99
                </span>
              </li>
              <li>
                <span className="font-bold">14- Poutine:</span> Gravy sauce,
                cheese
                <br />
                <span className="italic text-sm">
                  Medium $4.99, Large $6.99
                </span>
              </li>
              <li>
                <span className="font-bold">15- Chicken Wings:</span>
                <br />
                <span className="italic text-sm">
                  10 Pcs (2 options of sauce) $12.99 | 20 Pcs (2 options of
                  sauce) $23.99
                </span>
              </li>
              <li>
                <span className="font-bold">16- Cedar&apos;s Burger:</span>{" "}
                $13.99 (Burger fries and pop)
              </li>
              <li>
                <span className="font-bold">17- Swiss mushrooms Burger:</span>{" "}
                $14.99 Combo
              </li>
              <li>
                <span className="font-bold">18- Fish & Chips:</span> 1 piece
                $15.99 | 2 pieces $20.99
              </li>
              <li>
                <span className="font-bold">19- Falafel Wrap:</span> $7.99
                (Dozen pieces $19.99)
              </li>
              <li>
                <span className="font-bold">20- Hot Dog:</span> $4.99 (Pickles,
                jalapeno, special chips flavor, mustered, mayo, ketchup)
              </li>
              <li>
                <span className="font-bold">21- Chicken Fajita Sub:</span>{" "}
                $11.99
              </li>
              <li>
                <span className="font-bold">22- Daily Plate:</span> $23.99 one
                side soup or salad
              </li>
            </ul>
          )}
        </div>

        {/* Platters & Breakfast */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("platters")}
          >
            Platter
          </button>
          {openSection === "platters" && (
            <div className="mt-3 space-y-6 px-4">
              <ul className="space-y-4">
                <li>
                  <span className="font-bold">Fool:</span> $9.99
                </li>
                <li>
                  <span className="font-bold">Hummus:</span> $8.99
                </li>
                <li>
                  <span className="font-bold">Fatteh:</span> $11.99 (add meat
                  $2)
                </li>
                <li>
                  <span className="font-bold">Baba ghanouj:</span> $6.99
                </li>
                <li>
                  <span className="font-bold">Balila:</span> $8.99
                </li>
                <li>
                  <span className="font-bold">Labneh:</span> $7.99
                </li>
                <li>
                  <span className="font-bold">Makanek:</span> $9.99
                </li>
                <li>
                  <span className="font-bold">Sujuk:</span> $9.99
                </li>
                <li>
                  <span className="font-bold">Spicy Potatoes:</span> $5.99
                </li>
                <li>
                  <span className="font-bold">Falafel (5 Pcs):</span> $10.99
                </li>
              </ul>

              <div>
                <h3 className="font-bold mb-3">Eggs</h3>
                <ul className="space-y-4">
                  <li>
                    <span className="font-bold">
                      2 Eggs with Potatos, Bacon or Sausage:
                    </span>{" "}
                    $10.99 (extra egg $2)
                  </li>
                  <li>
                    <span className="font-bold">
                      3 Eggs with Sujuk or Basterma or Awarma:
                    </span>{" "}
                    $13.99
                  </li>
                  <li>
                    <span className="font-bold">
                      2 Eggs with tomatoes & onions:
                    </span>{" "}
                    $9.99
                  </li>
                  <li>
                    <span className="font-bold">Omelette (Veggie):</span> $11.99
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Manakish */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("manakish")}
          >
            Manakish
          </button>
          {openSection === "manakish" && (
            <div className="mt-3 space-y-6 px-4">
              <ul className="space-y-4">
                <li>
                  <span className="font-bold">Zaatar:</span> $2.99
                </li>
                <li>
                  <span className="font-bold">Cheese or half half:</span> $4.99
                </li>
                <li>
                  <span className="font-bold">Sujuk with cheese:</span> $4.99
                </li>
                <li>
                  <span className="font-bold">Meat:</span> $4.99
                </li>
                <li>
                  <span className="font-bold">Fatayer Spinach:</span> $1.99
                </li>
              </ul>

              <div>
                <h3 className="font-extrabold mb-3">Dozen</h3>
                <ul className="space-y-4">
                  <li>
                    <span className="font-bold">
                      Sanbousek /meat or cheese/ (one dozen):
                    </span>{" "}
                    $13.99
                  </li>
                  <li>
                    <span className="font-bold">Meat Sfiha:</span> $13.99
                  </li>
                  <li>
                    <span className="font-bold">Zaatar:</span> $12.99
                  </li>
                  <li>
                    <span className="font-bold">
                      Flayer /cheese or Spinach:
                    </span>{" "}
                    $13.99
                  </li>
                  <li>
                    <span className="font-bold">Pizza Veggie:</span> $13.99
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Sweets & Drinks */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("sweetsAndDrinks")}
          >
            Lebanese Sweets & Drinks
          </button>
          {openSection === "sweetsAndDrinks" && (
            <div className="mt-3 space-y-6 px-4">
              <div>
                <h3 className="font-extrabold mb-3">Lebanese Sweets</h3>
                <ul className="space-y-4">
                  <li>
                    <span className="font-bold">
                      Sweet Chocoba Banana & Strawberry:
                    </span>{" "}
                    $9.99
                  </li>
                  <li>
                    <span className="font-bold">Nutella:</span> $6.99
                  </li>
                  <li>
                    <span className="font-bold">Rice Pudding:</span> $2.99
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-extrabold mb-3">Drinks</h3>
                <ul className="space-y-4">
                  <li>
                    <span className="font-bold">Lebanese Coffee (Rakwe):</span>{" "}
                    $1.99
                  </li>
                  <li>
                    <span className="font-bold">Canadian Coffee:</span> $1.99
                  </li>
                  <li>
                    <span className="font-bold">Lebanese Tea:</span> $1.99 (Pot
                    $9.99)
                  </li>
                  <li>
                    <span className="font-bold">Water:</span> $1.99
                  </li>
                  <li>
                    <span className="font-bold">Soft Drink:</span> $1.99
                  </li>
                  <li>
                    <span className="font-bold">Juice/Aayran:</span> $3.99
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
