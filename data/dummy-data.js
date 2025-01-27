import Category from "../models/category";
import Flashcard from "../models/flashcard";

export const CATEGORIES = [
  new Category("c1", "Animal"),
  new Category("c2", "Fruit"),
  new Category("c3", "Vegetable"),
  new Category("c4", "Vehicle"),
  new Category("c5", "Profession"),
  new Category("c6", "House"),
  new Category("c7", "bedroom"),
  new Category("c8", "Living Room"),
  new Category("c9", "Bathroom"),
  new Category("c10", "Kitchen"),
];

export const FLASHCARDS = [
  new Flashcard(
    "f1",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "química",
    "chemical"
  ),
  new Flashcard(
    "f2",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "bombero",
    "firefighter"
  ),
  new Flashcard(
    "f3",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "piloto",
    "firefighter"
  ),
  new Flashcard(
    "f4",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "jueza",
    "firefighter"
  ),
  new Flashcard(
    "f5",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "electricista",
    "firefighter"
  ),
  new Flashcard(
    "f6",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "maestra",
    "firefighter"
  ),
  new Flashcard(
    "f7",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "dentista",
    "firefighter"
  ),
  new Flashcard(
    "f8",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "cajera",
    "firefighter"
  ),
  new Flashcard(
    "f9",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "informático",
    "firefighter"
  ),
  new Flashcard(
    "f10",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "fotógrafo",
    "firefighter"
  ),
  new Flashcard(
    "f11",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "cartero",
    "firefighter"
  ),
  new Flashcard(
    "f12",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "arquitecta",
    "firefighter"
  ),
  new Flashcard(
    "f13",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "camarero",
    "firefighter"
  ),
  new Flashcard(
    "f14",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "peluquero",
    "firefighter"
  ),
  new Flashcard(
    "f15",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "periodista",
    "firefighter"
  ),
  new Flashcard(
    "f16",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "periodista",
    "firefighter"
  ),
  new Flashcard(
    "f17",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "periodista",
    "firefighter"
  ),
  new Flashcard(
    "f18",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "policía",
    "firefighter"
  ),
  new Flashcard(
    "f19",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "médica",
    "firefighter"
  ),
  new Flashcard(
    "f20",
    ["c5"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    "cantante",
    "firefighter"
  ),
];
