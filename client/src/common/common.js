
const calculateTime = (timestamp) => {
    let postDate = new Date(timestamp);
    let currentDate = new Date();
    let timeDiff = ((currentDate - postDate) / 1000) / 60;
    let suffix = "m";
    let times = [[60,"h"], [24,"d"], [7,"w"], [4,"mo"], [12,"yr"]];
    for(let i = 0; i< 5;i++){
        if(timeDiff >= times[i][0]){
            timeDiff = timeDiff/times[i][0];
            suffix = times[i][1];
        }else{
            break;
        }
    }

    return `${Math.floor(timeDiff)} ${suffix}`
}

export default calculateTime;
