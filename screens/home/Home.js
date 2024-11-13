import React, { useState, useEffect, useCallback } from 'react';
import Hero from '../../components/Hero/Hero';  // Component Hero (đảm bảo đã cập nhật cho React Native)
import Categories from "../../components/jobCategoryList/Categories";
import FeaturesJobs from '../../components/featuredJobs/FeaturesJobs';  // Component FeaturesJobs (đảm bảo đã cập nhật cho React Native)
import {getListPostService} from "../../services/userService";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';


const Home = () => {
    const [dataHot, setDataHot] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(false);

    const loadPost = useCallback(async (limit, offset) => {
        setLoading(true);
        try {
            const arrData = await getListPostService({
                limit: limit,
                offset: offset,
                categoryJobCode: '',
                addressCode: '',
                salaryJobCode: '',
                categoryJoblevelCode: '',
                categoryWorktypeCode: '',
                experienceJobCode: '',
                sortName: false,
                isHot: 1
            });

            if (arrData && arrData.errCode === 0) {
                setDataHot(arrData.data);
            } else {
                Alert.alert('Error', `Failed to fetch hot posts: ${arrData.message}`);
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while fetching hot posts.');
            console.error('An error occurred while fetching hot posts:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const limit = showAll ? '' : 2;
        loadPost(limit, 0);
    }, [showAll, loadPost]);

    return (
        <View style={styles.container}>
            <Hero />
            <Categories />
            <View style={styles.contentContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
                ) : (
                    <FeaturesJobs dataFeature={dataHot} />
                )}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setShowAll(prev => !prev)}
                    >
                        <Text style={styles.buttonText}>
                            {showAll ? 'VIEW LESS JOBS' : 'VIEW ALL JOBS'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    contentContainer: {
        paddingVertical: 20,
    },
    loadingIndicator: {
        marginVertical: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#9873FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Home;
