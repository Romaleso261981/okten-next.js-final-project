export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export type ApiResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

export type Teg = {
  id: number;
  name: string;
};

export type RecipeDetails = {
  caloriesPerServing: number;
  cookTimeMinutes: number;
  cuisine: string;
  difficulty: string;
  id: number;
  image: string;
  ingredients: string[];
  instructions: string[];
  mealType: string[];
  name: string;
  prepTimeMinutes: number;
  rating: number;
  reviewCount: number;
  servings: number;
  tags: string[];
  userId: number;
};

export type User = {
  id?: number;
  lastName: string;
  firstName: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
  };
  age: number;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  birthDate: string;
  bloodGroup: string;
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
    };
  };
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  ein: string;
  email: string;
  eyeColor: string;
  gender: string;
  hair: {
    color: string;
    type: string;
  };
  height: number;
  image: string;
  ip: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  role: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
};

export type ShortUser = Pick<User, "lastName" | "firstName">;
