import { getGuests, getServices } from "./database.js";

const services = getServices()
const guests = getGuests()


export const serviceList =()=>{
    let html="<ul>"
    for (let service of services){
        html+= `<li id="service--${service.id}">${service.service}</li>`
    }
    html+="</ul>"
 return html
}


export const guestList =()=>{
 let html="<ul>"
    for (let guest of guests){
        html+=`<li>${guest.firstName} ${guest.lastName}</li>`
    }
    html+="</ul>"
    return html
}