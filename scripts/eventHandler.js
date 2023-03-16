import {
    getSections,
    getServices,
    getGuests,
    getSectionServices,
  } from './database.js'

const guests = getGuests()
const sections = getSections()
const sectionServices = getSectionServices()
const services = getServices()


//click event listener
document.addEventListener('click', (clickEvent) => {
    const itemClicked = clickEvent.target
    let totalGuests = 0
    if (itemClicked.id.startsWith('section')) {
      //splits the string apart into an array to have the primery key of an object
      const [, sectionId] = itemClicked.id.split('--')
      
      //find the whole object by iterating
      for (const guest of guests) {
        //
        if (guest.sectionId === parseInt(sectionId)) {
          totalGuests++
        }
      }
      window.alert(`There are ${totalGuests} guests in this area`)
    }
    
  })


  document.addEventListener('click', (clickEvent)=>{
    //get selector id of service 
    const clickedItem = clickEvent.target
    const serviceName = clickEvent.target.innerText

    if(clickedItem.id.startsWith("service")){//specify id of service

      const [,serviceID] =clickedItem.id.split("--")
      let sectServHtml =""
      for (let sect of sectionServices){
        if(parseInt(serviceID) === sect.serviceId){
          for (let section of sections){
            if (sect.sectionId===section.id){
              if (sectServHtml.length === 0){
              sectServHtml += `${serviceName} is available at the ${section.attraction}`
              }
              else
              {
                sectServHtml+=`, and the ${section.attraction}`
              }
            }
          }
        } 
      }
      window.alert(sectServHtml)
    }

  })
