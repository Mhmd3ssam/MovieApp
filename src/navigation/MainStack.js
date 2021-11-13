import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen, MovieScreen } from '../screens';
import { COLORS } from '../common';

const RootStack = createNativeStackNavigator();

const MainStack = () => (
    <RootStack.Navigator initialRouteName={'Search'} screenOptions={{
        contentStyle:{
        backgroundColor:COLORS.oxfordBlue
    }}}>
        <RootStack.Screen component={MovieScreen}  name={'Movie'} options={{title:'', headerStyle:{
            backgroundColor:COLORS.oxfordBlue,
        }, headerTintColor:COLORS.sun
        
        
        }} />
        <RootStack.Screen component={SearchScreen} name={'Search'} options={{title:'', headerStyle:{
            backgroundColor:COLORS.oxfordBlue,
        }}} />
    </RootStack.Navigator>
)


export default MainStack;