import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text,Button } from "react-native";
import {styles} from '../../components/styles';

export const PreviewNotes = ({navigation}) => {
    console.log(navigation);
    return (
        <View style={styles.center}>
            <Text>This is the PreviewNotes screen</Text>
            
            <TouchableOpacity style={{backgroundColor:"black",padding:20,borderRadius:15,marginTop:10}} onPress={()=> navigation.navigate("Create Notes")}>
                    <Text style={{ color: 'white', fontWeight: "700" }}>Go to </Text>
            </TouchableOpacity>
        </View>
    );
};


