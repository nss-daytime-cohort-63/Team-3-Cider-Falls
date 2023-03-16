import {
  getSections,
  getServices,
  getGuests,
  getSectionServices,
} from './database.js'

const sections = getSections()
const sectionServices = getSectionServices()
const services = getServices()

export const northernHtml = () => {
  let html = '<section'
  for (let section of sections) {
    if (section.id === 2) {
      html += ` id="section--${section.id}">${section.attraction}`
      for (let sects of sectionServices) {
        if (sects.sectionId === section.id) {
          html += `<ul>`
          for (let service of services) {
            if (sects.serviceId === service.id) {
              html += `<li>${service.service}</li>`
            }
          }
          html += '</ul>'
        }
      }
    }
  }

  html += '</section>'
  return html
}

// export const ServicesNorthern = () => {
//   let html = '<section'

//   for (let section of sections) {
//     if (section.id === 2) {
//       html += ` id="sectionTop--${section.id}">`
//       html += 'Park services:'
//       for (let sects of sectionServices) {
//         if (sects.sectionId === section.id) {
//           html += ``
//           for (let service of services) {
//             if (sects.serviceId === service.id) {
//               html += ` ${service.service}`
//             }
//           }
//           html += ''
//         }
//       }
//     }
//   }

//   html += '</section>'
//   return html
// }

// export const ServicesNorthern = () => {
//   let html = 'Park services: '

//   for (const section of sectionServices) {
//     if (section.sectionId === 2) {
//       for (const service of services) {
//         if (section.serviceId === service.id) {
//           html = html + ' ' + service.service
//         }
//       }
//     }
//   }
//   html += ''
//   return html
// }
