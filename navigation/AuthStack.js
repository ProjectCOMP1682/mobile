import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Layout from "../components/Layout/Layout";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header"; // Màn hình Home của bạn


const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                options={{
                    title: ' ',

                    headerStyle: {
                        height: 50,  // Điều chỉnh chiều cao của header
                        backgroundColor: '#fff',  // Màu nền cho header (nếu cần)
                        shadowColor: 'transparent',  // Tắt bóng đổ (nếu cần)
                    },
                }}

            >
                {() => (
                    <Layout>

                        <Home /> {/* Nội dung của Home */}

                    </Layout>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AuthStack;
