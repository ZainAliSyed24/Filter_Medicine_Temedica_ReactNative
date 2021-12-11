import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './cardStyle';

const Card = ({searchText})=> {
    const {drugs} = require('../dataset.json');

    const filteringData = () => {
        var filter = drugs.filter((drug) => {
            if(searchText == '')
            return
            if(drug.name.toLowerCase().includes(searchText.toLowerCase())){
                return drug;
            }else if(drug.diseases.filter((disease) => disease.toLowerCase().includes(searchText.toLowerCase())).length > 0){
                return drug;
            }
        })
        return filter
    }

    const diseasesFlat = ({title}) =>{
        return(
            <FlatList
                data={title.diseases}
                renderItem={(disese)=>{
                    return(
                        <Text>{disese.item}</Text>
                    )
                }}
                keyExtractor={item => item.id}
            />
        )
    }

    const dossName = ({title}) => {
        return(
            <View style={styles.dossView}>
                <Text style={styles.titleName}>{title.name}</Text>
            </View>
        )
    }

    const dossDate = ({title}) => {
        return(
            <View style={styles.dateView}>
                <Text>{title.released}</Text>
            </View>
        )
    }

    const dossNameDate = ({title}) => {
        return(
            <View style={styles.drugsView}>
                {dossName({title})}
                {dossDate({title})}
            </View>
        )
    }

    const dossDescription = ({title}) => {
        return(
            <View style={styles.discriptionView}>
                    <Text>Description:</Text>
                    <Text>{title.description}</Text>
                </View>
        )
    }

    const Item = ({ title }) => {
        return(
            <View style={styles.container}>
                {dossNameDate({title})}
                {diseasesFlat({title})}
                {dossDescription({title})}
            </View>
        );
    }

    const renderItem = ({ item }) => {
        return( 
            <Item title={item} />
        );
    } 


    const drugsFlatList = () =>{
        return(
            <FlatList
                data={filteringData()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        )
    }
    return (
        <ScrollView style={styles.scrol}>
            {drugsFlatList()}
        </ScrollView>
    );
};

export default Card;