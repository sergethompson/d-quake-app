 
    //  var quakes = [{
    //     location: eq_data.earthquakes[0].region,
    //     radius: eq_data.earthquakes[0].magnitude,
    //     magnitude: eq_data.earthquakes[0].magnitude,
    //     fillKey: 'QUAKE',
    //     timedate: eq_data.earthquakes[0].timedate,
    //     latitude: eq_data.earthquakes[0].lat,
    //     longitude: eq_data.earthquakes[0].lon
    // }, {
    //     location: eq_data.earthquakes[1].region,
    //     radius: eq_data.earthquakes[1].magnitude,
    //     magnitude: eq_data.earthquakes[1].magnitude,
    //     fillKey: 'QUAKE',
    //     timedate: eq_data.earthquakes[1].timedate,
    //     latitude: eq_data.earthquakes[1].lat,
    //     longitude: eq_data.earthquakes[1].lon
    // }
    // ];

var eq_data = { count: '4',
  earthquakes: 
   [ { src: 'us',
       eqid: 'c0002aes',
       timedate: '2011-03-24 13:55:12',
       lat: '20.7047',
       lon: '99.9489',
       magnitude: '7.0',
       depth: '10.0',
       region: 'Mong Hpayak, Myanmar' },
     { src: 'us',
       eqid: 'c0001xig',
       timedate: '2011-03-11 06:25:51',
       lat: '38.0744',
       lon: '144.5589',
       magnitude: '7.1',
       depth: '26.5',
       region: 'off the east coast of Honshu, Japan' },
     { src: 'us',
       eqid: 'c0001xgp',
       timedate: '2011-03-11 05:46:23',
       lat: '38.322',
       lon: '142.369',
       magnitude: '9.0',
       depth: '24.4',
       region: 'near the east coast of Honshu, Japan' },
     { src: 'us',
       eqid: 'b0001r57',
       timedate: '2011-03-09 02:45:18',
       lat: '38.5095',
       lon: '142.7921',
       magnitude: '7.2',
       depth: '14.1',
       region: 'near the east coast of Honshu, Japan' } ] }



    var quakes_array = []


    var getQuakes = function(){
        for (var i = 0; i < eq_data.earthquakes.length; i++){
            console.log(i)
        }
    }