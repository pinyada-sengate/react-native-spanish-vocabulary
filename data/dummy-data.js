import Category from "../models/category";
import Flashcard from "../models/flashcard";

export const CATEGORIES = [
  new Category(
    "c1",
    "Animal",
    require("../assets/images/professions/chemical.jpg")
  ),
  new Category(
    "c2",
    "Fruit",
    require("../assets/images/professions/chemical.jpg")
  ),
  new Category(
    "c3",
    "Vegetable",
    require("../assets/images/professions/chemical.jpg")
  ),
  new Category(
    "c4",
    "Vehicle",
    require("../assets/images/professions/chemical.jpg")
  ),
  new Category(
    "c5",
    "Profession",
    require("../assets/images/professions/chemical.jpg")
  ),
  new Category(
    "c6",
    "House",
    require("../assets/images/professions/chemical.jpg")
  ),
  new Category(
    "c7",
    "bedroom",
    require("../assets/images/professions/chemical.jpg")
  ),
  new Category(
    "c8",
    "Living Room",
    require("../assets/images/professions/chemical.jpg")
  ),
  new Category(
    "c9",
    "Bathroom",
    require("../assets/images/professions/chemical.jpg")
  ),
  new Category(
    "c10",
    "Kitchen",
    require("../assets/images/professions/chemical.jpg")
  ),
];

export const FLASHCARDS = [
  new Flashcard(
    "f1",
    ["c5"],
    require("../assets/images/professions/chemical.jpg"),
    "química",
    "chemical"
  ),
  new Flashcard(
    "f2",
    ["c5"],
    require("../assets/images/professions/firefighter.jpg"),
    "bombero",
    "firefighter"
  ),
  new Flashcard(
    "f3",
    ["c5"],
    require("../assets/images/professions/pilot.jpg"),
    "piloto",
    "pilot"
  ),
  new Flashcard(
    "f4",
    ["c5"],
    require("../assets/images/professions/judge.jpg"),
    "jueza",
    "judge"
  ),
  new Flashcard(
    "f5",
    ["c5"],
    require("../assets/images/professions/electrician.jpg"),
    "electricista",
    "electrician"
  ),
  new Flashcard(
    "f6",
    ["c5"],
    require("../assets/images/professions/teacher.jpg"),
    "maestra",
    "teacher"
  ),
  new Flashcard(
    "f7",
    ["c5"],
    require("../assets/images/professions/dentist.jpg"),
    "dentista",
    "dentist"
  ),
  new Flashcard(
    "f8",
    ["c5"],
    require("../assets/images/professions/cashier.jpg"),
    "cajera",
    "cashier"
  ),
  new Flashcard(
    "f9",
    ["c5"],
    require("../assets/images/professions/computer-scientist.jpg"),
    "informático",
    "computer scientist"
  ),
  new Flashcard(
    "f10",
    ["c5"],
    require("../assets/images/professions/photographer.jpg"),
    "fotógrafo",
    "photographer"
  ),
  new Flashcard(
    "f11",
    ["c5"],
    require("../assets/images/professions/mailman.jpg"),
    "cartero",
    "mailman"
  ),
  new Flashcard(
    "f12",
    ["c5"],
    require("../assets/images/professions/architect.jpg"),
    "arquitecta",
    "architect"
  ),
  new Flashcard(
    "f13",
    ["c5"],
    require("../assets/images/professions/waiter.jpg"),
    "camarero",
    "waiter"
  ),
  new Flashcard(
    "f14",
    ["c5"],
    require("../assets/images/professions/hairdresser.jpg"),
    "peluquero",
    "hairdresser"
  ),
  new Flashcard(
    "f15",
    ["c5"],
    require("../assets/images/professions/journalist.jpg"),
    "periodista",
    "journalist"
  ),
  new Flashcard(
    "f16",
    ["c5"],
    require("../assets/images/professions/veterinarian.jpg"),
    "veterinaria",
    "veterinarian"
  ),
  new Flashcard(
    "f17",
    ["c5"],
    require("../assets/images/professions/chef.jpg"),
    "cocinero",
    "chef"
  ),
  new Flashcard(
    "f18",
    ["c5"],
    require("../assets/images/professions/police.jpg"),
    "policía",
    "police"
  ),
  new Flashcard(
    "f19",
    ["c5"],
    require("../assets/images/professions/doctor.jpg"),
    "médica",
    "doctor"
  ),
  new Flashcard(
    "f20",
    ["c5"],
    require("../assets/images/professions/singer.jpg"),
    "cantante",
    "singer"
  ),
];
