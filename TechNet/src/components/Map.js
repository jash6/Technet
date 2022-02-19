import {View, Text} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';
import * as d3 from 'd3';
import {INDIA} from '../components/CountryShapes';
export default function Map({dimensions}) {
  const [countryList, setCountryList] = useState([]);

  const mapExtent = useMemo(() => {
    return dimensions.width > dimensions.height / 2
      ? dimensions.height / 2
      : dimensions.width;
  }, [dimensions]);

  const countryPaths = useMemo(() => {
    const projection = d3
      .geoAzimuthalEqualArea()
      .fitSize([mapExtent, mapExtent], {
        type: 'FeatureCollection',
        features: INDIA,
      })
      .translate([dimensions.width / 2, mapExtent / 2]);
    const geoPath = d3.geoPath().projection(projection);
    const svgPaths = INDIA.map(geoPath);
    return svgPaths;
  }, [dimensions]);

  useEffect(() => {
    setCountryList(
      countryPaths.map((path, i) => {
        return (
          <Path
            key={INDIA[i].properties.name}
            d={path}
            stroke={'#aaa'}
            strokeOpacity={0.3}
            strokeWidth={0.6}
            fill={'#aaa'}
            opacity={0.4}
          />
        );
      }),
    );
  }, []);

  return (
    <View>
      <Svg width={dimensions.width} height={dimensions.height / 2}>
        <G>
          {/* <Circle
            cx={dimensions.width / 2}
            cy={mapExtent / 2}
            r={mapExtent / 2}
            fill={'#3b454f'}
          /> */}
          {countryList.map(x => (
            <Text>{x}</Text>
          ))}
        </G>
      </Svg>
    </View>
  );
}
