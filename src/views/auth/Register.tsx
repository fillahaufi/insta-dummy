import React from 'react'
import { Text, View, StyleSheet, Dimensions, Button, TextInput } from 'react-native'
import StyledButton from '../../components/StyledButton'
import myTheme from '../../styles/global'

const theme = myTheme

interface LoginScreenProps {
  navigation: any
}

const Register: React.FC<LoginScreenProps> = (props) => {

    const goToLogin = () => {
    props.navigation.navigate('Login')
    }

    return (
        <View className='flex-1 items-center justify-center' style={{
        backgroundColor: theme.colors.primary,
        width: Dimensions.get('window').width,
        }}>
            <View className='h-2/3 absolute bottom-0' style={{
                backgroundColor: theme.colors.tertiary,
                width: Dimensions.get('window').width,
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50,
            }}>
                <Text className='text-center mt-7 text-xl font-medium'>Register your new account</Text>
                <View className='h-5/6 absolute bottom-0' style={{
                    backgroundColor: theme.colors.background,
                    width: Dimensions.get('window').width,
                    borderTopRightRadius: 50,
                    borderTopLeftRadius: 50,
                    padding: 20,
                }}>
                    <Text className='text-left mt-6 text-base font-medium' >Email</Text>
                    <TextInput className='border-2 border-gray-300 rounded-md mt-2 p-2'  />
                    <Text className='text-left mt-3 text-base font-medium' >Password</Text>
                    <TextInput secureTextEntry={true} className='border-2 border-gray-300 rounded-md mt-2 mb-5 p-2'  />
                    <StyledButton title='Register' className='mt-5' onPress={() => {}} />
                    <View className='flex flex-row'>
                    <Text className='mt-3'>Don't have an account?</Text>
                    <Text className='mt-3 ml-2 underline underline-offset-8' onPress={goToLogin}>Login</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


export default Register