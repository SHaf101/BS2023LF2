

// distance between two geographical points using spherical law of cosines approximation as used by leaflet lib
function distance(latlng1, latlng2) {
    const R = 6371000;
    const rad = Math.PI / 180,
        lat1 = latlng1.lat * rad,
        lat2 = latlng2.lat * rad,
        sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
        sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
        a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

describe('Testing distance function:', () => 
    {
        const pos1 = {lat:50, lng:60};
        const pos2 = {lat:40, lng:40};

        const pos3 = {lat:"a", lng:"xyz"};
        const pos4 = {lat:0, lng:0};

        const result = distance(pos1, pos2).toFixed(3);
        const result2 = distance(pos3, pos4).toFixed(3);
        
        test('Get distance from (50,60)<->(40,40) expect 1916130.179', () => 
        {
            expect(result).toBe("1916130.179");
            //expect(Number.isInteger(result)).toBe(true);
        })
        test('Get distance from (a,xyz)<->(0,0) expect NaN', () => 
        {
            //expect(result2).toBe("0");
            expect(result2).toBe("NaN");
            //expect(Number.isInteger(result)).toBe(true);
        })
    });