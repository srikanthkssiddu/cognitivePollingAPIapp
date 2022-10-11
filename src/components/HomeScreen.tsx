import { StyleSheet, Text, Button, StatusBar, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen =() => {
    const navigation = useNavigation();
    
    
    return(
      <SafeAreaView style={styles.container}>
        <SafeAreaView>
          <StatusBar 
            animated={true}
            backgroundColor="#dcdcdc"
          />
        </SafeAreaView>
        <Text style={styles.text}>Click here to get started</Text>
        <SafeAreaView style={[{ width: "47%", margin: 15 }]}>
          <Button
            title="Home"
            color='#4682b4'
            onPress={() => navigation.navigate('Content')}
        />
        </SafeAreaView>
        
      </SafeAreaView>
      
)};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text :{
    fontWeight: "500",
    fontSize: 18,
    padding:0,
    color: '#4682b4'

  }

})