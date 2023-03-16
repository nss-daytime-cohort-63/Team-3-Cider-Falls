import { Northeast, ServicesNortheast } from './Northeast.js'
import { Northern,  } from './Northern.js'//ServicesNorthern
import { southEastHtml } from './southeast.js'
import { southernHtml } from './southern.js'
import { } from './eventHandler.js'
import { guestList, serviceList } from './lists.js'

const mainContainer = document.querySelector('#container')

{
  /* <img src="./images/" class="logo" /> */
}
const applicationHTML = `
        <header class="header">
        
            <h1 class="title">Cider Falls</h1>
        </header>
<div class="marquee">Park Services ${serviceList()}</div>
<aside class="guests">Guests  ${guestList()}</aside>





<article class="details">
    <section class="detail--column details_section">
        ${Northeast()}
        ${ServicesNortheast()}
    </section>
    <section class="detail--column details_section">

        ${Northern()}
    </section>

    <section class="detail--column details_section">
        <h2>Northwest</h2>

    </section>
</article>

<article class="details">
    <section class="detail--column details_section">
        <h2>Southwest</h2>

    </section>

    <section class="detail--column details_section">
        <h2>Southern</h2>
        ${southernHtml()}
    </section>

    <section class="detail--column details_section">
        <h2>Southeast</h2>
        ${southEastHtml()}
    </section>
</article>

<article class="contact">
    <h2>Contact Info</h2>

</article>
`

  
mainContainer.innerHTML = applicationHTML
