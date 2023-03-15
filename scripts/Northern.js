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
  if (itemClicked.id.startsWith('section3')) {
    //splits the string apart into an array to have the primery key of an object
    const [, sectionId] = itemClicked.id.split('--')
    //find the whole object by iterating
    for (const guest of guests) {
      //compare the primary key and display the window alert message
      if (guest.id === parseInt(sectionId)) {
        window.alert(`There are ${guest.sectionId} guests in this area`)
      }
    }
  }
})

export const Northern = () => {
  let html = ''

  for (const section of sections) {
    if (section.id === 2) {
      html += `<h1 id="section3--${section.id}">${section.attraction}</h1>`
    }
  }

  html += ''
  return html
}

export const ServicesNorthern = () => {
  let html = '<h4> Park services: '

  for (const section of sectionServices) {
    if (section.sectionId === 2) {
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
