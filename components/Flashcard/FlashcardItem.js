import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

function FlashcardItem({ id, title, imageUrl }) {
  function selectFlashcardItemHandler() {
    //TODO: handler this later
  }

  return (
    <View style={styles.flashcardItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        // opacity effect on iOS
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectFlashcardItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default FlashcardItem;

const styles = StyleSheet.create({
  flashcardItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    //AOS shadow
    elevation: 4,
    //iOS shadow
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    //AOS ripple effect, iOS shadow
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
