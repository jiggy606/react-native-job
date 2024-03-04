import { useFonts } from 'expo-font';

import { Stack } from "expo-router";
// import { useCallback } from "react";

const Layout = () => {
  const [loaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf') 
    // Adjust the path accordingly
  });

  if (!loaded) {
    return null; // or some loading indicator
  }

  return <Stack />
}

 export default Layout;