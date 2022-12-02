import { useTiming, vec } from '@shopify/react-native-skia';
import { StatusBar } from 'expo-status-bar';
import React, { lazy, useEffect } from 'react';
import { SafeAreaView, Image,StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native'; 
import { Canvas, Paint, Circle } from '@shopify/react-native-skia';
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

const ColoredText = styled(Text)`
  color: red;
`

const BOX_SIZE = 100;
  
const width = 256;
const height = 256;
 

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
      <Animated.View style={[{width: BOX_SIZE, height: BOX_SIZE, backgroundColor: 'white', overflow: 'hidden'}, restyled, styles.icon]}>
        <WithSkiaWeb
          getComponent={() => import('./src/PaintDemo')}
          fallback={<View>
            <Text>Loading..</Text>
          </View>} />
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
  icon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    overflow: 'hidden',
    width: BOX_SIZE,
    height: BOX_SIZE,
  }
  
});
