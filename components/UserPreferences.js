import { Switch } from "react-native";
import { TextInput } from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default function UserPreferences() {
    return (
        <View>
            <View>
                <Text>Nombre a mostrar:</Text>
                <TextInput />
            </View>
            <View>
            <Text>Tema:</Text>
            {/* Radio Buttons */}
            </View>
            <View>
                <Text>Sólo WiFi?</Text>
                <Switch trackColor={{false: '#767577', true: '#81b0ff'}}
                Value={true} />
            </View>
        </View>
    );
}