import { useTiming } from '@shopify/react-native-skia';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaView, Image,StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native'; 
const ColoredText = styled(Text)`
  color: red;
`

const BOX_SIZE = 100;

 
export default function App() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);
  
  const restyled = useAnimatedStyle(() => {
    return {
      borderRadius: BOX_SIZE * 0.5 * progress.value,
      transform: [{scale: scale.value}]
    }
  });

  useEffect(() => {
    progress.value = withRepeat(withTiming(0.5,{duration: 2000}), -1, true);
    scale.value = withRepeat( withTiming(1,{duration: 2000}), -1,true);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[{width: BOX_SIZE, height: BOX_SIZE, backgroundColor: 'white', overflow: 'hidden'}, restyled]}>
        <Image source={{uri: require('./assets/lemon.jpg'),}} style={styles.image} />
      </Animated.View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    overflow: 'hidden',
    width: BOX_SIZE,
    height: BOX_SIZE,
  }
});
