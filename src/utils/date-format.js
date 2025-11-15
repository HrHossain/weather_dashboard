

export function getFormattedTime(value , type , inMS){

    if(!type){
        return value
    }
    if(!inMS){
        value = value * 1000
    }

    const date = new Date(value)
    let options
    if(type.toLowerCase()==="date"){
        options = {
            weekday:"long",
            year:"numeric",
            month:"long",
            day:"numeric"
        }
    }

    if(type.toLowerCase()==="time"){
        options = {
            hour: '2-digit',
            minute: '2-digit'
            
            
        }
    }

    return new Intl.DateTimeFormat('en-US',options).format(date)

}

