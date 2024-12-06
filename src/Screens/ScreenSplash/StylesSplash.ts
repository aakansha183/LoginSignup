import { StyleSheet } from "react-native";
import { create } from "react-native-mmkv-storage";

export const stylesplash =  StyleSheet.create(
    {
        loaderContainer:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
        },
        animation:{
            width: 200,
            height: 200,
        }


    }
)