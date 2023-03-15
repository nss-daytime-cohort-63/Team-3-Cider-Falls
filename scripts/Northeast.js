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
  if (itemClicked.id.startsWith('section1')) {
    //splits the string apart into an array to have the primery key of an object
    const [, sectionId] = itemClicked.id.split('--')
    let totalGuests = 0
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

export const Northeast = () => {
  let html = ''

  for (const section of sections) {
    if (section.id === 1) {
      html += `<h1 id="section1--${section.id}">${section.attraction}</h1>`
    }
  }

  html += ''
  return html
}

//click event listener
document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target
  if (itemClicked.id.startsWith('section2')) {
    //splits the string apart into an array to have the primery key of an object
    const [, sectionId] = itemClicked.id.split('--')
    let totalGuests = 0
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

export const ServicesNortheast = () => {
  let html = '<h4> Park services: '

  for (const section of sectionServices) {
    if (section.sectionId === 1) {
      for (const service of services) {
        if (section.serviceId === service.id) {
          html = html + ' ' + service.service
        }
      }
    }
  }
  html += '</h4>'
  return html
}
