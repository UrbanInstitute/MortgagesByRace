$(document).ready(function(){
    //embed code
        $('input').val('<iframe src="http://datatools.metrotrends.org/charts/metrodata/_Features/maps/HAI/index.html" width="100%" height="550" frameborder="0" scrolling="no" style="border:none;border-style:none;"></iframe>').click(function() {
            $('input').select();
        });

        var map = L.mapbox.map('map', 'urbaninstitute.iji12b2j,', {
            fadeAnimation: true,
            maxZoom: 10,
            minZoom: 4
        })
            .setView([38, -96.50], 5);

        L.mapbox.accessToken = 'pk.eyJ1IjoidXJiYW5pbnN0aXR1dGUiLCJhIjoiTEJUbmNDcyJ9.mbuZTy4hI_PWXw3C3UFbDQ';
        var hash = L.hash(map);

         // urban institute credit on the map
        map.attributionControl
            .addAttribution('<a href="http://www.urban.org/">&copy; Urban Institute</a>');

map.scrollWheelZoom.disable();

        var last_layer;
        function init(id) {
            var tile = L.mapbox.tileLayer(id, {
                unloadInvisibleTiles : true
            });
            return tile;
        }

        var layers = [{
            name: '2001',
            layer: init('urbaninstitute.2001Mortgages') 
        }, {
            name: '2002',
            layer: init('urbaninstitute.2002Mortgages')
        }, {
            name: '2003',
            layer: init('urbaninstitute.2003Mortgages')
        }, {
            name: '2004',
            layer: init('urbaninstitute.vnimgqfr')
        }, {
            name: '2005',
            layer: init('urbaninstitute.t3srlik9')
        }, {
            name: '2006',
            layer: init('urbaninstitute.1lmims4i')
        }, {
            name: '2007',
            layer: init('urbaninstitute.enxywrk9')
        }, {
            name: '2008',
            layer: init('urbaninstitute.dtdcmcxr')
        }, {
            name: '2009',
            layer: init('urbaninstitute.bmcjif6r')
        }, {
            name: '2010',
            layer: init('urbaninstitute.9578ehfr')
        }, {
            name: '2011',
            layer: init('urbaninstitute.675y7gb9')
        }, {
            name: '2012',
            layer: init('urbaninstitute.2012MortgagesTM')
        }, {
            name: '2013',
            layer: init('urbaninstitute.emu3ow29')
        }, {
            name: '2014',
            layer: init('urbaninstitute.35b9ms4i')
        }, {
            name: '2015',
            layer: init('urbaninstitute.3p52rk0x')
        }
        ];

        var control = document.getElementById('layers');

        // Add a play button div
        var play_button = control.appendChild(document.createElement('a'))
        var pause = "&#9616;&#9616;";
        var play = "&#9654;";
        play_button.innerHTML = pause;
        play_button.id = "play_button";
        play_button.onclick = function() {
            if (nextInterval) {
                nextInterval = clearInterval(nextInterval);
                play_button.innerHTML = play;
            } else {
                highlightLayer(i++);
                nextInterval = animate();
                play_button.innerHTML = pause;
            }
        }

        layers.forEach(function(layer, n) {

            layer.button = control.appendChild(document.createElement('a'));
            layer.button.innerHTML = layers[n].name;
            layer.button.onclick = function() {
                highlightLayer(n);
                i = n;
                nextInterval = clearInterval(nextInterval);
                play_button.innerHTML = play;
            };
        });


         // we use a layer group to make it simple to remove an existing overlay
         // and add a new one in the same line of code, as below, without juggling
         // temporary variables.
        var layerGroup = L.layerGroup().addTo(map);



         // i is the number of the currently-selected layer: this loops through
         // 0, 1, and 2.
        var i = 0;

         // show the first overlay as soon as the map loads
        highlightLayer(i++);

        var nextInterval = animate();

        function animate() {
            // and then time the next() function to run every 1 seconds
            return setInterval(function(){
                highlightLayer(i);
                if (++i >= layers.length) i = 0;
            }, 2000 * 1);

        }

        function highlightLayer(i) {
            layerGroup.clearLayers().addLayer(layers[i].layer);
            var active = control.getElementsByClassName('active');
            for (var j = 0; j < active.length; j++) active[j].className = '';
            layers[i].button.className = 'active';
        }


     //streets on top
        var streetLayer = L.mapbox.tileLayer('urbaninstitute.h5b1kc2b'); 
        streetLayer
        .setZIndex(100)
        //.addTo(map);
});