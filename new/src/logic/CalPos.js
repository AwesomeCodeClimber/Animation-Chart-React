export default function calPos (percentages) {

    // We assume an order of percentages from server is like this:
    // .hydro-circle, .wind-circle, .solar-circle, .nonr-circle.

    var positions = [   { left: 500, top: 200 },
                        { left: 1000, top: 300 },
                        { left: 300, top: 100 },
                        { left: 100, top: 200 }   ];
    
    return positions;
};
