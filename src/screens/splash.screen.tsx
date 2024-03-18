import React from 'react';
import Logo from '@/components/logo';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RootStackScreenProps} from '@/typings/navigator';

export default function SplashScreen({
  navigation,
}: RootStackScreenProps<'Splash'>) {
  React.useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Drawer'), 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Logo size={100} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
