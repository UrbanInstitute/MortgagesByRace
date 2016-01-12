Mortgages by Race
This project is updated with a new dataset annually. 
Researchers will send a shapefile package with data.
If needed, reproject the data to Google Mercator using QGis
Also consider using shapeindex to optimize the file.
Import into tilemill and modify the style code. The most recent version is in 2013-update-files-tilemill/tilemill-project-2013MortgagesTM/style.mss
Export as MBTiles, upload to mapbox, and modify the CSS and JS files to accomodate the new maplayer.
Most recent versions of CSS are css/mortgage2014.css and JS are map2014.js
The CSS updates are for the year buttons at the top of teh feature. You may also need to create a new HPI chart with the same dimensions as the old one.