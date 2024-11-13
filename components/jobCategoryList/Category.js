import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Category = ({ data }) => {
    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <Image
                    style={styles.icon}
                    source={{ uri: data.postDetailData.jobTypePostData.image }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.jobType}>{data.postDetailData.jobTypePostData.value}</Text>
                <Text style={styles.jobCount}>{data.amount} Jobs Available</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#7E90FE0D',
        padding: 16,
        borderRadius: 8,
        margin: 5,
    },
    iconContainer: {
        width: 64,
        height: 64,
        backgroundColor: '#7E90FE1A',
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    icon: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain',
    },
    textContainer: {
        marginLeft: 0,
    },
    jobType: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    jobCount: {
        color: '#A3A3A3',
        fontSize: 14,
    },
});

export default Category;
