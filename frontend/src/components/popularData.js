import React from "react";

const Aside = () => {
 
    const fameData = [
        {
            img:'https://www.w3schools.com/w3images/workshop.jpg',
            name:'Lorem',
            desc:'Sed mattis nunc',
            id:1
        },
        {
            img:'	https://www.w3schools.com/w3images/gondol.jpg',
            name:'Ipsum',
            desc:'Praes tinci sed',
            id:2
        },
        {
            img:'https://www.w3schools.com/w3images/skies.jpg',
            name:'Dorun',
            desc:'Ultricies congue',
            id:3
        },
        {
            img:'https://www.w3schools.com/w3images/rock.jpg',
            name:'Mangsum',
            desc:'Lorem ipsum dipsum',
            id:4
        }
    ]

    return fameData.map((data) => (
        <li key={data.id}>
            <img src={data.img} alt="" />
            <div>
                <p>{data.name}</p>
                <p>{data.desc}</p>
            </div>
        </li>
    ))

}

export default Aside;