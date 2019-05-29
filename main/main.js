module.exports = function main(inputs) {
    // write your code here...
    distance = inputs.distance;
    parkTime = inputs.parkTime;

    var price_park = 0.25 * parkTime;
    var price = price_park + 6;

    var base = 0;
    var extra = 0;

    if(distance > 2){
        base = 0.8 * (distance - 2);
        if(distance > 8){
            extra = 0.8 * 0.5 * (distance - 8);
        }
        price += base + extra;
    }

    return parseInt(price.toFixed());
};
