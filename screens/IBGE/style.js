import styled from 'styled-components/native';
import { StyleSheet } from "react-native";


export const TextoBotao = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
       
`;

export const Image = styled.Image`
    width:100px;
    heigth:100px;
       
`;

export const Botao = styled.TouchableOpacity`
    padding: 10px 20px;
    padding-bottom:12px;
    background-color: #1C1B34;   
    margin:10px auto;  
    border-radius: 16px;  
    border:2px solid white;
}
`;

export const Text = styled.Text`
    
    color: #fff; 
    padding: 5px;
    text-align:center;
    font-weight:bold;
    font-size:30px;
    width:85%;  

`;


export const Input = styled.TextInput`   
    
    color: #fff; 
    background-color:#1C1B34;
    text-align:center;
    font-weight:bold;
    font-size:20px;
    border-radius:20px;
  
  
    padding:10px;
    width:50%;

`;

export const styles = StyleSheet.create({
    wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F3BF09',
    color: "#000"
  },
  image:{
    width:100,
    height:100
  }

});
