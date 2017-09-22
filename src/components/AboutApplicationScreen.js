import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AboutApplicationScreen extends Component {
    static navigationOptions = {
        title: 'O aplikacji'
    };

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center'
            },
            content: {
                fontSize: 16,
                textAlign: 'center',
                marginLeft: '15%',
                marginRight: '15%'
            }
        });

        return (
            <View style={ styles.container }>
                <Text style={ styles.content }>Aplikacja została napisana przy pomocy React Native, Redux (react-redux, redux-thunk) oraz React Navigator. REST API: fixer.io (JSON).</Text>
                <Text style={[ styles.content, { marginTop: 50 } ]}>github.com/plyschik</Text>
            </View>
        );
    }
}

export default AboutApplicationScreen;