import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
export default function Activation() {
  const [model, SetModel] = useState([
    {Name: 'M515DA-EJ312TS', ST: '1', ACT: '22', N_ACT: '22'},
    {Name: 'FX506IH-HN258TS', ST: '2', ACT: '5', N_ACT: '64'},
    {Name: 'FX566IH-HN256T', ST: '2', ACT: '5', N_ACT: '64'},
    {Name: 'FX566IH-HN257D', ST: '3', ACT: '24', N_ACT: '32'},
    {Name: 'FX566IH-HN258J', ST: '3', ACT: '4', N_ACT: '43'},
  ]);
  const [clicked, Setclicked] = useState(false);
  const filtered = [];
  for (let i = 0; i < 3; i++) {
    filtered.push(model[i]);
  }
  const item = clicked ? model : filtered;

  useEffect(() => {}, [clicked]);
  return (
    <View>
      <View>
        <Text
          style={{
            margin: 10,
            fontSize: 15,
            fontWeight: '500',
            color: '#444444',
          }}>
          Activation Performance
        </Text>
      </View>
      <View
        style={{
          // height: 160,
          margin: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#fff',
          backgroundColor: 'white',
        }}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 7,
              marginBottom: 10,
              fontWeight: '600',
              color: '#2a2a2a',
            }}>
            Top 5 Model
          </Text>
        </View>
        <View
          style={{
            borderWidth: 2.3,
            borderColor: '#4169e1',
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#e5e5e5',
              height: 30,
              padding: 5,
            }}>
            <Text style={{flex: 2, textAlign: 'center', fontWeight: 'bold'}}>
              Name
            </Text>
            <Text style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>
              ST
            </Text>
            <Text style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>
              ACT
            </Text>
            <Text style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>
              N-ACT
            </Text>
          </View>
          <View>
            {item.map(m => (
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1.5,
                  borderBottomColor: '#e5e5e5',
                  marginTop: 5,
                }}
                key={m.Name}>
                <Text
                  style={{
                    flex: 2,
                    textAlign: 'center',
                    marginBottom: 5,
                    fontSize: 15,
                  }}>
                  {m.Name}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    marginBottom: 5,
                    fontSize: 15,
                  }}>
                  {m.ST}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    marginBottom: 5,
                    fontSize: 15,
                  }}>
                  {m.ACT}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    marginBottom: 5,
                    fontSize: 15,
                  }}>
                  {m.N_ACT}
                </Text>
              </View>
            ))}
          </View>
        </View>
        {clicked ? (
          <TouchableOpacity
            onPress={() => {
              Setclicked(false);
            }}>
            <Text
              style={{
                textAlign: 'center',
                margin: 7,
                fontWeight: '600',
                color: '#70b4ff',
              }}>
              See less
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              Setclicked(true);
            }}>
            <Text
              style={{
                textAlign: 'center',
                margin: 7,
                fontWeight: '600',
                color: '#70b4ff',
              }}>
              See More
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
