import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.background,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
        padding: 12,
        minHeight: 80,
        marginBottom: 12,
        textAlignVertical: "top",
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 24,
    },
    buttonText: {
        color: '#fff',
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600"
    }
})