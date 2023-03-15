import { Northeast, ServicesNortheast } from './Northeast.js'
import { Northern, ServicesNorthern } from './Northern.js'

const mainContainer = document.querySelector('#container')

{
  /* <img src="./images/" class="logo" /> */
}
const applicationHTML = `
        <header class="header">
            <h1 class="title">Cider Falls</h1>
        </header>

<aside class="guests">Guests</aside>


<article class="details">
    <section class="detail--column details_section">
        ${ServicesNortheast()}
    </section>
    <section class="detail--column details_section">

        ${ServicesNorthern()}
    </section>

    <section class="detail--column details_section">


    </section>
</article>

<article class="details">
    <section class="detail--column details_section">
        ${Northeast()}
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

    </section>

    <section class="detail--column details_section">
        <h2>Southeast</h2>

    </section>
</article>

<article class="contact">
    <h2>Contact Info</h2>

</article>
`

mainContainer.innerHTML = applicationHTML
