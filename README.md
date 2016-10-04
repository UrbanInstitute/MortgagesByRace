# Mortgages by Race
was http://datatools.urban.org/Features/mortgages-by-race/#8/41.923/-86.149 (note everything after the # is an internal link or data)

This project is updated with a new dataset annually. 
Researchers will send shapefiles with data.
If needed, reproject the data to Google Mercator using QGis. Also consider using shapeindex to optimize the file.

* Import shapefiles into tilemill and add style code found in [tilemill-style.mss](tilemill-style.mss). 
 * Note that as of Oct 2016, conditional marker fill in tilemill is no longer working. Request separate shapefiles for each group.
* Export as MBTiles, upload to mapbox
* Modify the CSS and JS files to accomodate the new map layer.
* Most recent versions of CSS are css/mortgage2014.css and JS are map2014.js
* The CSS updates are for the year buttons at the top of the feature.
* You may also need to create a new HPI chart with the same dimensions as the old one.
