export const tegs = [
  {
    id: 28,
    name: "Action"
  },
  {
    id: 12,
    name: "Adventure"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  }
];

export const mockRecipes = {
  recipes: [
    {
      id: 11,
      name: "Chicken Biryani",
      ingredients: [
        "Basmati rice",
        "Chicken, cut into pieces",
        "Onions, thinly sliced",
        "Tomatoes, chopped",
        "Yogurt",
        "Ginger-garlic paste",
        "Biryani masala",
        "Green chilies, sliced",
        "Fresh coriander leaves",
        "Mint leaves",
        "Ghee",
        "Salt to taste"
      ],
      instructions: [
        "Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt.",
        "In a pot, sauté sliced onions until golden brown. Remove half for later use.",
        "Layer marinated chicken, chopped tomatoes, half of the fried onions, and rice in the pot.",
        "Top with ghee, green chilies, fresh coriander leaves, mint leaves, and the remaining fried onions.",
        "Cover and cook on low heat until the rice is fully cooked and aromatic.",
        "Serve hot, garnished with additional coriander and mint leaves."
      ],
      prepTimeMinutes: 30,
      cookTimeMinutes: 45,
      servings: 6,
      difficulty: "Medium",
      cuisine: "Pakistani",
      caloriesPerServing: 550,
      tags: [
        "Biryani",
        "Chicken",
        "Main course",
        "Indian",
        "Pakistani",
        "Asian"
      ],
      userId: 133,
      image: "https://cdn.dummyjson.com/recipe-images/11.webp",
      rating: 5,
      reviewCount: 32,
      mealType: ["Lunch", "Dinner"]
    },
    {
      id: 12,
      name: "Chicken Karahi",
      ingredients: [
        "Chicken, cut into pieces",
        "Tomatoes, chopped",
        "Green chilies, sliced",
        "Ginger, julienned",
        "Garlic, minced",
        "Coriander powder",
        "Cumin powder",
        "Red chili powder",
        "Garam masala",
        "Cooking oil",
        "Fresh coriander leaves",
        "Salt to taste"
      ],
      instructions: [
        "In a wok (karahi), heat cooking oil and sauté minced garlic until golden brown.",
        "Add chicken pieces and cook until browned on all sides.",
        "Add chopped tomatoes, green chilies, ginger, and spices. Cook until tomatoes are soft.",
        "Cover and simmer until the chicken is tender and the oil separates from the masala.",
        "Garnish with fresh coriander leaves and serve hot with naan or rice."
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 30,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Pakistani",
      caloriesPerServing: 420,
      tags: [
        "Chicken",
        "Karahi",
        "Main course",
        "Indian",
        "Pakistani",
        "Asian"
      ],
      userId: 49,
      image: "https://cdn.dummyjson.com/recipe-images/12.webp",
      rating: 4.8,
      reviewCount: 68,
      mealType: ["Lunch", "Dinner"]
    },
    {
      id: 13,
      name: "Aloo Keema",
      ingredients: [
        "Ground beef",
        "Potatoes, peeled and diced",
        "Onions, finely chopped",
        "Tomatoes, chopped",
        "Ginger-garlic paste",
        "Cumin powder",
        "Coriander powder",
        "Turmeric powder",
        "Red chili powder",
        "Cooking oil",
        "Fresh coriander leaves",
        "Salt to taste"
      ],
      instructions: [
        "In a pan, heat cooking oil and sauté chopped onions until golden brown.",
        "Add ginger-garlic paste and sauté until fragrant.",
        "Add ground beef and cook until browned. Drain excess oil if needed.",
        "Add diced potatoes, chopped tomatoes, and spices. Mix well.",
        "Cover and simmer until the potatoes are tender and the masala is well-cooked.",
        "Garnish with fresh coriander leaves and serve hot with naan or rice."
      ],
      prepTimeMinutes: 25,
      cookTimeMinutes: 35,
      servings: 5,
      difficulty: "Medium",
      cuisine: "Pakistani",
      caloriesPerServing: 380,
      tags: ["Keema", "Potatoes", "Main course", "Pakistani", "Asian"],
      userId: 152,
      image: "https://cdn.dummyjson.com/recipe-images/13.webp",
      rating: 4.6,
      reviewCount: 53,
      mealType: ["Lunch", "Dinner"]
    },
    {
      id: 14,
      name: "Chapli Kebabs",
      ingredients: [
        "Ground beef",
        "Onions, finely chopped",
        "Tomatoes, finely chopped",
        "Green chilies, chopped",
        "Coriander leaves, chopped",
        "Pomegranate seeds",
        "Ginger-garlic paste",
        "Cumin powder",
        "Coriander powder",
        "Red chili powder",
        "Egg",
        "Cooking oil",
        "Salt to taste"
      ],
      instructions: [
        "In a large bowl, mix ground beef, chopped onions, tomatoes, green chilies, coriander leaves, and pomegranate seeds.",
        "Add ginger-garlic paste, cumin powder, coriander powder, red chili powder, and salt. Mix well.",
        "Add an egg to bind the mixture and form into round flat kebabs.",
        "Heat cooking oil in a pan and shallow fry the kebabs until browned on both sides.",
        "Serve hot with naan or mint chutney."
      ],
      prepTimeMinutes: 30,
      cookTimeMinutes: 20,
      servings: 4,
      difficulty: "Medium",
      cuisine: "Pakistani",
      caloriesPerServing: 320,
      tags: ["Kebabs", "Beef", "Indian", "Pakistani", "Asian"],
      userId: 152,
      image: "https://cdn.dummyjson.com/recipe-images/14.webp",
      rating: 4.7,
      reviewCount: 98,
      mealType: ["Lunch", "Dinner", "Snacks"]
    },
    {
      id: 15,
      name: "Saag (Spinach) with Makki di Roti",
      ingredients: [
        "Mustard greens, washed and chopped",
        "Spinach, washed and chopped",
        "Cornmeal (makki ka atta)",
        "Onions, finely chopped",
        "Green chilies, chopped",
        "Ginger, grated",
        "Ghee",
        "Salt to taste"
      ],
      instructions: [
        "Boil mustard greens and spinach until tender. Drain and blend into a coarse paste.",
        "In a pan, sauté chopped onions, green chilies, and grated ginger in ghee until golden brown.",
        "Add the greens paste and cook until it thickens.",
        "Meanwhile, knead cornmeal with water to make a dough. Roll into rotis (flatbreads).",
        "Cook the rotis on a griddle until golden brown.",
        "Serve hot saag with makki di roti and a dollop of ghee."
      ],
      prepTimeMinutes: 40,
      cookTimeMinutes: 30,
      servings: 3,
      difficulty: "Medium",
      cuisine: "Pakistani",
      caloriesPerServing: 280,
      tags: ["Saag", "Roti", "Main course", "Indian", "Pakistani", "Asian"],
      userId: 43,
      image: "https://cdn.dummyjson.com/recipe-images/15.webp",
      rating: 4.3,
      reviewCount: 86,
      mealType: ["Breakfast", "Lunch", "Dinner"]
    },
    {
      id: 16,
      name: "Japanese Ramen Soup",
      ingredients: [
        "Ramen noodles",
        "Chicken broth",
        "Soy sauce",
        "Mirin",
        "Sesame oil",
        "Shiitake mushrooms, sliced",
        "Bok choy, chopped",
        "Green onions, sliced",
        "Soft-boiled eggs",
        "Grilled chicken slices",
        "Norwegian seaweed (nori)"
      ],
      instructions: [
        "Cook ramen noodles according to package instructions and set aside.",
        "In a pot, combine chicken broth, soy sauce, mirin, and sesame oil. Bring to a simmer.",
        "Add sliced shiitake mushrooms and chopped bok choy. Cook until vegetables are tender.",
        "Divide the cooked noodles into serving bowls and ladle the hot broth over them.",
        "Top with green onions, soft-boiled eggs, grilled chicken slices, and nori.",
        "Serve hot and enjoy the authentic Japanese ramen!"
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      servings: 2,
      difficulty: "Medium",
      cuisine: "Japanese",
      caloriesPerServing: 480,
      tags: ["Ramen", "Japanese", "Soup", "Asian"],
      userId: 85,
      image: "https://cdn.dummyjson.com/recipe-images/16.webp",
      rating: 4.9,
      reviewCount: 38,
      mealType: ["Dinner"]
    },
    {
      id: 17,
      name: "Moroccan Chickpea Tagine",
      ingredients: [
        "Chickpeas, cooked",
        "Tomatoes, chopped",
        "Carrots, diced",
        "Onions, finely chopped",
        "Garlic, minced",
        "Cumin",
        "Coriander",
        "Cinnamon",
        "Paprika",
        "Vegetable broth",
        "Olives",
        "Fresh cilantro, chopped"
      ],
      instructions: [
        "In a tagine or large pot, sauté chopped onions and minced garlic until softened.",
        "Add diced carrots, chopped tomatoes, and cooked chickpeas.",
        "Season with cumin, coriander, cinnamon, and paprika. Stir to coat.",
        "Pour in vegetable broth and bring to a simmer. Cook until carrots are tender.",
        "Stir in olives and garnish with fresh cilantro before serving.",
        "Serve this flavorful Moroccan dish with couscous or crusty bread."
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 30,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Moroccan",
      caloriesPerServing: 320,
      tags: ["Tagine", "Chickpea", "Moroccan"],
      userId: 207,
      image: "https://cdn.dummyjson.com/recipe-images/17.webp",
      rating: 4.5,
      reviewCount: 50,
      mealType: ["Dinner"]
    },
    {
      id: 18,
      name: "Korean Bibimbap",
      ingredients: [
        "Cooked white rice",
        "Beef bulgogi (marinated and grilled beef slices)",
        "Carrots, julienned and sautéed",
        "Spinach, blanched and seasoned",
        "Zucchini, sliced and grilled",
        "Bean sprouts, blanched",
        "Fried egg",
        "Gochujang (Korean red pepper paste)",
        "Sesame oil",
        "Toasted sesame seeds"
      ],
      instructions: [
        "Arrange cooked white rice in a bowl.",
        "Top with beef bulgogi, sautéed carrots, seasoned spinach, grilled zucchini, and blanched bean sprouts.",
        "Place a fried egg on top and drizzle with gochujang and sesame oil.",
        "Sprinkle with toasted sesame seeds before serving.",
        "Mix everything together before enjoying this delicious Korean bibimbap!",
        "Feel free to customize with additional vegetables or protein."
      ],
      prepTimeMinutes: 30,
      cookTimeMinutes: 20,
      servings: 2,
      difficulty: "Medium",
      cuisine: "Korean",
      caloriesPerServing: 550,
      tags: ["Bibimbap", "Korean", "Rice"],
      userId: 121,
      image: "https://cdn.dummyjson.com/recipe-images/18.webp",
      rating: 4.9,
      reviewCount: 56,
      mealType: ["Dinner"]
    },
    {
      id: 19,
      name: "Greek Moussaka",
      ingredients: [
        "Eggplants, sliced",
        "Ground lamb or beef",
        "Onions, finely chopped",
        "Garlic, minced",
        "Tomatoes, crushed",
        "Red wine",
        "Cinnamon",
        "Allspice",
        "Nutmeg",
        "Olive oil",
        "Milk",
        "Flour",
        "Parmesan cheese",
        "Egg yolks"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "Sauté sliced eggplants in olive oil until browned. Set aside.",
        "In the same pan, cook chopped onions and minced garlic until softened.",
        "Add ground lamb or beef and brown. Stir in crushed tomatoes, red wine, and spices.",
        "In a separate saucepan, make béchamel sauce: melt butter, whisk in flour, add milk, and cook until thickened.",
        "Remove from heat and stir in Parmesan cheese and egg yolks.",
        "In a baking dish, layer eggplants and meat mixture. Top with béchamel sauce.",
        "Bake for 40-45 minutes until golden brown. Let it cool before slicing.",
        "Serve slices of moussaka warm and enjoy this Greek classic!"
      ],
      prepTimeMinutes: 45,
      cookTimeMinutes: 45,
      servings: 6,
      difficulty: "Medium",
      cuisine: "Greek",
      caloriesPerServing: 420,
      tags: ["Moussaka", "Greek"],
      userId: 173,
      image: "https://cdn.dummyjson.com/recipe-images/19.webp",
      rating: 4.3,
      reviewCount: 26,
      mealType: ["Dinner"]
    },
    {
      id: 20,
      name: "Butter Chicken (Murgh Makhani)",
      ingredients: [
        "Chicken thighs, boneless and skinless",
        "Yogurt",
        "Ginger-garlic paste",
        "Garam masala",
        "Kashmiri red chili powder",
        "Tomato puree",
        "Butter",
        "Heavy cream",
        "Kasuri methi (dried fenugreek leaves)",
        "Sugar",
        "Salt to taste"
      ],
      instructions: [
        "Marinate chicken thighs in a mixture of yogurt, ginger-garlic paste, garam masala, and Kashmiri red chili powder.",
        "In a pan, melt butter and sauté the marinated chicken until browned.",
        "Add tomato puree and cook until the oil separates. Stir in heavy cream.",
        "Sprinkle kasuri methi, sugar, and salt. Simmer until the chicken is fully cooked.",
        "Serve this creamy butter chicken over rice or with naan for an authentic Pakistani/Indian experience."
      ],
      prepTimeMinutes: 30,
      cookTimeMinutes: 25,
      servings: 4,
      difficulty: "Medium",
      cuisine: "Pakistani",
      caloriesPerServing: 480,
      tags: ["Butter chicken", "Curry", "Indian", "Pakistani", "Asian"],
      userId: 138,
      image: "https://cdn.dummyjson.com/recipe-images/20.webp",
      rating: 4.5,
      reviewCount: 44,
      mealType: ["Dinner"]
    }
  ],
  total: 50,
  skip: 0,
  limit: 30
};
