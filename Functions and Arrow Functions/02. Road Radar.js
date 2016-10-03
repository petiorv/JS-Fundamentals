function checkLimit([speed, zone]) {

    let limit = getLimit(zone);
    let infraction = Speeding(speed, limit);
    if (infraction) console.log(infraction)
           function getLimit(zone){
            switch (zone){
                case 'motorway': return 130;
                case 'interstate': return 90;
                case 'city': return 50;
                case 'residential': return 20;
            }
        }
        function Speeding(speed, limit) {
            let overSpeed = speed - limit;
            if (overSpeed<=0){

            }else{
                if (overSpeed <= 20) console.log('speeding')
                else if(overSpeed <= 40) console.log('excessive speeding')
                else if (overSpeed>40) console.log('reckless driving');
            }
        }



}

checkLimit([120, 'interstate']);