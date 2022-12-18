import React from "react";
import { ProgressChart, PieChart } from "react-native-chart-kit";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import { COLORS, FONTS, SIZES } from "../../../theme";

const data = [
  {
    name: "Present",
    population: 100,
    color: COLORS["green-500"],
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Absent",
    population: 10,
    color: "#ddd",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const StatisticsData = () => {
  return (
    <View style={{ flex: 1 }}>
      <Title label={"Statistics"} />
      <Container>
        <View style={{ flex: 1 }}>
          <PieChart
            data={data}
            width={SIZES.width / 1.15}
            height={200}
            chartConfig={{
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            absolute
          />
          <Text style={[FONTS.p, { textAlign: "center", marginTop: 20 }]}>
            Pie Chart Showing Attendance For Engineering Maths and Statistics 2
          </Text>
        </View>
      </Container>
    </View>
  );
};

export default StatisticsData;

const styles = StyleSheet.create({});
