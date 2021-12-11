import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './styles';
import { SearchBar } from 'react-native-elements';
import Card from './components/card';

const App = () => {
  const [search, setSearch] =  useState('')

  const updateSearch = (search) => {
    setSearch(search)
  };

  const logoDiv = () => {
    return(
      <View style={styles.viewLogo}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
      </View>
    )
  }

  const searchTxtBar = () => {
    return(
      <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
          />
    )
  }
  const showingTxt = () =>{
    return(
      <Text style={styles.resultsTxt}>Showing search results</Text>
    )
  }

  return (
    <SafeAreaView>
          {logoDiv()}
          {searchTxtBar()}
          {showingTxt()}
          <Card searchText={search}/>
    </SafeAreaView>
  );
};

export default App;
