import React, {useState} from "react";
import { Card,Button } from 'react-bootstrap';
import CardCss from './Cards.module.css';

const CardPost = ({data}) => {
  
   const [isReadMore, setIsReadMore] = useState(true);
   const toggleReadMore = () => setIsReadMore(!isReadMore);
   return(
      <Card className={CardCss.card} >  
    <Card.Img className={CardCss.cardimg} variant="top" src={data.img} />
    <Card.Body className={CardCss.cardDetails}>
     <Card.Title className={CardCss.title}>{data.title}</Card.Title>
    <Card.Title className={CardCss.titleDescription}>{data.blog},<span> {data.date}</span></Card.Title>
   <Card.Text className={CardCss.text}> {isReadMore ? `${data.description.slice(0, 150)}...` : data.description}</Card.Text> 
    <div className={CardCss.footer}>
      <Button variant="primary" onClick={toggleReadMore}>{isReadMore ? (<>Read More <i className="fa-solid fa-angles-right"></i></>) : (<><i className="fa-solid fa-angles-left"></i> Read Less</>)}</Button>
      <><p>Comments <span>0</span></p></>
    </div>
    </Card.Body>
    
</Card>
   )
}

export default CardPost;