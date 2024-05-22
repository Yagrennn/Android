import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { FitnessItems } from '../Context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [showIcon, setShowIcon] = useState(false);
  const { calories, minutes, workout } = useContext(FitnessItems);
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <LinearGradient colors={['#000428', '#004e92']} style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>WORKOUT PLAN</Text>
          <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
            {showIcon ? (
              <Ionicons name="sunny" size={24} color="white" />
            ) : (
              <Ionicons name="moon" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.shadowCards}>
            <Text style={styles.cardTitle}>{calories.toFixed(0)}</Text>
            <Text style={styles.cardSubtitle}>CALORIES</Text>
          </View>
          <View style={styles.shadowCards}>
            <Text style={styles.cardTitle}>{workout}</Text>
            <Text style={styles.cardSubtitle}>WORKOUTS</Text>
          </View>
          <View style={styles.shadowCards}>
            <Text style={styles.cardTitle}>{minutes}</Text>
            <Text style={styles.cardSubtitle}>MINUTES</Text>
          </View>
        </View>
      </LinearGradient>
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: 200,
    width: '100%',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  shadowCards: {
    backgroundColor: '#ffffff',
    width: '30%',
    height: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});
