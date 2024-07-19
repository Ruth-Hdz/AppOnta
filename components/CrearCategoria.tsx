import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, FlatList, Pressable } from 'react-native';
import Background2 from './Background2';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type CrearCategoriaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CrearCategoria'>;

type IconName = 
  | "home" | "home-outline" | "cart" | "cart-outline" | "heart" | "heart-outline"
  | "person" | "person-outline" | "settings" | "settings-outline" | "star" | "star-outline"
  | "book" | "book-outline" | "camera" | "camera-outline" | "car" | "car-outline"
  | "airplane" | "airplane-outline" | "alarm" | "alarm-outline" | "analytics" | "analytics-outline"
  | "apps" | "apps-outline" | "archive" | "archive-outline" | "arrow-back" | "arrow-forward"
  | "at" | "at-outline" | "attach" | "attach-outline" | "barbell" | "barbell-outline"
  | "basket" | "basket-outline" | "battery-full" | "bluetooth" | "bluetooth-outline"
  | "briefcase" | "briefcase-outline" | "build" | "build-outline" | "bulb" | "bulb-outline"
  | "bus" | "bus-outline" | "business" | "business-outline" | "cafe" | "cafe-outline"
  | "calendar" | "calendar-outline" | "call" | "call-outline" | "cash" | "cash-outline"
  | "chatbox" | "chatbox-outline" | "checkbox" | "checkbox-outline" | "checkmark" | "checkmark-circle"
  | "clipboard" | "clipboard-outline" | "close" | "close-circle" | "cloud" | "cloud-outline"
  | "code" | "code-outline" | "cog" | "cog-outline" | "compass" | "compass-outline"
  | "construct" | "construct-outline" | "copy" | "copy-outline" | "cut" | "cut-outline"
  | "document" | "document-outline" | "download" | "download-outline" | "earth" | "earth-outline"
  | "easel" | "easel-outline" | "egg" | "egg-outline" | "exit" | "exit-outline"
  | "eye" | "eye-outline" | "film" | "film-outline" | "filter" | "filter-outline"
  | "finger-print" | "finger-print-outline" | "fish" | "fish-outline" | "flag" | "flag-outline"
  | "flash" | "flash-outline" | "flask" | "flask-outline" | "flower" | "flower-outline"
  | "folder" | "folder-outline" | "football" | "football-outline" | "game-controller" | "game-controller-outline"
  | "gift" | "gift-outline" | "grid" | "grid-outline" | "hammer" | "hammer-outline"
  | "hand-left" | "hand-left-outline" | "happy" | "happy-outline" | "headset" | "headset-outline"
  | "help" | "help-circle" | "help-outline" | "home" | "home-outline" | "hourglass" | "hourglass-outline"
  | "ice-cream" | "ice-cream-outline" | "image" | "image-outline" | "images" | "images-outline"
  | "infinite" | "infinite-outline" | "information" | "information-circle" | "information-outline"
  | "journal" | "journal-outline" | "key" | "key-outline" | "language" | "language-outline"
  | "laptop" | "laptop-outline" | "layers" | "layers-outline" | "leaf" | "leaf-outline"
  | "library" | "library-outline" | "link" | "link-outline" | "list" | "list-outline"
  | "location" | "location-outline" | "lock-closed" | "lock-closed-outline" | "lock-open" | "lock-open-outline"
  | "log-in" | "log-in-outline" | "log-out" | "log-out-outline" | "mail" | "mail-outline"
  | "male-female" | "male-female-outline" | "man" | "man-outline" | "map" | "map-outline"
  | "medal" | "medal-outline" | "medical" | "medical-outline" | "medkit" | "medkit-outline"
  | "megaphone" | "megaphone-outline" | "menu" | "menu-outline" | "mic" | "mic-outline"
  | "moon" | "moon-outline" | "musical-note" | "musical-note-outline" | "newspaper" | "newspaper-outline"
  | "notifications" | "notifications-outline" | "nuclear" | "nuclear-outline" | "nutrition" | "nutrition-outline"
  | "open" | "open-outline" | "options" | "options-outline" | "paper-plane" | "paper-plane-outline"
  | "partly-sunny" | "partly-sunny-outline" | "pause" | "pause-outline" | "paw" | "paw-outline"
  | "pencil" | "pencil-outline" | "people" | "people-outline" | "phone-portrait" | "phone-portrait-outline"
  | "pie-chart" | "pie-chart-outline" | "pin" | "pin-outline" | "planet" | "planet-outline"
  | "play" | "play-outline" | "podium" | "podium-outline" | "power" | "power-outline"
  | "pricetag" | "pricetag-outline" | "print" | "print-outline" | "pulse" | "pulse-outline"
  | "push" | "push-outline" | "radio" | "radio-outline" | "refresh" | "refresh-outline"
  | "reload" | "reload-outline" | "remove" | "remove-outline" | "reorder-four" | "reorder-four-outline"
  | "resize" | "resize-outline" | "restaurant" | "restaurant-outline" | "return-down-back" | "return-down-back-outline"
  | "rocket" | "rocket-outline" | "save" | "save-outline" | "scan" | "scan-outline"
  | "school" | "school-outline" | "search" | "search-outline" | "send" | "send-outline"
  | "share" | "share-outline" | "shield" | "shield-outline" | "shirt" | "shirt-outline"
  | "shuffle" | "shuffle-outline" | "skull" | "skull-outline" | "snow" | "snow-outline"
  | "speedometer" | "speedometer-outline" | "square" | "square-outline" | "stop" | "stop-outline"
  | "stopwatch" | "stopwatch-outline" | "subway" | "subway-outline" | "sunny" | "sunny-outline"
  | "swap-horizontal" | "swap-horizontal-outline" | "sync" | "sync-outline" | "tablet-landscape" | "tablet-landscape-outline"
  | "tablet-portrait" | "tablet-portrait-outline" | "tennisball" | "tennisball-outline" | "terminal" | "terminal-outline"
  | "text" | "text-outline" | "thermometer" | "thermometer-outline" | "thumbs-down" | "thumbs-down-outline"
  | "thumbs-up" | "thumbs-up-outline" | "thunderstorm" | "thunderstorm-outline" | "time" | "time-outline"
  | "timer" | "timer-outline" | "today" | "today-outline" | "toggle" | "toggle-outline"
  | "trail-sign" | "trail-sign-outline" | "train" | "train-outline" | "transgender" | "transgender-outline"
  | "trash" | "trash-outline" | "trophy" | "trophy-outline" | "tv" | "tv-outline"
  | "umbrella" | "umbrella-outline" | "videocam" | "videocam-outline" | "volume-high" | "volume-high-outline"
  | "walk" | "walk-outline" | "wallet" | "wallet-outline" | "warning" | "warning-outline"
  | "watch" | "watch-outline" | "water" | "water-outline" | "wifi" | "wifi-outline"
  | "wine" | "wine-outline" | "woman" | "woman-outline";
  
