import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Footer = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await AsyncStorage.getItem('userData');
            setUser(JSON.parse(userData));
        };
        fetchUserData();
    }, []);

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
                <Icon name="home" size={24} color="#fff" />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AllJobs')} style={styles.navItem}>
                <Icon name="briefcase" size={24} color="#fff" />
                <Text style={styles.navText}>Jobs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navItem}>
                <Icon name="user" size={24} color="#fff" />
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.navItem}>
                <Icon name="cogs" size={24} color="#fff" />
                <Text style={styles.navText}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1A1919',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        elevation: 5,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 5,
    },
});

export default Footer;
