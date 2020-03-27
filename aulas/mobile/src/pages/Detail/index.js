import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as mailComposer from 'expo-mail-composer'
import { Linking } from 'react-native'


import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Detail() {4
    const navigation = useNavigation()
    const route = useRoute()
    const incident = route.params.incident
    
    const mensagem = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title} no valor de: ${ Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value) }`

    function navigateBack() {
        navigation.goBack()
    }

    function sendEmail() {
        mailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: mensagem,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${mensagem}`)
    }

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>{
                        Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL' 
                            }).format(incident.value) }</Text>

            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity 
                    onPress={sendWhatsapp} 
                    style={styles.action}
                    >
                        <Text style={styles.actionText}>WhatsApp</Text>    
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={sendEmail} 
                    style={styles.action}
                    >
                        <Text style={styles.actionText}>E-mail</Text>    
                    </TouchableOpacity>

                </View>                
            </View>
        </View>
    )
}