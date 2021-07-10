import React,{Component} from 'react';
import {View,Text,TextInput, StyleSheet,TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import dictionary from '../database';

class SearchScreen extends Component{
    constructor(){
        super();
        this.state={
            text:'',
            isButtonPressed:false,
            isLoading:false,
            word:"Loading...",
            lexicalCategory:'',
            definition:""
        };
    }
getWord=(text)=>{
var text = text.toLowerCase();
try{
    var word = dictionary[text]["word"]
var lexicalCategory = dictionary[text]["lexicalCategory"]
var definition = dictionary[text]["definition"]
this.setState({
    "word":word,
    "lexicalCategory":lexicalCategory,
    "definition":definition
})
}
catch(err){
    alert("Sorry This word is not available for now")
    this.setState({
        'text':'',
        'isSearchPressed':false
    })
}
}


render(){
    return (
        
      <SafeAreaProvider style={{backgroundColor:'black'}}>
          <View style={styles.outputContainer}>
          <TouchableOpacity style={styles.searchButton}
          onPress={()=>{
              this.setState({isButtonPressed:true});
              this.getWord(this.state.text)
          }}>
              <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
          </View>
              <Text style={{fontSize:20}}>
                  {this.state.isButtonPressed&&this.state.word==="Loading..."?this.state.word:""}
              </Text>
              {
                  this.state.word!=="Loading"?
                  (
            
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
            style={styles.input}
            onChangeText={(text) => {
              this.setState({ text: text,
            isButtonPressed:false,
        word:"Loading...",
    lexicalCategory:'',
examples:[],
definition:"" });
            }}
            value={this.state.text}
          />
          
          <View style={styles.detailsContainer}>
              <Text style={{color:'orange',
          fontSize:20,
          marginTop:150}}>
                  Word:{""}
              </Text>
              <Text style={{fontSize:18,color:'white'}}>
                  {this.state.word}
              </Text>
          </View>
          <View style={styles.detailsContainer}>
              <Text style={styles.detailsTitle}>
                  Type:{""}
              </Text>
              <Text style={{color:'white',
          fontSize:20,}}>
                  {this.state.lexicalCategory}
              </Text>
          </View>
          <View style={{flexDirection:'row',flexWrap:'wrap'}}>
              <Text style={styles.detailsTitle}>
                  Definition:{""}
              </Text>
              <Text style={{fontSize:18,color:'white'}}>
                  {this.state.definition}
              </Text>
          </View>
          
      </View>
                  )
                  :null
                }
      </SafeAreaProvider>
      
    );
        }
    }

  const styles=StyleSheet.create({
    input: {
        marginTop: -200,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outLine: 'none',
        borderColor:'orange',
        color:'orange'
      },
      searchButton:{
        width: 100,
        height: 65,
        alignSelf: 'center',
        padding: 5,
        margin: 10,
        backgroundColor:'black',
        borderWidth:5,
        borderColor:'orange',
        borderRadius:20,
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color:'red',
        marginTop:5
      },
      Imageicon:{
          width:400,
height:500,
marginLeft:300

      },
      outputContainer:{
          color:'orange',
          fontSize:20,

      },
      detailsContainer:{
          color:'orange',
          fontSize:20,

      },
      detailsTitle:{
          color:'orange',
          fontSize:20,
      }
  })
  export default SearchScreen;