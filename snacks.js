/*
 * ┌─────────────────────────────────────────────────────────────┐
 * │  THE SNACK MENU — snack data                                  │
 * │  This is the ONLY file you edit to update the shop.           │
 * │                                                               │
 * │  To add a snack, copy a block below and change the values.    │
 * │  Fields:                                                      │
 * │    emoji     (string)  the snack emoji            [required]  │
 * │    name      (string)  the snack name             [required]  │
 * │    price     (number)  price in dollars           [required]  │
 * │    category  (string)  groups the snack           [required]  │
 * │    badge     (string)  optional tag e.g. "New"    [optional]  │
 * │                                                               │
 * │  New categories appear automatically — no HTML editing.       │
 * └─────────────────────────────────────────────────────────────┘
 */

const snacks = [
  {
    emoji: "🥤",
    name: "Capri Sun",
    price: 1.00,
    category: "Drinks"
  },
  {
    emoji: "🌶️",
    name: "Takis",
    price: 1.00,
    category: "Chips",
    badge: "Popular"
  },
  {
    emoji: "🍫",
    name: "M&Ms",
    price: 1.25,
    category: "Candy"
  },
  {
    emoji: "🍬",
    name: "Trident Tropical",
    price: 2.00,
    category: "Gum",
    badge: "⭐ Best Seller"
  },
  {
    emoji: "🟢",
    name: "Extra Gum 15ct",
    price: 1.80,
    category: "Gum"
  }
];
