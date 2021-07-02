import React from 'react';
import {Text, View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from '../config'
export default class WriteStory extends React.Component{

  constructor(){
    super()

    this.state={
      tTitle:'',
      nname:'',
      sstory:'',
      isSubmitPress:'false'
    }
  }

  
  render(){
    return(
      <SafeAreaProvider>

      <View>
      <Header
      centerComponent={
        {text:"StoryHub",style:{fontSize:20,color:"pink",}}
      }/>
</View>
<View>
        <TextInput
        style={styles.inputStyle}
        placeholder="story title"
        value={this.state.tTitle}
        />
</View>


<View>  
        <TextInput
        style={styles.inputStyle}
        placeholder="Author"
        value={this.state.nname}
       />
</View>
<View>  
      <TextInput
      style={styles.m}
  multiline={true}
  placeholder='write your story'
  value={this.state.sstory}
/>
</View>
<View>
<TouchableOpacity
style={styles.submitButton}
onPress={()=>{this.setState({isSubmitPress:true})}}
>
<Text>submit</Text>
</TouchableOpacity>



</View>

      <View>
      <Text></Text>
      </View>
      </SafeAreaProvider>
    )
  }
  
}

const styles = StyleSheet.create({
  inputStyle: {
    margin:20,
     width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1,
      fontSize: 20
  },
  m:{
    margin:20,
     width: 300,
      height: 150,
      borderWidth: 1.5,
  },
  submitButton:{
    marginHorizontal:120,
    width: 60,
      height: 30,
       borderWidth: 1.5,
       justifyContent:'center',
       backgroundColor:"lightgreen"
  }

});

