import dayjs from 'dayjs'

export function getRemainingTime(timestampMs){
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs()
    if(timestampDayjs.isBefore(nowDayjs)){
        return {
            seconds: '00',
            minutes: "00",
            hours: "00"
        }
    }
    return{
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes:  getRemainingMinutes(nowDayjs, timestampDayjs),
        hours:  getRemainingHours(nowDayjs, timestampDayjs)
    }
}

function getRemainingSeconds(nowDayjs, timestampDayjs){
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2)
}

function getRemainingMinutes(nowDayjs, timestampDayjs){
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return  padWithZeros(minutes, 2)
}
function getRemainingHours(nowDayjs, timestampDayjs){
    const hours = timestampDayjs.diff(nowDayjs, 'hours');
    return padWithZeros(hours, 2)
}

function padWithZeros(number, minlength){
    const numberString = number.toString();
    if(numberString.length >= minlength) return numberString;
    return "0".repeat(minlength - numberString.length) + numberString
}
