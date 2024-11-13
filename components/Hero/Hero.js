import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Hero = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.textSection}>
                    <Text style={styles.title}>
                        Let's Find your{"\n"}
                        <Text style={styles.highlight}>dream job</Text>
                    </Text>
                    <Text style={styles.description}>
                        Job finder is a tool or platform designed to help job seekers find employment opportunities. These resources can include job boards, networking events, and career fairs.
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AllJobs')}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageSection}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://www.pngplay.com/wp-content/uploads/15/Business-Woman-PNG-Photo-Image.png' }}
                        alt="hero"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    textSection: {
        flex: 2,
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
    },
    highlight: {
        color: '#9873FF', // You can use any gradient or color you want
    },
    description: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20,
        color: '#555',
    },
    button: {
        backgroundColor: '#9873FF', // Gradient colors are usually not directly supported, use a library like `expo-linear-gradient` if you need one
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
});

export default Hero;
