import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CircularProgress from '../components/CircularProgress';
import { SafeAreaView, StyleSheet } from 'react-native';

const SportsScreen = () => {
  const navigation = useNavigation();

  const sportsData = [
    {
      id: '1',
      name: 'Fitness',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: '2',
      name: 'Yoga',
      image: 'https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/yoga-cesitleri_942933_1.jpg',
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Başlık */}
      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Sports Options</Text>
        <View style={{ height: 2, width: '100%', backgroundColor: '#000', marginTop: 10 }} />
      </View>

      {/* İçerik */}
      <View style={{ marginTop: 20, marginHorizontal: 20, marginBottom: 20 }}>
        {sportsData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              if (item.name === 'Fitness') {
                navigation.navigate('Home');
              } else {
                navigation.navigate('Yoga');
              }
            }}
            style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}
          >
            <Image style={{ width: '100%', height: 180, borderRadius: 12 }} source={{ uri: item.image }} />
            <Text style={{ position: 'absolute', color: 'white', fontSize: 18, fontWeight: 'bold', left: 20, top: 20 }}>
              {item.name}
            </Text>
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={30}
              color="#dfbe04"
              style={{ position: 'absolute', bottom: 15, left: 15 }}
            />
          </TouchableOpacity>
        ))}
      </View>

      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <CircularProgress
            progress={0.46}
            label="Weekly Progress"
          />
          <CircularProgress
            progress={0.65}
            label="Monthly Progress"
          />
          <CircularProgress
            progress={0.85}
            label="Goal"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SportsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
