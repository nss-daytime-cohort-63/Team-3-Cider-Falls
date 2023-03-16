import {
  getSections,
  getServices,
  getGuests,
  getSectionServices,
} from './database.js'

const services = getServices()
const sections = getSections()
const sectionService = getSectionServices()

//click event listener
document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target
  // let totalGuests = 0
  let html = ''
  if (itemClicked.id.startsWith('sectionTop')) {
    //splits the string apart into an array to have the primery key of an object
    const [, sectionId] = itemClicked.id.split('--')

    //find the whole object by iterating
    for (const service of services) {
      if (service.id === parseInt(sectionId)) {
        html += `${service.service} is avaible in `

        // for (const section of sections) {
        //   for (const secServ of sectionService) {
        //     if (secServ.sectionId === secServ.serviceId) {
        //       html += `${section.attraction} `
        //     }
        //   }
        // }
        // console.log(html)
        window.alert(html)
      }
    }
  }
})

export const Services = () => {
  let html = 'Park services:'

  for (const service of services) {
    //   const kidsStar = findCelebrityMatch(kid, celebrities)
    //   html += ` `
    html += `
            <section id="sectionTop--${service.id}">${service.service}</section>
        `
  }

  html += ''

  return html
}
