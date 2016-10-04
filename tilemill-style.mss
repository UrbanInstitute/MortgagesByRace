.dots {
  marker-line-width: 0;
  marker-width: 0.8;
  marker-allow-overlap: true;
  polygon-gamma: 0.8;
  
  [zoom >= 0] { marker-opacity: 0.69; }
  [zoom >= 1] { marker-opacity: 0.72; }
  [zoom >= 2] { marker-opacity: 0.74; }
  [zoom >= 3] { marker-opacity: 0.76; }
  [zoom >= 4] { marker-opacity: 0.78; }
  [zoom >= 5] { marker-opacity: 0.781; }
  [zoom >= 6] { marker-opacity: 0.782; marker-width: 0.85;}
  [zoom >= 7] { marker-opacity: 0.783; marker-width: 1.3;}
  [zoom >= 8] { marker-opacity: 0.784; marker-width: 1.6;}
  [zoom >= 9] { marker-opacity: 0.785; marker-width: 1.9;}
  [zoom >= 10] { marker-opacity: 0.786; marker-width: 2.5;}  
}

#white {
  marker-fill: #29aae1
}

#hispanic {
  marker-fill: #ea0e8b;
}

#black {
  marker-fill: #fbb040;
}

#asian {
  marker-fill: #555;
}
