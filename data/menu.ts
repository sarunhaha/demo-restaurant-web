export interface MenuItem {
  name: string
  price: number
  description: string
  bestseller?: boolean
  spicy?: boolean
  vegetarian?: boolean
  image?: string
}

export interface MenuCategory {
  name: string
  description: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Starters",
    description: "Begin your culinary journey",
    items: [
      {
        name: "Spring Rolls",
        price: 12.90,
        description: "Crispy vegetable spring rolls with sweet chili sauce",
        bestseller: true,
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400"
      },
      {
        name: "Tom Yum Soup",
        price: 14.90,
        description: "Traditional Thai hot and sour soup with prawns",
        spicy: true,
        image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400"
      },
      {
        name: "Satay Chicken",
        price: 15.90,
        description: "Grilled chicken skewers with peanut sauce",
        bestseller: true,
        image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400"
      },
      {
        name: "Edamame",
        price: 9.90,
        description: "Steamed soybeans with sea salt",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=400"
      },
      {
        name: "Gyoza",
        price: 13.90,
        description: "Pan-fried Japanese dumplings with dipping sauce",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400"
      }
    ]
  },
  {
    name: "Main Courses",
    description: "Signature dishes from across Asia",
    items: [
      {
        name: "Pad Thai",
        price: 22.90,
        description: "Classic Thai stir-fried rice noodles with prawns, tofu, and peanuts",
        bestseller: true,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400"
      },
      {
        name: "Green Curry",
        price: 24.90,
        description: "Aromatic Thai green curry with chicken and vegetables",
        spicy: true,
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400"
      },
      {
        name: "Teriyaki Salmon",
        price: 28.90,
        description: "Grilled salmon with teriyaki glaze and steamed rice",
        bestseller: true,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400"
      },
      {
        name: "Massaman Curry",
        price: 25.90,
        description: "Rich and mild curry with beef, potatoes, and peanuts",
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400"
      },
      {
        name: "Kung Pao Chicken",
        price: 23.90,
        description: "Wok-tossed chicken with peanuts and dried chilies",
        spicy: true,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400"
      },
      {
        name: "Crispy Duck",
        price: 32.90,
        description: "Half crispy duck with hoisin sauce and pancakes",
        bestseller: true,
        image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400"
      }
    ]
  },
  {
    name: "Noodles & Rice",
    description: "Comfort food favorites",
    items: [
      {
        name: "Fried Rice",
        price: 18.90,
        description: "Wok-fried jasmine rice with egg, vegetables, and your choice of protein",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400"
      },
      {
        name: "Singapore Noodles",
        price: 21.90,
        description: "Curry-flavored rice vermicelli with prawns and BBQ pork",
        spicy: true,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400"
      },
      {
        name: "Pho Bo",
        price: 19.90,
        description: "Vietnamese beef noodle soup with fresh herbs",
        bestseller: true,
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400"
      },
      {
        name: "Dan Dan Noodles",
        price: 20.90,
        description: "Sichuan noodles with spicy minced pork",
        spicy: true,
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400"
      },
      {
        name: "Nasi Goreng",
        price: 19.90,
        description: "Indonesian fried rice with fried egg and prawn crackers",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400"
      }
    ]
  },
  {
    name: "Desserts",
    description: "Sweet endings to your meal",
    items: [
      {
        name: "Mango Sticky Rice",
        price: 14.90,
        description: "Sweet coconut sticky rice with fresh mango",
        bestseller: true,
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=400"
      },
      {
        name: "Green Tea Ice Cream",
        price: 10.90,
        description: "Creamy matcha ice cream with red bean",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400"
      },
      {
        name: "Fried Banana",
        price: 11.90,
        description: "Crispy fried banana with honey and sesame",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=400"
      },
      {
        name: "Coconut Panna Cotta",
        price: 12.90,
        description: "Silky coconut cream dessert with passion fruit",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400"
      }
    ]
  }
]

export const getAllMenuItems = (): MenuItem[] => {
  return menuCategories.flatMap(category => category.items)
}

export const getBestsellers = (): MenuItem[] => {
  return getAllMenuItems().filter(item => item.bestseller)
}
