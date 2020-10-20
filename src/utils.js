export function cmToStitch(cm, stitchOn10cm) {
    return stitchOn10cm * cm / 10;  
}

export function stitchToCm(stitch, stitchOn10cm) {
    console.log("stitch: ", stitch, "stitchOn10cm: ", stitchOn10cm); 
    return Math.round(stitch * 10 / stitchOn10cm); 
}

const decreaseStitchesFromTo = (from, to, during, side=2, linear = true, inCm = false, tension = 0)  => {
    let decrease;
    let steps = [];
    if (inCm) {
        from = cmToStitch(from, tension);
        to =cmToStitch(to, tension);
    }
    switch (side) {
        case 2: decrease = (from - to) / 2; break;
        default: decrease = from - to; break;
    }
    //ex: decrease 6 stitches during 12 rows should return 1 stitch each 2 rows
    //ex: decrease 6 stitches during 23 rows should return 2 rows without decrease 1 stitch each 3 rows, during 18, 3 rows without decrease 
    //ex: decrease 6 stitches during 11 rows should return 1 stitch each 2 rows
    //ex: decrease 7 stitches during 12 rows should return 1 stitch each 2 rows
    //ex: decrease 25 stitches during 12 rows should return 1 stitch each 2 rows
    if (during >= decrease) {
        steps[0] = Math.floor(during/decrease);
        if (steps[0] * decrease !== during) { 
            //we knit some rows first
            let t = Math.floor((during - steps[0] * decrease) / 2);
            steps = [t].concat(steps);
            //we knit some rows afterward too
            steps = steps.concat([decrease - steps[0]]); 
        }
    } else {
        steps[0] = Math.floor(decrease / during);
        if (steps[0] * during !== decrease) { 
            //we have extra stitches to decrease 
            let t = Math.floor((during - steps[0] * decrease) / 2);
            steps = [t].concat(steps);
            //we knit some rows afterward too
            steps = steps.concat([decrease - steps[0]]); 
        }
    }	
    return steps;
    
}
