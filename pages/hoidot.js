import React from 'react';
import HoidotCard from '../components/hoidot/HoidotCard';
import Fade from 'react-reveal/Fade';

const data = [
    {
        title: 'EXUVIANCE KASVOHOIDOT',
        text: 'EXUVIANCE nykyaikaisella ihonhoitotuotesarjalla naisille ja miehille, jotka odottavat todellisia tuloksia. Kasvohoidot aina asiakkaan ihon kunto, tarpeet ja toiveet sekä käytettävä aika huomioiden. Apua myös ongelmaihoille; atopia, psoriasis, akne ja ruusufinni Hoidot sisältävät veloituksetta kulmien siistimisen sekä tarvittaessa meikkivoiteen viimeistelynä. Lue lisää www.exuviance.fi',
    },
    {
        title: 'JALKAHOIDOT myös REUMA ja DIABETES asiakkaat',
        text: 'Jalkakylpy, kynsinauhojen ja kynsien hoito, kovettumien ja känsien poisto sekä jalkojenhieronta; myös miehille. Hoidollinen ohjaus ja neuvonta sisältyy hoitoon. Kynsien lakkaus lisäpalveluna. Myös kevyempi spa-hemmotteluversio, luxus-jalkahoito ja jalkahoito kuumakivihieronnalla;suosittuja Lahjakorttihoitoja.',
    },
    {
        title: 'YUMI LASH KESTOTAIVUTUS',
        text: 'Omien ripsien kestotaivutus, jossa ripset asetellaan yksitellen liiman avulla geelityynylle, käsitellään permanenttiaineilla sekä kestovärjätään. Kesto 2 kk/seuraavan käsittelyn väli.',
    },
    {
        title: 'SOKEROINTI',
        text: 'Ihokarvojen turvallinen ja hygieeninen poistaminen lämmitetyn sokerin ja oikean tekniikan avulla. Samalla iho saa hellävaraisen kuorinnan. Kun karva poistetaan juurineen, uusi karva kasvaa pehmeänä ja hentona, usein karvankasvu vähenee säännöllisen sokeroinnin avulla.',
    },
    {
        title: 'AROMATERAPIA',
        text: 'Kokonaisvaltainen hoitomenetelmä, jossa eteeristen öljyjen ja hieronnan avulla kehon toimintoja tasapainotetaan, rentoutetaan ja nestekiertoa vilkastuu. Tuoksut, rauhallinen hieronta ja rentouttava musiikki vievät ajatukset pois arjesta.',
    },
    {
        title: 'VYÖHYKETERAPIA',
        text: 'Terveyttä kannattaa hoitaa ennaltaehkäisevästi vaikka ei vielä olisikaan mitään vaivaa. Vyöhyketerapia on vaikuttava hoitomuoto sarjahoitona, kehon epätasapainotilan saattaminen tasapainoon vaatii toistoa. Suositellaan :stressi, päänsärky, migreeni, verenpaine, yleinen väsymys, uupumus, nivel-ja lihassärky, akuutit/krooniset vaivat, allergia/astma, ummetus, naistenvaivat, lapsettomuus, unettomuus ja tulehduskierteet',
    },
    {
        title: 'KLASSINEN HIERONTA tai URHEILUHIERONTA',
        text: 'Asiakas hierotaan aina toivomallaan tavalla, sillä hieronnan tarve on hyvin yksilöllistä. Klassinen hieronta sopii kaikille, antaa helpotusta lihaksiston jännitys-ja kiputiloihin, rentouttaa ja aktivoi verenkiertoa sekä auttaa poistamaan kuona-aineita kehosta. Urheiluhieronta nopeuttaa palautumista ja valmistaa elimistöä uuteen harjoitukseen sekä vähentää loukkaantumisriskiä. Tarvittaessa voidaan tehdä imukuppihierontaa, joka on erittäin tehokas apu verenkierron vilkastumiseen.. Seniorihieronta Hellävaraisella hieronnalla saadaan aikaseksi fyysisen olon parantamista sekä mielen rauhaa. Hieronnassa otetaan huomioon ikääntyvän kehon muutokset ja herkkyys. Luminellaan voit tulla luottavaisin mielin, tietäen, että sinua hoitaa osaava ja kunnioittava alan ammattilainen.',
    },
    {
        title: 'KUUMAKIVIHIERONTA',
        text: 'Vartaloa hierotaan lämpimillä kivillä ja öljyllä. Syvälämpöhoito ja hieronta rentouttaa jännittyneet lihakset ja tasapainottaa kehoa ja mieltä. Pitkävaikutteinen, nautinnollinen elämysmatka, suosittu Lahjakorttihoito!',
    },
    {
        title: 'INTIALAINEN PÄÄNHIERONTA',
        text: 'Pään ja niskahartia-alueen käsittelyä hieronta ja sivelyotteilla, helpottaa stressiä ja elvyttää pään alueen verenkiertoa.',
    },
    {
        title: 'KESTOPIGMENTOINTI',
        text: 'Pyyhkiytyvätkö kulmakarvasi pois hikoillessa? Kestopigmentointi pelastaa päiväsi. Oletko kyllästynyt piirtämään tai kestovärjäämään olemattomia kulmakarvojasi? Kestopigmentoinnilla saat huolettomat, luonnollisen sävyiset ja muotoiset kulmakarvat. Ole aina huoliteltu, sillä kulmat ovat kehykset kasvoillesi. Huolitellut kulmat tasapainottavat ja kohottavat katsettasi. Silmien rajauksella korostetaan silmien omaa väriä ja tuodaan silmät kauniisti esille.',
    },
    {
        title: 'ROSEN METODI',
        text: 'Kokonaisvaltainen keho-mielitietoinen hoitomuoto, jossa käytetään kosketusta sekä tarpeen mukaan myös sanoja. Terapeutin kuuntelevien käsien ja läsnäolevan olemuksen avulla on mahdollisuus saada kosketus kehossa oleviin jännityksiin. Hoito vaikuttaa hermojärjestelmäämme ja tekee meidät sisältä käsin tietoisemmaksi omasta elävästä kehostamme, Hoito on aina yksilöllinen kokemus. Myös asiakkaan jokainen hoito on ainutlaatuinen kokemus. Kukin hoitokerta aloitetaan aina sen hetkisestä tilanteesta. Rosen-terapeutilla on vaitiolo-velvollisuus. Häntä koskee Rosen instituutin laatimat eettiset säännöt.',
    },
];

const Hoidot = () => {
    return (
        <div className='sectionWrap '>
            {data &&
                data.map((item, index) => (
                    <Fade right key={index}>
                        <HoidotCard item={item} index={index} />
                    </Fade>
                ))}
        </div>
    );
};

export default Hoidot;
