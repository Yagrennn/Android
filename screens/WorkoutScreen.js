import React, { useState, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FitnessItems } from '../Context';
import { CheckBox } from 'react-native-elements';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);
  const [checkedItems, setCheckedItems] = useState(completed);

  const handleCheckboxToggle = (itemName) => {
    if (checkedItems.includes(itemName)) {
      setCheckedItems(checkedItems.filter(item => item !== itemName));
    } else {
      setCheckedItems([...checkedItems, itemName]);
    }
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", marginTop: 20 }}
      >
        <Image
          style={{ width: "100%", height: 200, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginBottom: 20 }}
          source={{ uri: route.params.image }}
        />

        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 40, left: 20, backgroundColor: "white", borderRadius: 8, padding: 3 }}
          name="arrow-back-outline"
          size={24}
          color="black"
        />

        {
          route.params.exercises.map((item, index) => (
            <TouchableOpacity
              style={{ marginVertical: 12, marginHorizontal: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
              key={index}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={{ width: 90, height: 90 }} source={{ uri: item.image }} />

                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                  <Text style={{ marginTop: 4, fontSize: 16, color: "gray" }}>{item.sets}</Text>
                </View>
              </View>

              <CheckBox
                checked={checkedItems.includes(item.name)}
                onPress={() => handleCheckboxToggle(item.name)}
              />
            </TouchableOpacity>
          ))
        }
      </ScrollView>

      <View style={{ marginHorizontal: 15, marginVertical: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Completed {checkedItems.length}/{route.params.exercises.length}
        </Text>
      </View>
    </>
  );
}

export default WorkoutScreen;
