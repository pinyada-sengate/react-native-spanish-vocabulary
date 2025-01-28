import Category from "../models/category";
import Flashcard from "../models/flashcard";

export const CATEGORIES = [
  new Category("c1", "Animales", require("../assets/images/animals/cat.jpg")),
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
    "Professiones",
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
  new Flashcard(
    "f21",
    ["c1"],
    require("../assets/images/animals/cat.jpg"),
    "gato",
    "cat"
  ),
  new Flashcard(
    "f22",
    ["c1"],
    require("../assets/images/animals/dog.jpg"),
    "perro",
    "dog"
  ),
  new Flashcard(
    "f23",
    ["c1"],
    require("../assets/images/animals/bird.jpg"),
    "pájaro",
    "bird"
  ),
  new Flashcard(
    "f24",
    ["c1"],
    require("../assets/images/animals/elephant.jpg"),
    "elefante",
    "elephant"
  ),
  new Flashcard(
    "f25",
    ["c1"],
    require("../assets/images/animals/lion.jpg"),
    "león",
    "lion"
  ),
  new Flashcard(
    "f26",
    ["c1"],
    require("../assets/images/animals/bear.jpg"),
    "oso",
    "bear"
  ),
  new Flashcard(
    "f27",
    ["c1"],
    require("../assets/images/animals/horse.jpg"),
    "caballo",
    "horse"
  ),
  new Flashcard(
    "f28",
    ["c1"],
    require("../assets/images/animals/tiger.jpg"),
    "tigre",
    "tiger"
  ),
  new Flashcard(
    "f29",
    ["c1"],
    require("../assets/images/animals/bull.jpg"),
    "toro",
    "bull"
  ),
  new Flashcard(
    "f30",
    ["c1"],
    require("../assets/images/animals/turtle.jpg"),
    "tortuga",
    "turtle"
  ),
  new Flashcard(
    "f31",
    ["c1"],
    require("../assets/images/animals/pig.jpg"),
    "cerdo",
    "pig"
  ),
  new Flashcard(
    "f32",
    ["c1"],
    require("../assets/images/animals/cow.jpg"),
    "vaca",
    "cow"
  ),
  new Flashcard(
    "f33",
    ["c1"],
    require("../assets/images/animals/sheep.jpg"),
    "oveja",
    "sheep"
  ),
  new Flashcard(
    "f34",
    ["c1"],
    require("../assets/images/animals/duck.jpg"),
    "pato",
    "duck"
  ),
];