const CrearCategoria = () => {
  const navigation = useNavigation<CrearCategoriaScreenNavigationProp>();
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<IconName | null>(null);
  const [selectedColor, setSelectedColor] = useState('#FF7306');
  const [showIconPicker, setShowIconPicker] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const iconList: IconName[] = [
    'home', 'radio', 'cart', 'heart', 'person', 'settings', 'star', 'book', 'camera', 'car', 'airplane',
    'alarm', 'analytics', 'apps', 'archive', 'attach', 'barbell', 'basket', 'bluetooth',
    'briefcase', 'build', 'bulb', 'bus', 'business', 'cafe', 'calendar', 'call', 'cash',
    'chatbox', 'checkbox', 'clipboard', 'cloud', 'code', 'compass', 'construct', 'copy',
    'document', 'download', 'earth', 'easel', 'egg', 'exit', 'eye', 'film', 'filter',
    'finger-print', 'fish', 'flag', 'flash', 'flask', 'flower', 'folder', 'football',
    'game-controller', 'gift', 'grid', 'hammer', 'happy', 'headset', 'help', 'hourglass',
    'ice-cream', 'image', 'infinite', 'information', 'journal', 'key', 'language', 'laptop',
    'layers', 'leaf', 'library', 'link', 'list', 'location', 'lock-closed', 'lock-open',
    'mail', 'map', 'medal', 'medical', 'megaphone', 'menu', 'mic', 'moon', 'musical-note',
    'newspaper', 'notifications', 'nutrition', 'pencil', 'people', 'pie-chart', 'pin',
    'planet', 'play', 'print', 'pulse', 'rocket', 'school', 'search', 'send',
    'share', 'shield', 'shirt', 'shuffle', 'stopwatch', 'sunny',
    'tennisball', 'thumbs-up', 'time', 'trophy', 'umbrella', 'videocam', 'wallet', 'warning',
    'water', 'wifi', 'wine'
  ];

  const colorList = [
    '#FF7306', '#FF0A0A', '#0A0AFF', '#0AFF0A', '#FFFF0A', '#0AFFFF', '#FF00FF',
    '#800080', '#FFA500', '#008000', '#4B0082', '#FF69B4', '#1E90FF', '#FFD700'
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  const handleGuardar = () => {
    if (categoryName && selectedIcon && selectedColor) {
      setSuccessMessage('Categoría guardada con éxito');
      setShowModal(true);
      // Aquí podrías guardar la categoría en tu estado global o base de datos
    } else {
      setSuccessMessage('Por favor, complete todos los campos');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSuccessMessage('');
    if (successMessage === 'Categoría guardada con éxito') {
      navigation.navigate('Inicio');
    }
  };

  const renderIconItem = ({ item }: { item: IconName }) => (
    <TouchableOpacity onPress={() => {
      setSelectedIcon(item);
      setShowIconPicker(false);
    }}>
      <Ionicons name={item} size={40} color="black" style={styles.iconItem} />
    </TouchableOpacity>
  );

  const renderColorItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[styles.colorItem, { backgroundColor: item }]}
      onPress={() => {
        setSelectedColor(item);
        setShowColorPicker(false);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Background2 />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Nueva Categoría</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Crear una nueva categoría</Text>
        <Text style={styles.instructions}>
          Puede personalizar sus categorías con íconos y colores únicos,
          agregando un toque personal a su organización.
        </Text>
      </View>
      <View style={styles.box}>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="Escribe el nombre de la categoría"
          value={categoryName}
          onChangeText={setCategoryName}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setShowIconPicker(true)}>
            <Ionicons name={selectedIcon || "add-circle-outline"} size={24} color="black" />
            <Text style={{ marginLeft: 10 }}>Icono</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setShowColorPicker(true)}>
            <View style={[styles.colorPreview, { backgroundColor: selectedColor }]}></View>
            <Text style={{ marginLeft: 10 }}>Color</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleGuardar}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>

      {/* Modal de éxito */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.successCircle}>
              <Ionicons name="checkmark" size={60} color="white" />
            </View>
            <Text style={styles.modalText}>{successMessage}</Text>
            <Pressable style={styles.modalCloseButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="#000033" />
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal de selección de icono */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showIconPicker}
        onRequestClose={() => setShowIconPicker(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecciona un icono</Text>
            <FlatList
              data={iconList}
              renderItem={renderIconItem}
              keyExtractor={item => item}
              numColumns={4}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowIconPicker(false)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de selección de color */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showColorPicker}
        onRequestClose={() => setShowColorPicker(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecciona un color</Text>
            <FlatList
              data={colorList}
              renderItem={renderColorItem}
              keyExtractor={(item) => item}
              numColumns={4}
              contentContainerStyle={styles.colorList}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowColorPicker(false)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  backButton: {
    marginRight: 10,
    marginTop: 50,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
  },
  content: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'left',
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#66cdaa',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  colorPreview: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 5,
  },
  saveButton: {
    backgroundColor: '#FF7306',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
  },
  saveButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000033',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00C29D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconItem: {
    margin: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#FF7306',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  colorItem: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 20,
  },
  colorList: {
    justifyContent: 'center',
  },
});

export default CrearCategoria;