import { FLASHCARDS } from "../data/dummy-data";

import FlashcardList from "../components/Flashcard/FlashcardList";

function FlashcardScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedFlashcards = FLASHCARDS.filter((flashcard) => {
    return flashcard.categoryIds.indexOf(catId) >= 0;
  });
  return <FlashcardList items={displayedFlashcards} />;
}

export default FlashcardScreen;
