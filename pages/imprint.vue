
<template>
    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">Imprint</h2>

            <h2 class="font-bold text-xl mb-1">Responsible for the Website</h2>
            Max Großmann<br>
            Schillerstraße 39<br>
            95028 Hof<br>

            <h2 class="font-bold text-xl mt-6 mb-1">Contact</h2>
            Telefon: +49 9281 5409 332<br>
            E-Mail: impressum@maax.gr<br>

            <h2 class="font-bold text-xl mt-6 mb-1">German Law</h2>

            <h3 class="font-bold text-base mb-1">Haftung für Inhalte</h3>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
            Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
            10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.

            <h3 class="font-bold text-base mb-1 mt-4">Haftung für Links</h3>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.

            <h3 class="font-bold text-base mb-1 mt-4">Urheberrecht</h3>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
            die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br><br>
            Quelle: eRecht24, dem Portal zum Internetrecht von Rechtsanwalt Sören Siebert
        </div>
    </section>
</template>

<style scoped>
.about-content .left {
    width: 45%;
}

.about-content .left img {
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 6px;
}

.about-content .right {
    width: 55%;
}

.about-content .right .text {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}

.about-content .right .text span {
    color: var(--app-color-accent);
}

.about-content .right p {
    text-align: justify;
}

.about-content .right a.button {
    display: inline-block;
    background: var(--app-color-accent);
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid var(--app-color-accent);
    transition: all 0.3s ease;
}

.about-content .right a.button:hover {
    color: var(--app-color-accent);
    background: none;
}

.link {
    color: var(--app-color-accent);
}
</style>