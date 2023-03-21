import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Participant } from "../../components/Participant"

import { styles } from "./styles";

export function Home() {
  const participants = ["Rodrigo", "Mayk", "Diego", "João Pedro", "Ana", "Luisa", "Jack", "Junior", "Lucas", "Matheus"]

  function handleParticipantAdd() {
    console.log('voce adicionou')
  }

  function handleParticipantRemove(name: string) {
    console.log(`voce removeu ${name}`)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Terça, 21 de Março de 2023.
      </Text>

      <View style={styles.form} >
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)} />
          ))
        }
      </ScrollView>
    </View>
  )
}