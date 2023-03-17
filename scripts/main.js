import { southEastHtml } from './southeast.js'
import { southernHtml } from './southern.js'
import { northEastHtml } from './Northeast.js'
import { northernHtml } from './Northern.js'
import {} from './eventHandler.js'
import { guestList, serviceList } from './lists.js'
import { northWestHtml } from './northwest.js'
import { southWestHtml } from './Southwest.js'

const mainContainer = document.querySelector('#container')

const applicationHTML = `
        <header class="header">
        
            <h1 class="title">Cider Falls</h1>
        </header>
        <div class="whatever">
        <div class="headTwo"><h2>Park Services</h2></div>
<div class="marquee">${serviceList()}</div>
</div>
<aside class="guests"><h2>Guests</h2>  ${guestList()}</aside>

<article class="details">
    <section class="detail--column details_section">
        <h2>Northeast</h2>
        ${northEastHtml()}
    </section>
    <section class="detail--column details_section">
        <h2>Northern</h2>
        ${northernHtml()}
    </section>
    <section class="detail--column details_section">
        <h2>Northwest</h2>
        ${northWestHtml()}
    </section>
</article>

<article class="details">
    <section class="detail--column details_section">
        <h2>Southwest</h2>
        ${southWestHtml()}
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

<section class="footer">
<article class="contact">
    <h2>Contact Info</h2>
        <div>Phone: (605)-475-6968</div>
        <div>Email: CiderFalls@nebraska.gov</div> 
        <div>Mailing Address: 1234 Cider Falls Ln, Cider Falls City, NE, (zipcode)</div>     
</article>
</section>
`


mainContainer.innerHTML = applicationHTML