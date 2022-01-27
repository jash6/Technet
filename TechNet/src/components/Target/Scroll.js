import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PieChart, ProgressChart} from 'react-native-chart-kit';

export default function Scroll(props) {
  const [clicked, setClicked] = useState(false);
  const [clickedeye, setClickedeye] = useState(false);
  const [see, setSee] = useState(false);
  const toggle = () => {
    setClicked(!clicked);
  };
  const data1 = {
    data: [0.64],
  };
  const data = [
    {
      name: 'AES',
      population: 76,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'ROG',
      population: 112,
      color: '#037aff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'MFR',
      population: 276,
      color: '#7fe1ad',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'AWP',
      population: 301,
      color: '#CCCCFF',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  return (
    <View style={styles.tile}>
      <View style={styles.align}>
        <View style={{flex: 1}}>
          <Text style={[styles.title, styles.common]}>{props.name}</Text>

          <View style={styles.align}>
            <Text style={styles.text1}>Total: </Text>
            <Text style={styles.text2}>{props.no}</Text>
          </View>
        </View>
        <View style={styles.icon1}>
          <TouchableOpacity onPress={toggle}>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={{color: 'black'}}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
      {clicked ? (
        <View>
          <View style={styles.align}>
            <Text style={{flex: 1, textAlign: 'center', marginBottom: 10}}>
              NB
            </Text>
            <Text style={{flex: 1, textAlign: 'center', marginBottom: 10}}>
              NR
            </Text>
            <Text style={{flex: 1, textAlign: 'center', marginBottom: 10}}>
              DTAIO
            </Text>
            <Text style={{flex: 1, textAlign: 'center', marginBottom: 10}}>
              GDT
            </Text>
          </View>
          <View style={styles.align}>
            <View style={styles.adjust}>
              <View style={[styles.circle, {borderColor: '#7fe1ad'}]}>
                <Text style={[styles.val, {color: '#7fe1ad'}]}>64%</Text>
              </View>
            </View>
            <View style={styles.adjust}>
              <View style={[styles.circle, {borderColor: 'red'}]}>
                <Text style={[styles.val, {color: 'red'}]}> 64%</Text>
              </View>
            </View>
            <View style={styles.adjust}>
              <View style={[styles.circle, {borderColor: '#037aff'}]}>
                <Text style={[styles.val, {color: '#037aff'}]}>40%</Text>
              </View>
            </View>
            <View style={styles.adjust}>
              <View style={[styles.circle, {borderColor: '#CCCCFF'}]}>
                <Text style={[styles.val, {color: '#CCCCFF'}]}>90%</Text>
              </View>
            </View>
          </View>
          <View style={styles.align}>
            <Text style={{flex: 1, textAlign: 'center', marginTop: 10}}>
              115/250
            </Text>
            <Text style={{flex: 1, textAlign: 'center', marginTop: 10}}>
              97/115
            </Text>
            <Text style={{flex: 1, textAlign: 'center', marginTop: 10}}>
              27/50
            </Text>
            <Text style={{flex: 1, textAlign: 'center', marginTop: 10}}>
              1/2
            </Text>
          </View>
          <View>
            <PieChart
              data={data}
              width={300}
              height={200}
              accessor={'population'}
              chartConfig={{
                backgroundGradientFrom: '#1E2923',
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: '#08130D',
                backgroundGradientToOpacity: 0.5,
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                // barPercentage: 0.5,
                useShadowColorFromDataset: false, // optional
              }}
              backgroundColor={'transparent'}
              center={[110, 5]}
              hasLegend={false}
              absolute
            />
          </View>
          <View style={styles.align}>
            <View style={[styles.align, {flex: 1}]}>
              <View
                style={{
                  backgroundColor: 'red',
                  width: 10,
                  height: 10,
                }}></View>
              <Text style={{textAlign: 'center'}}> AES 76</Text>
            </View>
            <View style={[styles.align, {flex: 1}]}>
              <View
                style={{
                  backgroundColor: '#037aff',
                  width: 10,
                  height: 10,
                }}></View>
              <Text style={{textAlign: 'center'}}> ROG 112</Text>
            </View>
            <View style={[styles.align, {flex: 1}]}>
              <View
                style={{
                  backgroundColor: '#7fe1ad',
                  width: 10,
                  height: 10,
                }}></View>
              <Text style={{textAlign: 'center'}}> MFR 276</Text>
            </View>
            <View style={[styles.align, {flex: 1}]}>
              <View
                style={{
                  backgroundColor: '#CCCCFF',
                  width: 10,
                  height: 10,
                }}></View>
              <Text style={{textAlign: 'center'}}> AWP 301</Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end', margin: 10}}>
            <Text style={{color: '#037aff'}}>View TTY performance</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  common: {
    marginLeft: 10,
    marginRight: 10,
  },
  align: {
    flexDirection: 'row',
  },
  tile: {
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 17,
    // marginLeft: 5,
    marginTop: 5,
    color: '#000',
  },
  text1: {
    color: 'grey',
    marginLeft: 5,
    fontSize: 17,
    marginBottom: 7,
  },
  text2: {
    color: 'grey',
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,

    borderWidth: 5,
  },
  adjust: {
    flex: 1,
    alignItems: 'center',
  },
  val: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
