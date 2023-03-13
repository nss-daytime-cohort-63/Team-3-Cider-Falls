const mainContainer = document.querySelector('#container')

const applicationHTML = `
        <header class="header">
            <img src="./images/" class="logo" />
            <h1 class="title">Cider Falls</h1>
        </header>

<aside class="guests">Guests</aside>

<article class="details">
    <section class="detail--column details_section">
        <h2>Northeast</h2>

    </section>
    <section class="detail--column details_section">
        <h2>Northern</h2>

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
