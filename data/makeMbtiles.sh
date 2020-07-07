## Shell script for creating mbtiles for HMDA map

#!/bin/bash

# change this as needed
year=2019

# make African-American purchase mbtiles
tippecanoe -o us-purchase$year-aa.mbtiles -z11 -Z3 -r1.5 -g3 -x raceethnic us-purchase$year-aa.geojson

# make Asian-American purchase mbtiles
tippecanoe -o us-purchase$year-asian.mbtiles -z11 -Z3 -r1.5 -g3 -x raceethnic us-purchase$year-asian.geojson

# make Hispanic purchase mbtiles
tippecanoe -o us-purchase$year-his.mbtiles -z11 -Z3 -r1.5 -g3 -x raceethnic us-purchase$year-his.geojson

# make non-Hispanic white purchase mbtiles
tippecanoe -o us-purchase$year-nhw.mbtiles -z11 -Z3 -r1.5 -g3 -x raceethnic us-purchase$year-nhw.geojson

# make African-American refinance mbtiles
tippecanoe -o us-refi$year-aa.mbtiles -z11 -Z3 -r1.5 -g3 -x raceethnic us-refi$year-aa.geojson

# make Asian-American refinance mbtiles
tippecanoe -o us-refi$year-asian.mbtiles -z11 -Z3 -r1.5 -g3 -x raceethnic us-refi$year-asian.geojson

# make Hispanic refinance mbtiles
tippecanoe -o us-refi$year-his.mbtiles -z11 -Z3 -r1.5 -g3 -x raceethnic us-refi$year-his.geojson

# make non-Hispanic white refinance mbtiles
tippecanoe -o us-refi$year-nhw.mbtiles -z11 -Z3 -r1.5 -g3 -x raceethnic us-refi$year-nhw.geojson