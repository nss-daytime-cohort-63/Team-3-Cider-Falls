import { getSections } from "./database.js";
import { getSectionServices } from "./database.js";
import { getServices } from "./database.js";
const sections = getSections()
const sectService = getSectionServices()
const services = getServices()


export const southEastHtml =() =>{//funct to create html output
    
    
    let html ="<section"//html variable
    for (let section of sections){//loop into section 
        if(section.id===6){
            html+= ` id="section--${section.id}">${section.attraction}`
        for (let sects of sectService){
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


    html+="</section>"
    return html
}

