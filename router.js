// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/home/Home.js';

import Header from 'components/Header/Header.js';
import Footer from 'components/footer/Footer.js';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: () => <Header />, // Custom Header
                    footer: () => <Footer /> // Custom Footer
                }}
            >
                <Stack.Screen name="Home" component={Home} />

                {/* Add more screens as needed */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
