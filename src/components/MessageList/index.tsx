import React from 'react';
import { ScrollView, Text } from 'react-native';

import { Message } from '../Message';
import { styles } from './styles';

export function MessageList() {
    const mesage = {
        id: '1',
        text: 'mensagem de teste',
        user: {
            name: 'Gabriel',
            avatarUrl: 'https://github.com/rempel.png',
        }
    }

    return (
        <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="never"
        >
           <Message data={mesage} />
           <Message data={mesage} />
           <Message data={mesage} />
        </ScrollView>
    );
}