import React from "react";
import HoidotCard from "../components/hoidot/HoidotCard";
import Head from "next/head";

const data = [
  {
    title: "KASVOHOIDOT",
    text: "Ihonhoitotuotesarjalla naisille ja miehille, jotka odottavat todellisia tuloksia. Kasvohoidot aina asiakkaan ihon kunto, tarpeet ja toiveet sekä käytettävä aika huomioiden. Apua myös ongelmaihoille; atopia, psoriasis, akne ja ruusufinni Hoidot sisältävät veloituksetta kulmien siistimisen.",
  },
  {
    title: "JALKAHOIDOT myös REUMA ja DIABETES asiakkaat",
    text: "Jalkakylpy, kynsinauhojen ja kynsien hoito, kovettumien ja känsien poisto sekä jalkojenhieronta; myös miehille. Hoidollinen ohjaus ja neuvonta sisältyy hoitoon. Kynsien lakkaus lisäpalveluna. Myös kevyempi spa-hemmotteluversio, luxus-jalkahoito ja jalkahoito kuumakivihieronnalla;suosittuja Lahjakorttihoitoja.",
  },
  {
    title: "YUMI LASH KESTOTAIVUTUS",
    text: "Omien ripsien kestotaivutus, jossa ripset asetellaan yksitellen liiman avulla geelityynylle, käsitellään permanenttiaineilla sekä kestovärjätään. Kesto 2 kk/seuraavan käsittelyn väli.",
  },
  {
    title: "SOKEROINTI",
    text: "Ihokarvojen turvallinen ja hygieeninen poistaminen lämmitetyn sokerin ja oikean tekniikan avulla. Samalla iho saa hellävaraisen kuorinnan. Kun karva poistetaan juurineen, uusi karva kasvaa pehmeänä ja hentona, usein karvankasvu vähenee säännöllisen sokeroinnin avulla.",
  },
  {
    title: "AROMAHIERONTA",
    text: "Kokonaisvaltainen hoitomenetelmä, jossa eteeristen öljyjen ja hieronnan avulla kehon toimintoja tasapainotetaan, rentoutetaan ja nestekierto vilkastuu. Tuoksut, kevyempi ja rauhallinen hieronta sekä rentouttava musiikki vievät ajatukset pois arjesta.",
  },
  {
    title: "VYÖHYKETERAPIA",
    text: "Terveyttä kannattaa hoitaa ennaltaehkäisevästi vaikka ei vielä olisikaan mitään vaivaa. Vyöhyketerapia on vaikuttava hoitomuoto sarjahoitona, kehon epätasapainotilan saattaminen tasapainoon vaatii toistoa. Suositellaan :stressi, päänsärky, migreeni, verenpaine, yleinen väsymys, uupumus, nivel-ja lihassärky, akuutit/krooniset vaivat, allergia/astma, ummetus, naistenvaivat, lapsettomuus, unettomuus ja tulehduskierteet.",
  },
  {
    title: "HIERONNAT",
    text: "Asiakas hierotaan aina toivomallaan tavalla, sillä hieronnan tarve on hyvin yksilöllistä. Klassinen hieronta sopii kaikille, antaa helpotusta lihaksiston jännitys-ja kiputiloihin, rentouttaa ja aktivoi verenkiertoa sekä auttaa poistamaan kuona-aineita kehosta. Urheiluhieronta nopeuttaa palautumista ja valmistaa elimistöä uuteen harjoitukseen sekä vähentää loukkaantumisriskiä. Tarvittaessa voidaan tehdä imukuppihierontaa, joka on erittäin tehokas apu verenkierron vilkastumiseen.. Seniorihieronta Hellävaraisella hieronnalla saadaan aikaseksi fyysisen olon parantamista sekä mielen rauhaa. Hieronnassa otetaan huomioon ikääntyvän kehon muutokset ja herkkyys. Luminellaan voit tulla luottavaisin mielin, tietäen, että sinua hoitaa osaava ja kunnioittava alan ammattilainen.",
    text2:
      "Christinan erikoishieronta sisältää klassisen hieronnan ja nivelliikkuvuuden erikoisosaamisen. Mobilisoiva hieronta parantaa ja ylläpitää nivelten liikkuvuutta. Lievittää kipua, parantaa niveltä ympäröivien lihasten toimintaa. Hidasrytminen, rauhallisin liikkein nivelten eri rakenteisiin, nivelkapseliin ja nivelsiteisiin kohdennetaan paikallinen venytys. Lempeä mutta tehokas hoito.",
  },
  {
    title: "KUUMAKIVIHIERONTA",
    text: "Vartaloa hierotaan lämpimillä kivillä ja öljyllä. Syvälämpöhoito ja hieronta rentouttaa jännittyneet lihakset ja tasapainottaa kehoa ja mieltä. Sisältää myös käsillä hierontaa. Pitkävaikutteinen, nautinnollinen elämysmatka, suosittu Lahjakorttihoito!",
  },
  {
    title: "PÄÄNHIERONTA",
    text: "Pään ja niskahartia-alueen käsittelyä hieronta ja sivelyotteilla, helpottaa stressiä ja elvyttää pään alueen verenkiertoa.",
  },
  {
    title: "KESTOPIGMENTOINTI",
    text: "Pyyhkiytyvätkö kulmakarvasi pois hikoillessa? Kestopigmentointi pelastaa päiväsi. Oletko kyllästynyt piirtämään tai kestovärjäämään olemattomia kulmakarvojasi? Kestopigmentoinnilla saat huolettomat, luonnollisen sävyiset ja muotoiset kulmakarvat. Ole aina huoliteltu, sillä kulmat ovat kehykset kasvoillesi. Huolitellut kulmat tasapainottavat ja kohottavat katsettasi. Silmien rajauksella korostetaan silmien omaa väriä ja tuodaan silmät kauniisti esille.",
  },
  {
    title: "ROSEN METODI",
    text: "Kokonaisvaltainen keho-mielitietoinen hoitomuoto, jossa käytetään kosketusta sekä tarpeen mukaan myös sanoja. Terapeutin kuuntelevien käsien ja läsnäolevan olemuksen avulla on mahdollisuus saada kosketus kehossa oleviin jännityksiin. Hoito vaikuttaa hermojärjestelmäämme ja tekee meidät sisältä käsin tietoisemmaksi omasta elävästä kehostamme, Hoito on aina yksilöllinen kokemus. Myös asiakkaan jokainen hoito on ainutlaatuinen kokemus. Kukin hoitokerta aloitetaan aina sen hetkisestä tilanteesta. Rosen-terapeutilla on vaitiolo-velvollisuus. Häntä koskee Rosen instituutin laatimat eettiset säännöt.",
  },
];

const Hoidot = () => {
  return (
    <div className="sectionWrap ">
      <Head>
        <title>Hoidot | Hyvinvointi- ja Kauneushoitola Luminella</title>
        <meta
          name="description"
          content="Hyvinvointi- ja Kauneushoitola Luminella"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1 className='sectionTitle mb-16'>Hoidot</h1> */}
      {data &&
        data.map((item, index) => (
          <HoidotCard item={item} index={index} key={index} />
        ))}
    </div>
  );
};

export default Hoidot;
