import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Footer from "../footer/Footer";
import Header from "../Header/Header"; // Import Footer

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView contentContainerStyle={styles.content} style={{ flex: 1 }}>

                {children} {/* Nội dung của mỗi màn hình */}

            </ScrollView>

            <Footer /> {/* Footer dưới cùng */}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingBottom: 80, // Để chừa khoảng trống cho Footer
    },
});

export default Layout;
