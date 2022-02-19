import {feature} from 'topojson-client';
import india from '../../assets/data/india.topo.json';

export const INDIA = feature(india, india.objects.india).features;
