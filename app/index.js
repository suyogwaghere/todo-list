import { Redirect } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const index = () => {
  return (
    <View>
      <Redirect href='/(tabs)/home' />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
