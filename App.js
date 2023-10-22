import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,TouchableOpacity,TextInput} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screena from './Screen/Screena';
import Screenb from './Screen/Screenb';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Thay 'FontAwesome' bằng tên thư viện và biểu tượng cụ thể


export default function App() {
  const stack = createNativeStackNavigator()
  // const navigation = useNavigation();
  return (
    // <View style={styles.container}>
    //   <Screenb></Screenb>
    // </View>
    <NavigationContainer>
       
      <stack.Navigator initialRouteName='Screena'>
        <stack.Screen
          name='Screena'
          component={Screena}
         
          options={{
            headerTitle: 'Chat',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Image source={require('./assets/giohang (1).png')} style={{height:30,width:30,marginRight: 10 }}></Image>
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() =>  navigation.goBack()}>
                <Image source={require('./assets/back.png')} style={{ height: 30, width: 30, marginLeft: 10 }} />
              </TouchableOpacity>
            ),
            headerStyle:{
              backgroundColor:'blue',
            },
            headerTitleStyle: {
              color: 'white', 
            },
          }}
        />

      <stack.Screen name='Screenb' component={Screenb} 
      
      options={{
        headerTitle: (props) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', width: 150, height: '50%' }}>
            <Icon name="search" size={20} color="gray" style={{ paddingLeft: 10 }} />
            <TextInput
            style={{ width: 100,height:'50%',backgroundColor:'white' }} // Kiểu dáng của TextInput
            placeholder="Dây cáp usb"
            placeholderTextColor="gray"
            
          />
          </View>
          
        ),
        headerTitleAlign: 'center',
        headerRight: () => (
          
          <View style={{flexDirection:'row'}}>
          <Image source={require('./assets/giohang (1).png')} style={{height:30,width:30}}></Image>
          <Image source={require('./assets/3cham.png')} style={{ height: 30, width:5 }} />
          <Image source={require('./assets/3cham.png')} style={{ height: 30, width:5 }} />
          <Image source={require('./assets/3cham.png')} style={{ height: 30, width:5 }} />
          

          </View>
      ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('./assets/back.png')} style={{ height: 30, width: 30, marginLeft: 10 }} />
           
          </TouchableOpacity>
        ),
        headerStyle:{
          backgroundColor:'blue',
        },
        headerTitleStyle: {
          color: 'white', 
        },
      }}
      />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});