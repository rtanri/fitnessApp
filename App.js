import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FitnessApp from './FitnessApp';

export default function App() {
  return (
    <SafeAreaProvider>
      <FitnessApp />
    </SafeAreaProvider>
  );
}