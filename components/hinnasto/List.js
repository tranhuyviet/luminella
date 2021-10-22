import React from 'react';
import ListItem from './ListItem';

const data = [
    {
        category: 'Kasvohoidot',
        items: [
            {
                name: 'Nuoriso Ihonpuhdistus Ultra-äänellä (alle 18 v.)',
                price: '70 €',
            },
            { name: 'Exuviance - Kasvohoito, 1 h', price: '75 €' },
            {
                name: 'Ihonpuhdistus Ultra-äänellä, 1 h 15 min',
                price: '90 €',
            },
            { name: 'Täydellinen Ihonpuhdistus Ultra-äänellä', price: '75 €' },
            { name: 'Hieronta kasvot / decollete', price: '90 €' },
            { name: 'LUXUS-kasvohoito 90min', price: '110 €' },
            { name: 'Miesten Kasvohoito', price: '75 €' },
            {
                name: 'Exuviance-Silmänympäryshoito (kasvohoidon yhteydessä)',
                price: '30 €',
            },
        ],
    },
    {
        category: 'Jalkahoidot',
        items: [
            {
                name: 'Jalkahoito 1h',
                price: '65 €',
            },
            { name: 'Jalkahoito vaativa, 1,5h', price: '85 €' },
            {
                name: 'Liuskahoito (sisäänkasvanut kynsi)',
                price: '40 €',
            },
            { name: 'Jalkahoito kuumakivihieronnalla', price: '100 €' },
            { name: 'SPA-hoito jaloille 1h', price: '75 €' },
            { name: 'LUXUS-jalkahoito 1h 45min', price: '120 €' },
        ],
    },
    {
        category: 'Vyöhyketerapiat',
        items: [
            {
                name: 'Korvat, jalkapohjat, pää 1h',
                price: '70 €',
            },
            { name: 'Koko kehon energiaradat 1,5h', price: '90 €' },
            {
                name: 'Suositellaan sarjahoitona: joka 5. hoito',
                price: '-50% (3kk sisällä)',
            },
        ],
    },
    {
        category: 'Kestovärjäykset',
        items: [
            {
                name: 'Ripset ja kulmat (kasvohoidon yht. 25 €)',
                price: '32 €',
            },
            { name: 'Ripsien värjäys ja kulmien muotoilu', price: '28 €' },
            {
                name: 'Ripset tai kulmat (kasvohoidot yht. 14 €)',
                price: '22 €',
            },
        ],
    },
    {
        category: 'Hyvän olon hoidot',
        items: [
            {
                name: 'Intialainen päänhieronta, ½ h',
                price: '40 €',
            },
            {
                name: 'Intialainen päänhieronta, yrttikylpy + jalkojen hieronta, 1h',
                price: '75 €',
            },
            {
                name: 'Aromaterapia -hieronta koko vartalolle, 1 h',
                price: '75 €',
            },
            {
                name: 'Aromaterapia -hieronta koko vartalolle, 80 min',
                price: '90 €',
            },
            {
                name: 'Kuumakivihieronta -selkä, niska, kädet, 1 h',
                price: '75 €',
            },
            {
                name: 'Kuumakivihieronta koko keholle, 80 min',
                price: '97 €',
            },
        ],
    },
    {
        category: 'Karvojenpoisto hunajavahalla tai sokeroinnilla',
        items: [
            {
                name: 'Huuli-, leuka- tai kulmakarvat',
                price: '15 €',
            },
            {
                name: 'Kainalot',
                price: '30 €',
            },
            {
                name: 'Bikinirajat',
                price: '35 €',
            },
            {
                name: 'Sääret',
                price: '50 €',
            },
            {
                name: 'Reidet',
                price: '45 €',
            },
            {
                name: 'Brasilialainen (vain naisille)',
                price: '75 €',
            },
            {
                name: 'Säännöllisesti 3-5 vko:n välein',
                price: '60 €',
            },
            {
                name: 'Brassipassi, 5 kertaa',
                price: '250 €',
            },
        ],
    },
    {
        category: 'Yumi LASHES',
        items: [
            {
                name: 'Ripsien kestotaivutus',
                price: '85 €',
            },
        ],
    },
    {
        category: 'Kestopigmentointi',
        items: [
            {
                name: 'Kulmat',
                price: '320 €',
            },
            {
                name: 'Silmien ylärajaus',
                price: '260 €',
            },
            {
                name: 'Silmien ylä- ja alarajaus',
                price: '320 €',
            },
            {
                name: 'Vahvistus kerta/alue',
                price: '195 €',
            },
        ],
    },
    {
        category: 'Koulutettu Hieroja',
        items: [
            {
                name: 'Klassinen tai Urheiluhieronta, 45min',
                price: '45 €',
            },
            {
                name: 'Klassinen tai Urheiluhieronta, 1 h',
                price: '55 €',
            },
            {
                name: 'Klassinen tai Urheiluhieronta, 1,5 h',
                price: '75 €',
            },
        ],
    },
];

const List = () => {
    return (
        <div className='relative'>
            {data &&
                data.map((item) => (
                    <ListItem key={item.category} item={item} />
                ))}
            {/* <img
                src='/images/conner-golden.png'
                alg='conner background'
                className='absolute bottom-0 w-[600px] opacity-70'
            /> */}
        </div>
    );
};

export default List;
