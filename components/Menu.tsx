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

        {/* Appetizers */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("appetizers")}
          >
            Appetizers
          </button>
          {openSection === "appetizers" && (
            <ul className="mt-3 space-y-4 px-4">
              <li className="italic text-sm">
                All appetizers are served with our signature dipping sauce.
              </li>
              <li>
                <span className="font-bold">1- Hummus:</span> A creamy blend of
                chickpeas, tahini, lemon juice, and garlic, served with warm
                pita bread.
              </li>
              <li>
                <span className="font-bold">2- Baba Ghanoush:</span> A smoky
                eggplant dip mixed with tahini, olive oil, and spices, served
                with pita.
              </li>
              <li>
                <span className="font-bold">3- Stuffed Grape Leaves:</span>{" "}
                Grape leaves stuffed with a mixture of rice, pine nuts, and
                herbs, served with a side of tzatziki.
              </li>
              <li>
                <span className="font-bold">4- Falafel:</span> Crispy chickpea
                balls seasoned with herbs and spices, served with tahini sauce.
              </li>
              <li>
                <span className="font-bold">5- Spanakopita:</span> A flaky
                pastry filled with spinach, feta cheese, and herbs, served with
                tzatziki.
              </li>
              <li>
                <span className="font-bold">6- Samosa:</span> Crispy pastry
                filled with spiced potatoes and peas, served with mint chutney.
              </li>
              <li>
                <span className="font-bold">7- Calamari:</span> Tender calamari
                rings lightly breaded and fried, served with marinara sauce.
              </li>
              <li>
                <span className="font-bold">8- Bruschetta:</span> Grilled bread
                topped with a mixture of diced tomatoes, basil, garlic, and
                olive oil.
              </li>
              <li>
                <span className="font-bold">9- Cheese Platter:</span> A
                selection of fine cheeses served with nuts, dried fruits, and
                honey.
              </li>
              <li>
                <span className="font-bold">10- Meat Platter:</span> A variety
                of cured meats, including prosciutto, salami, and chorizo,
                served with olives and pickles.
              </li>
            </ul>
          )}
        </div>

        {/* Salads */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("salads")}
          >
            Salads
          </button>
          {openSection === "salads" && (
            <ul className="mt-3 space-y-4 px-4">
              <li className="italic text-sm">
                Fresh, organic ingredients in every salad. Add grilled chicken
                or shrimp for an extra charge.
              </li>
              <li>
                <span className="font-bold">1- Greek Salad:</span> A classic
                salad with tomatoes, cucumbers, olives, red onion, and feta
                cheese, dressed with olive oil and oregano.
              </li>
              <li>
                <span className="font-bold">2- Caesar Salad:</span> Romaine
                lettuce, croutons, and parmesan cheese, tossed in a creamy
                Caesar dressing.
              </li>
              <li>
                <span className="font-bold">3- Garden Salad:</span> A mix of
                fresh greens, cherry tomatoes, cucumber, and carrots, with your
                choice of dressing.
              </li>
              <li>
                <span className="font-bold">4- Spinach Salad:</span> Fresh
                spinach, strawberries, almonds, and feta cheese, with a
                poppyseed dressing.
              </li>
              <li>
                <span className="font-bold">5- Cobb Salad:</span> A hearty salad
                with mixed greens, grilled chicken, bacon, egg, avocado, and
                blue cheese dressing.
              </li>
              <li>
                <span className="font-bold">6- Taco Salad:</span> A Tex-Mex
                favorite with seasoned beef, beans, cheese, lettuce, and salsa,
                served in a crispy tortilla bowl.
              </li>
              <li>
                <span className="font-bold">7- Antipasto Salad:</span> A
                flavorful mix of cured meats, cheeses, olives, and peppers, with
                a balsamic vinaigrette.
              </li>
              <li>
                <span className="font-bold">8- Quinoa Salad:</span> A
                protein-packed salad with quinoa, black beans, corn, bell
                peppers, and a lime vinaigrette.
              </li>
              <li>
                <span className="font-bold">9- Caprese Salad:</span> Fresh
                mozzarella, tomatoes, and basil, drizzled with balsamic glaze
                and olive oil.
              </li>
              <li>
                <span className="font-bold">10- Waldorf Salad:</span> A
                refreshing mix of apples, grapes, walnuts, and celery, in a
                creamy dressing.
              </li>
            </ul>
          )}
        </div>

        {/* Desserts */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("desserts")}
          >
            Desserts
          </button>
          {openSection === "desserts" && (
            <ul className="mt-3 space-y-4 px-4">
              <li className="italic text-sm">
                Indulge in our homemade desserts, crafted with the finest
                ingredients.
              </li>
              <li>
                <span className="font-bold">1- Baklava:</span> A sweet pastry
                made of layers of filo dough, filled with chopped nuts and
                sweetened with honey.
              </li>
              <li>
                <span className="font-bold">2- Kunefe:</span> A delicious Middle
                Eastern dessert made with thin noodle-like pastry, soaked in
                sweet syrup and layered with cheese.
              </li>
              <li>
                <span className="font-bold">3- Tiramisu:</span> An Italian
                classic with layers of coffee-soaked ladyfingers, mascarpone
                cheese, and cocoa.
              </li>
              <li>
                <span className="font-bold">4- Cheesecake:</span> A rich and
                creamy cheesecake with a graham cracker crust, served with a
                fruit compote.
              </li>
              <li>
                <span className="font-bold">5- Chocolate Mousse:</span> A light
                and airy chocolate dessert, topped with whipped cream and
                chocolate shavings.
              </li>
              <li>
                <span className="font-bold">6- Panna Cotta:</span> A silky
                Italian dessert made with sweetened cream and gelatin, often
                served with berries.
              </li>
              <li>
                <span className="font-bold">7- Crème Brûlée:</span> A rich
                custard base topped with a layer of caramelized sugar.
              </li>
              <li>
                <span className="font-bold">8- Gelato:</span> Italian-style ice
                cream, creamier and denser than regular ice cream, in a variety
                of flavors.
              </li>
              <li>
                <span className="font-bold">9- Sorbet:</span> A dairy-free
                frozen dessert made with fruit puree, water, and sugar.
              </li>
              <li>
                <span className="font-bold">10- Rice Pudding:</span> A creamy
                dessert made with rice, milk, sugar, and cinnamon.
              </li>
            </ul>
          )}
        </div>

        {/* Beverages */}
        <div>
          <button
            className="w-full text-left text-lg font-bold text-[#f4ce86] bg-[#202020] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[#f4ce86]"
            onClick={() => toggleSection("beverages")}
          >
            Beverages
          </button>
          {openSection === "beverages" && (
            <ul className="mt-3 space-y-4 px-4">
              <li className="italic text-sm">
                Refreshing beverages to complement your meal.
              </li>
              <li>
                <span className="font-bold">1- Soft Drinks:</span> A variety of
                carbonated soft drinks.
              </li>
              <li>
                <span className="font-bold">2- Iced Tea:</span> Freshly brewed
                iced tea, sweetened or unsweetened.
              </li>
              <li>
                <span className="font-bold">3- Lemonade:</span> A refreshing
                blend of lemon juice, water, and sugar.
              </li>
              <li>
                <span className="font-bold">4- Coffee:</span> Freshly brewed
                coffee, regular or decaf.
              </li>
              <li>
                <span className="font-bold">5- Tea:</span> A selection of fine
                teas.
              </li>
              <li>
                <span className="font-bold">6- Milkshakes:</span> Creamy
                milkshakes in chocolate, vanilla, or strawberry.
              </li>
              <li>
                <span className="font-bold">7- Smoothies:</span> Blended
                beverages with fruit, yogurt, and milk or juice.
              </li>
              <li>
                <span className="font-bold">8- Sparkling Water:</span>{" "}
                Carbonated water, plain or flavored.
              </li>
              <li>
                <span className="font-bold">9- Bottled Water:</span> Still or
                sparkling bottled water.
              </li>
              <li>
                <span className="font-bold">10- Energy Drinks:</span> A variety
                of energy-boosting drinks.
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
