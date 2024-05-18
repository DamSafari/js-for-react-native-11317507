/**Task 3 */
import { formatArrayStrings } from "C:/Users/senad/Desktop/js-for-react-native-11317507";

function createUserProfiles(names, modifiedNames) {
  return names.map((name, i) => ({
    originalName: name,
    modifiedName: modifiedNames[i],
    id: i + 1
  }));
}

export { createUserProfiles };