import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class SpecialsScreen extends React.Component {
  static navigationOptions = {
    title: 'Specials',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Text>Specials component will go here. Will reuse for Home screen as well.</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
