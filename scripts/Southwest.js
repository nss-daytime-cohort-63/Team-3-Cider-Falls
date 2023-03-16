import {
    getSections,
    getServices,
    getSectionServices,
  } from './database.js'


const sections = getSections()
const sectionServices = getSectionServices()
const services = getServices()

export const southWestHtml =() =>{//funct to create html output
    
    
    let html ="<div"//html variable
    for (let section of sections){//loop into section 
        if(section.id===4){
            html+= ` id="section--${section.id}">${section.attraction}`
        for (let sects of sectionServices){
            if (sects.sectionId===section.id){
                html+=`<ul>`
                for (let service of services){
                    if(sects.serviceId === service.id){
                    html+=`<li>${service.service}</li>`
                    }
                }
                html+="</ul>"
            }   
        }
        }
    }

   
    html+="</div>"
    return html
}