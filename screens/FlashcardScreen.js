import { useLayoutEffect } from "react";

import { CATEGORIES, FLASHCARDS } from "../data/dummy-data";
import FlashcardList from "../components/Flashcard/FlashcardList";

function FlashcardScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedFlashcards = FLASHCARDS.filter((flashcard) => {
    return flashcard.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === catId);

    navigation.setOptions({
      title: category.title,
    });
  }, [catId, navigation]);

  return <FlashcardList items={displayedFlashcards} />;
}

export default FlashcardScreen;
