import React from "react";
import './tag.css'

const Tags = () => {
    const tagsData = [
        {
            tag:'travell',
            id:1
        },
        {
            tag:'New York',
            id:2
        },
        {
            tag:'IKEA',
            id:3
        },
        {
            tag:'NORWAY',
            id:4
        },
        {
            tag:'DIY',
            id:5
        },
        {
            tag:'Ideas',
            id:6
        },
        {
            tag:'Baby',
            id:7
        },
        {
            tag:'Family',
            id:8
        },
        {
            tag:'News',
            id:9
        },
        {
            tag:'Clothing',
            id:10
        },
        {
            tag:'Shopping',
            id:11
        },
        {
            tag:'Sports',
            id:12
        },
        {
            tag:'Games',
            id:13
        },
        
    ]
    
        return tagsData.map((data) => (
            <li className="tagLists" key={data.id}>{data.tag}</li>
        ))
   
}

export default Tags;