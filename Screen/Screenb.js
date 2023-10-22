import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native';
import { useState } from 'react';
import { Entypo} from '@expo/vector-icons';


export default function Screenb({navigation}) {
  const [data, setData] = useState([
    {
      id: 1,
      image: require('../assets/giohang (2).png'),
    },
    {
      id: 2,
      image: require('../assets/giohang (3).png'),
    },
    {
      id: 3,
      image: require('../assets/giohang (4).png'),
    },
    {
      id: 4,
      image: require('../assets/giohang (5).png'),
    },
    {
      id: 5,
      image: require('../assets/giohang (6).png'),
    },
    {
      id: 6,
      image: require('../assets/giohang (7).png'),
    },
  ])
  const [hoveredItemId, setHoveredItemId] = useState(null);
    return (
      <View style={styles.container}>

     <ScrollView style={{height:'100%' }}>
       <View style={styles.View}>
       
       {data.map((item, index) => (
          <TouchableOpacity style={styles.Tou} key={index}onPress={()=>{navigation.navigate('Screena')}} onMouseEnter={() => setHoveredItemId(item.id)}  onMouseLeave={() => setHoveredItemId(null)}>
            <View style={{backgroundColor: hoveredItemId === item.id ? '#00BFFF':'white',alignItems:'center',flexDirection:'column'}} >
                <Image source={item.image} style={styles.Img}></Image>
                    <Text style={styles.Text}>Cáp chuyển từ Cổng <br/>USB sang PS2... </Text>
                    <View style={{flexDirection:'row',width:"100%",paddingTop:8,paddingBottom:8}}>
                    {[...Array(5)].map((_,index) => {return(<Entypo name="star" size={18} color= {index<4 ?'yellow':'gray'}/>)})}
                    <Text>    (15)</Text>
                    </View>
                    <View style={{flexDirection:'row',width:"100%",height:80}}>
                      <Text style={{fontWeight:'bold',paddingLeft:1}}>69.900 đ</Text>
                      <Text style={{ marginHorizontal: 15, color: '#8c8c8c',}} > -39%</Text>
                    </View>
            </View>
          </TouchableOpacity>
        ))}
       
       </View>
       </ScrollView>
       <View style={styles.Menu}>
            <Image source={require('../assets/giohang (8).png')} style={{height:'100%',width:'100%'}}></Image>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
     
    },
    View:{
      height:'90%',
      width:'100%',
      flexWrap:'wrap',
      backgroundColor:"white",
      flexDirection:'row'
     
    },
    Tou:{
      height:230,
      width:"50%",
      
    },
    Img:{
      height:120,
      width:'100%'
    },
    Text:{
      width:'100%',
      height:'50%'
    },
    Menu:{
      height:50,
      width:"100%",
      position: 'absolute',
      bottom:0,
     
    }
  });
  