import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {getListJobTypeAndCountPost} from "../../services/userService";
import Category from '../../components/jobCategoryList/Category';

const Categories = () => {
    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getListJobTypeAndCountPost({
                    limit: 10,
                    offset: 0
                });
                if (res.errCode === 0) {
                    setAllCategory(res.data);
                } else {
                    console.error(res.message); // Thay `toast.error` bằng console.error hoặc Alert trong React Native
                }
            } catch (error) {
                console.error('An error occurred while fetching data.');
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Job Category List</Text>
                <Text style={styles.subtitle}>
                    Explore thousands of job opportunities with all the information you need. It's your future
                </Text>
            </View>

            <FlatList
                data={allCategory}
                renderItem={({ item }) => <Category data={item} />}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    listContainer: {
        paddingTop: 10,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
});

export default Categories;
