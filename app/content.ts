export const site = {
  name: "Tangra Fusion",
  url: "https://www.tangrafusionnyc.com",
  description:
    "Chinese cuisine, Indian style. Halal meat, wok-fired Indo-Chinese signatures, and two Queens dining rooms.",
  yelpMenuUrl:
    "https://www.yelp.com/menu/tangra-asian-fusion-cuisine-sunnyside",
  masalaYelpMenuUrl: "https://www.yelp.com/menu/tangra-masala-elmhurst-2",
  novusUrl: "https://www.novusnyc.org/",
};

export const navItems = [
  { label: "Story", href: "/story" },
  { label: "Menu", href: "/menu" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export const signatures = [
  "Lollipop Chicken",
  "Chilli Fish",
  "Manchurian Fried Rice",
  "Tangra Masala Fish",
  "Chicken Hot & Sour Soup",
];

export const images = {
  hero: "https://www.tangrafusionnyc.com/images/1.jpg",
  diningRoom: "https://www.tangrafusionnyc.com/images/2.jpg",
  banquetRoom: "https://www.tangrafusionnyc.com/images/4.jpg",
  tableSpread: "https://www.tangrafusionnyc.com/images/5.jpg",
  lollipop: "https://www.tangrafusionnyc.com/images/3.jpg",
  saucyChicken: "https://www.tangrafusionnyc.com/images/7.jpg",
  bar: "https://www.tangrafusionnyc.com/images/10.jpg",
  elmhurstStorefront: "/images/tangra-masala-storefront.jpg",
  sunnysideStorefront: "/images/tangra-sunnyside-storefront.jpg",
};

export const locationMenus = [
  {
    name: "Tangra Asian Fusion",
    slug: "tangra-fusion",
    neighborhood: "Sunnyside",
    address: "3923 Queens Boulevard",
    yelpMenuUrl: site.yelpMenuUrl,
    note: "Sunnyside menu highlights from Yelp. Call for current availability.",
    sections: [
      {
        title: "Lunch Specials",
        note: "Served with hot and sour soup or corn soup and steamed rice.",
        items: [
          {
            name: "Chicken Chili Lunch",
            description: "Spicy chicken lunch plate with soup and rice.",
            price: "$12.95",
            tags: ["Spicy"],
          },
          {
            name: "Chicken Manchurian Lunch",
            description: "Chicken in Manchurian sauce with soup and rice.",
            price: "$12.95",
            tags: ["Spicy"],
          },
          {
            name: "Tangra Masala Fish Lunch",
            description: "Fish in Tangra masala with soup and rice.",
            price: "$12.95",
            tags: ["Spicy"],
          },
          {
            name: "Chicken Chow Mein Lunch",
            description: "Chow mein lunch special with soup and rice.",
            price: "$11.95",
            tags: [],
          },
        ],
      },
      {
        title: "Appetizers & Soup",
        note: "Crispy starters and warming soups.",
        items: [
          {
            name: "Lollipop Chicken",
            description: "Tangra's fried chicken signature with Indo-Chinese spice.",
            price: "$13.50",
            tags: ["Popular"],
          },
          {
            name: "Fried Spicy Chicken Wings",
            description: "Crisp wings with a spicy finish.",
            price: "$9.50",
            tags: ["Spicy"],
          },
          {
            name: "Tangra Masala Fish Finger",
            description: "Fried fish fingers with the house masala profile.",
            price: "$9.95",
            tags: ["Popular"],
          },
          {
            name: "Chicken Hot & Sour Soup",
            description: "Peppery hot-and-sour soup with chicken.",
            price: "$4.95",
            tags: ["Spicy"],
          },
        ],
      },
      {
        title: "Noodles & Rice",
        note: "Wok-fired comfort from the Sunnyside menu.",
        items: [
          {
            name: "Chicken Chow Mein",
            description: "Spicy chicken chow mein.",
            price: "$10.50",
            tags: ["Spicy"],
          },
          {
            name: "Chicken Tangra Masala Chow Mein",
            description: "Chow mein coated in Tangra masala.",
            price: "$11.95",
            tags: ["Spicy"],
          },
          {
            name: "Shrimp Chow Mein",
            description: "Shrimp chow mein with wok heat.",
            price: "$13.50",
            tags: ["Spicy"],
          },
          {
            name: "Chicken Fried Rice",
            description: "Regular chicken fried rice served from the wok.",
            price: "$9.50",
            tags: ["Popular"],
          },
        ],
      },
      {
        title: "Chicken, Beef & Seafood",
        note: "Dry or gravy-style Tangra staples.",
        items: [
          {
            name: "Chicken Tangra Masala",
            description: "Chicken in Tangra masala, available dry or with gravy.",
            price: "$14.95",
            tags: ["Spicy"],
          },
          {
            name: "Beef Manchurian",
            description: "Beef in Manchurian sauce, dry or gravy.",
            price: "$15.95",
            tags: ["Spicy"],
          },
          {
            name: "Tiger Prawn Tangra Masala",
            description: "Tiger prawns in Tangra masala, dry or gravy.",
            price: "$18.95",
            tags: ["Spicy"],
          },
          {
            name: "Spicy Salt & Pepper Tiger Prawn",
            description: "Dry-style tiger prawns with salt, pepper, and spice.",
            price: "$18.95",
            tags: ["Popular", "Spicy"],
          },
        ],
      },
      {
        title: "Vegetarian & Wraps",
        note: "Paneer, vegetables, noodles, and roti wraps.",
        items: [
          {
            name: "Spicy Paneer Burger",
            description: "Crispy paneer on a toasted butter bun with chutney.",
            price: "$12.00",
            tags: ["Vegetarian", "Spicy"],
          },
          {
            name: "Tangra Masala Gobi Wraps",
            description: "Roti stuffed with cauliflower and Szechuan spices.",
            price: "$11.00",
            tags: ["Vegetarian"],
          },
          {
            name: "Vegetable Singapore Noodle",
            description: "Vegetable rice vermicelli with spicy seasoning.",
            price: "$11.50",
            tags: ["Vegetarian"],
          },
          {
            name: "Eggplant Manchurian",
            description: "Dry-style eggplant in spicy Manchurian sauce.",
            price: "$14.50",
            tags: ["Vegetarian", "Spicy"],
          },
        ],
      },
    ],
  },
  {
    name: "Tangra Masala",
    slug: "tangra-masala",
    neighborhood: "Elmhurst",
    address: "87-09 Grand Avenue",
    yelpMenuUrl: site.masalaYelpMenuUrl,
    note: "Elmhurst menu highlights from Yelp. Call for current availability.",
    sections: [
      {
        title: "Appetizers",
        note: "Classic Elmhurst starters.",
        items: [
          {
            name: "Lolly Pop Chicken",
            description: "Six pieces of Tangra's fried chicken signature.",
            price: "$13.50",
            tags: ["Popular"],
          },
          {
            name: "Fried Spicy Chicken Wings",
            description: "Six chicken wings coated in spicy seasoning.",
            price: "$11.95",
            tags: ["Spicy"],
          },
          {
            name: "Tangra Masala Fish Finger",
            description: "Eight fried fish fingers with masala seasoning.",
            price: "$9.95",
            tags: ["Popular"],
          },
          {
            name: "Curry Chicken Roll",
            description: "Two curried chicken rolls.",
            price: "$5.95",
            tags: ["Spicy"],
          },
        ],
      },
      {
        title: "Soups",
        note: "Chicken, shrimp, and vegetarian bowls.",
        items: [
          {
            name: "Chicken Hot and Sour Soup",
            description: "Spicy and sour chicken soup.",
            price: "$4.95",
            tags: ["Spicy"],
          },
          {
            name: "Chicken Thai Soup",
            description: "Chicken soup with Thai-style aromatics.",
            price: "$4.95",
            tags: ["Spicy"],
          },
          {
            name: "Shrimp Thai Soup",
            description: "Shrimp soup with spicy Thai-style flavor.",
            price: "$5.50",
            tags: ["Spicy"],
          },
          {
            name: "Vegetable Manchow Soup",
            description: "Vegetarian Manchow-style soup.",
            price: "$4.95",
            tags: ["Vegetarian"],
          },
        ],
      },
      {
        title: "Noodles & Fried Rice",
        note: "Tangra masala, Manchurian, Singapore, and chow mein.",
        items: [
          {
            name: "Chicken Tangra Masala Chow Mein",
            description: "Chicken chow mein in Tangra masala.",
            price: "$13.50",
            tags: ["Spicy"],
          },
          {
            name: "Mixed Chow Mein",
            description: "Mixed chow mein with meat, seafood, and vegetables.",
            price: "$14.50",
            tags: ["Popular"],
          },
          {
            name: "Chicken Manchurian Fried Rice",
            description: "Chicken fried rice with Manchurian sauce.",
            price: "$12.00",
            tags: [],
          },
          {
            name: "Mixed Tangra Masala Fried Rice",
            description: "Mixed fried rice with the house Tangra masala profile.",
            price: "$14.00",
            tags: ["Spicy"],
          },
        ],
      },
      {
        title: "Vegetarian",
        note: "Paneer, gobi, tofu, fries, and vegetable plates.",
        items: [
          {
            name: "Masala Fries",
            description: "Home-cut fries with masala seasoning.",
            price: "$6.50",
            tags: ["Vegetarian"],
          },
          {
            name: "Paneer Pakora",
            description: "Eight pieces of spiced paneer pakora.",
            price: "$10.50",
            tags: ["Vegetarian"],
          },
          {
            name: "Vegetable Manchurian",
            description: "Vegetable entree in Manchurian sauce.",
            price: "$14.50",
            tags: ["Vegetarian"],
          },
          {
            name: "Vegetable Tangra Masala Chow Mein",
            description: "Vegetable chow mein with Tangra masala.",
            price: "$12.95",
            tags: ["Vegetarian", "Spicy"],
          },
        ],
      },
      {
        title: "Goat, Beef & Chicken",
        note: "House sauces and Indo-Chinese classics.",
        items: [
          {
            name: "Tangra Masala Chicken",
            description: "Chicken in the house Tangra masala sauce.",
            price: "$14.95",
            tags: ["Spicy"],
          },
          {
            name: "Manchurian Chicken",
            description: "Chicken in Manchurian sauce.",
            price: "$14.95",
            tags: ["Spicy"],
          },
          {
            name: "Tangra Masala Beef",
            description: "Beef in Tangra masala sauce.",
            price: "$15.95",
            tags: ["Spicy"],
          },
          {
            name: "Chilli Goat",
            description: "Goat tossed in chile-forward sauce.",
            price: "$17.95",
            tags: ["Spicy"],
          },
        ],
      },
      {
        title: "Seafood & Lunch",
        note: "Tiger prawn, fish, and lunch specials.",
        items: [
          {
            name: "Tangra Masala Tiger Prawn",
            description: "Tiger prawns in Tangra masala.",
            price: "$18.95",
            tags: ["Spicy"],
          },
          {
            name: "Fish with Hot Garlic Sauce",
            description: "Fish in a pungent hot garlic sauce.",
            price: "$16.95",
            tags: ["Spicy"],
          },
          {
            name: "Lunch Special A",
            description: "Served with hot and sour or corn soup and steamed rice.",
            price: "$12.95",
            tags: [],
          },
          {
            name: "Lunch Special B",
            description: "Elmhurst lunch special from the Yelp menu.",
            price: "$11.95",
            tags: [],
          },
        ],
      },
    ],
  },
];

export const menuSections = locationMenus[0].sections;

export const locations = [
  {
    name: "Tangra Masala",
    slug: "elmhurst",
    neighborhood: "Elmhurst",
    address: "87-09 Grand Avenue, Elmhurst, NY 11373",
    streetAddress: "87-09 Grand Avenue",
    addressLocality: "Elmhurst",
    addressRegion: "NY",
    postalCode: "11373",
    phone: "(718) 803-2298",
    phoneHref: "tel:7188032298",
    telephone: "+17188032298",
    yelpMenuUrl: site.masalaYelpMenuUrl,
    hours: ["Monday - Thursday: 12PM - 9:30PM", "Friday - Sunday: 1PM - 12AM"],
    openingHours: ["Mo-Th 12:00-21:30", "Fr-Su 13:00-00:00"],
    seoHeading: "Elmhurst Indo-Chinese restaurant on Grand Avenue",
    seoDescription:
      "Tangra Masala in Elmhurst serves Chinese-Indian cooking, halal meat, Manchurian sauces, spicy soups, fried rice, noodles, and seafood close to Queens families looking for Indo-Chinese takeout or a sit-down meal.",
    highlights: ["Indo-Chinese food in Elmhurst", "Halal meat", "Grand Avenue takeout"],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=87-09+Grand+Avenue+Elmhurst+NY+11373",
    image: images.elmhurstStorefront,
    imageAlt:
      "Tangra Masala storefront on Grand Avenue in Elmhurst, Queens",
    imageWidth: 1000,
    imageHeight: 750,
  },
  {
    name: "Tangra Asian Fusion",
    slug: "sunnyside",
    neighborhood: "Sunnyside",
    address: "3923 Queens Boulevard, Sunnyside, NY 11104",
    streetAddress: "3923 Queens Boulevard",
    addressLocality: "Sunnyside",
    addressRegion: "NY",
    postalCode: "11104",
    phone: "(718) 786-8008",
    phoneHref: "tel:7187868008",
    telephone: "+17187868008",
    yelpMenuUrl: site.yelpMenuUrl,
    hours: ["Sunday - Thursday: 1PM - 11PM", "Friday - Saturday: 1PM - 12AM"],
    openingHours: ["Su-Th 13:00-23:00", "Fr-Sa 13:00-00:00"],
    seoHeading: "Sunnyside Asian fusion restaurant on Queens Boulevard",
    seoDescription:
      "Tangra Asian Fusion in Sunnyside brings Chinese-Indian restaurant favorites to Queens Boulevard, including lollipop chicken, chilli fish, Manchurian fried rice, Hakka noodles, soups, and family-style Asian fusion plates.",
    highlights: ["Asian fusion in Sunnyside", "Queens Boulevard dining", "Family-style plates"],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3923+Queens+Boulevard+Sunnyside+NY+11104",
    image: images.sunnysideStorefront,
    imageAlt:
      "Tangra Asian Fusion storefront on Queens Boulevard in Sunnyside, Queens",
    imageWidth: 680,
    imageHeight: 510,
  },
];

export const galleryImages = [
  {
    src: images.lollipop,
    alt: "Tangra Fusion lollipop chicken appetizer with Indo-Chinese spice",
    label: "Lollipop Chicken",
  },
  {
    src: images.tableSpread,
    alt: "Tangra Fusion family-style Chinese-Indian table spread",
    label: "Family-style plates",
  },
  {
    src: images.banquetRoom,
    alt: "Tangra Fusion Sunnyside dining room for family meals and banquets",
    label: "Sunnyside dining room",
  },
  {
    src: images.saucyChicken,
    alt: "Tangra Fusion saucy Manchurian chicken dish",
    label: "Manchurian heat",
  },
];

export const storyParagraphs = [
  "Just as there are not a whole lot of Chinese-American restaurants in Calcutta, there is not exactly a glut of Chinese-Indian joints in New York. There is however Tangra Masala, the Elmhurst-based granddaddy of New York Chinese-Indian restaurants.",
  "Tangra is a destination for the particular brand of Chinese food adapted to the Indian palate by generations of ethnic-Chinese Indians.",
  "After fans traveled from Manhattan and beyond to squeeze into the little storefront, Tangra branched out with an ornate Sunnyside dining room.",
  "Chef-partner Peter Lo and team continue to anchor the menu around signatures like deep-fried lolly pop chicken, chilli fish, Manchurian fried rice, and newer additions inspired by the neighborhood appetite.",
];
