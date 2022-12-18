import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import Container from "../../components/Container";
import { COLORS, FONTS, SIZES } from "../../theme";
import Icon from "@expo/vector-icons/build/Ionicons";
import BottomSheet from "@gorhom/bottom-sheet";
import StackedCards from "../../components/StackedCards";
import {
  getOngingClasses,
  getStorageKey,
  getUserDataFnc,
  takettendanceFnc,
} from "../../utils";
import Button from "../../components/Button";
import * as Location from "expo-location";

const Item = ({ title, code, day, onPress }) => {
  return (
    <Pressable
      className="bg-zinc-400/20 border-slate-300 mb-4 p-4 rounded-md"
      onPress={onPress}
    >
      <Text className="text-gray-500 text-sm">{day}</Text>
      <Text className="text-lg">{title}</Text>
      <Text className="text-gray-500 text-sm">{code}</Text>
    </Pressable>
  );
};

const Index = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState<any>({});
  const [selectedClass, setSelectedClass] = useState(null);
  const [ongingClasses, setOngingClasses] = useState([]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["10%", "30%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  async function getLocation() {
    console.log("running get location");

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let coords = (await Location.getCurrentPositionAsync({})).coords;

    setLocation(coords);
  }

  useEffect(() => {
    async function fetchData() {
      const res = await getOngingClasses();
      setOngingClasses(res.results);
    }

    async function fetchUserData() {
      const token = await getStorageKey();
      const res = await getUserDataFnc({ token });
      setUser(res);
    }

    fetchData();
    fetchUserData();
  }, []);

  async function handleTakeAttendance({ classId, courseId }) {
    try {
      setIsLoading(true);
      const token = await getStorageKey();

      await getLocation();

      console.log("after running get location");
      console.log(location);

      const response = await takettendanceFnc({
        courseId,
        classId,
        latitude: location.latitude,
        longtitude: location.longitude,
        token,
      });

      console.log("response from take attendance: ", response);

      const isSuccessful = Boolean(response?.id);

      if (isSuccessful) {
        navigation.navigate("Success", { status: "okay" });
      } else {
        navigation.navigate("Success", { status: "fail" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <ScrollView style={styles.view}>
        <Container>
          <View style={styles.top}>
            <Text style={[FONTS.h1]}>Home</Text>

            <View className="relative">
              <Icon name="notifications-outline" size={30} />

              <View className="bg-red-600 h-4 w-4 flex justify-center items-center rounded-full absolute right-0">
                <Text className="text-white">3</Text>
              </View>
            </View>
          </View>

          <StackedCards imageUrl={user.qr_code} />

          <View style={{ marginVertical: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Text style={FONTS.h2}>Onging Classes</Text>
              <Text style={[FONTS.p, { color: COLORS["green-500"] }]}>
                See all
              </Text>
            </View>

            <View className="flex-1">
              {ongingClasses.map((classes, index) => {
                const data = classes.course;
                return (
                  <Item
                    title={data.title}
                    code={data.code}
                    day={data.day}
                    key={index}
                    onPress={() =>
                      setSelectedClass({
                        title: data.title,
                        classId: classes.id,
                        courseId: data.id,
                      })
                    }
                  />
                );
              })}
            </View>
          </View>
        </Container>
      </ScrollView>

      {selectedClass && (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          style={{
            backgroundColor: "transparent",
          }}
        >
          <View className="flex-1 px-4 py-6">
            <Text className="text-center text-lg mb-6">
              {selectedClass.title}
            </Text>
            <Button
              label={isLoading ? "Loading..." : "Take Attendance"}
              color={"black"}
              bg="#d4d4d8"
              onPress={() => handleTakeAttendance(selectedClass)}
            />
            <Button
              label="Close"
              color={"black"}
              bg="#f4f4f5"
              onPress={() => setSelectedClass(null)}
            />
          </View>
        </BottomSheet>
      )}
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingCard: {
    height: SIZES.height / 3.5,
    backgroundColor: COLORS["green-500"],
    marginTop: SIZES.margin,
    borderRadius: SIZES.margin,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: SIZES.padding,
    position: "relative",
  },
});
