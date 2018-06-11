// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create a component
const App = () => (
    <Header headerText='Albums' />
);

// Render it to the device
// 只有 root component 才使用 AppRegistry
AppRegistry.registerComponent('Albums', () => App);
