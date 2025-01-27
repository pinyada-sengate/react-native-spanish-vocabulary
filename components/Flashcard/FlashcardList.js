import { View, FlatList, StyleSheet } from "react-native";

import FlashcardItem from "./FlashcardItem";

function FlashcardList({ items }) {
  function renderFlashcardItem(itemData) {
    const item = itemData.item;

    const flashcardItemProps = {
      id: item.id,
      title: item.es,
      imageUrl: item.imageUrl,
    };
    return <FlashcardItem {...flashcardItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderFlashcardItem}
      />
    </View>
  );
}

export default FlashcardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
