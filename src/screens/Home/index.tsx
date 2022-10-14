import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  PanResponder,
  Alert,
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [name, setName] = useState<string>('');

  function handleParticipantAdd() {
    const cleanName = name.trim();

    if (cleanName.length === 0) return setName('');

    const regex = new RegExp(`^${cleanName}$`, 'i');

    const participantAlreadyExists = participants.find((it) => it.match(regex));

    if (participantAlreadyExists)
      return Alert.alert('Participante já incluso na lista');

    setParticipants([...participants, cleanName]);
    setName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover participante',
      `Deseja remover participante ${name}?`,
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Sim',
          onPress: () =>
            setParticipants(participants.filter((it) => it !== name)),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Nome do participante"
          placeholderTextColor="#FFFFFF"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
