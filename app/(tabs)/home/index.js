import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const index = () => {
  const todos = [];
  return (
    <>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Pressable
          style={{
            backgroundColor: '#7cb9e8',
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}
          >
            All
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#7cb9e8',
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}
          >
            Work
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#7cb9e8',
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 'auto',
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}
          >
            Personal
          </Text>
        </Pressable>
        <Pressable>
          <AntDesign name='pluscircle' size={30} color='#007FFF' />
        </Pressable>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ padding: 10 }}>
          {todos?.length > 0 ? (
            <View></View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 130,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Image
                style={{ width: 200, height: 200, resizeMode: 'contain' }}
                source={require('../../../assets/images/todo.png')}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 600,
                  marginTop: 15,
                  color: '#7cb9e8',
                }}
              >
                No Tasks for Today! add a new task
              </Text>
              <Pressable
                style={{
                  marginTop: 15,
                }}
              >
                <AntDesign name='pluscircle' size={30} color='#007FFF' />
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
