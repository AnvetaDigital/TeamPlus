import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function DashboardScreen(){
    return(
       <View style={styles.container}> 
        <Text style={styles.title}>TeamPlus</Text>
        <Text style={styles.subtitle}>Daily team status made simple</Text>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Add Today's Status</Text>
            </Pressable>
       </View>
    )
}