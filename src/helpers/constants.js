export const PLAN_OPTIONS = [
  {
    name: "Free",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
    price: 0,
  },
  {
    name: "Pro",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    price: 18,
    bestValue: true,
  },
  {
    name: "Enterprise",
    description:
      "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
    price: null,
  },
];

export const PLAN_SPECS = [
  {
    text: "2 links",
    included: ["F", "P", "E"],
  },
  {
    text: "Own analytics platform",
    included: ["F", "P", "E"],
  },
  {
    text: "Chat support",
    included: ["P", "E"],
  },
  {
    text: "Mobile application",
    included: ["E"],
  },
  {
    text: "Unlimited users",
    included: ["E"],
  },
  {
    text: "Customize panel",
    included: ["E"],
    special: ["E"],
  },
];
