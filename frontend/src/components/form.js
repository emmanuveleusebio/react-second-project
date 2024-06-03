import React, { useState } from "react";
import './formStyle.css'
// import { Card } from 'react-bootstrap';
import axios from "axios";
import CardPost from "./CardPost";

const FormCard = () => {
  const [formData, setFormData] =useState({
    blog:'',
    title:'',
    description:'',
    img:'',
    date:''
  })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { blog, title, description, img, date} = formData;
            const response = await axios.post('http://localhost:3000/register', {
                blog,
                title,
                description,
                img,
                date
            });
            console.log('Form data submitted successfully:', response.data);
            console.log(blog, title, description)
        e.target.reset(); // Clear the form after submission
        } catch (error) {
            console.error('Error submitting form data:', error);
            
        }
      };

   

      const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState =>({
          ...prevState,
          [name]:value
        }));
      }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
    <label>
        Blog Name:
        <input
          id="img"
          type="text"
          name="img"
          placeholder="Add Image Link"
          value={formData.img}
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input
          id="Title"
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
     
      <label>
        Description:
        <input
          id="Description"
          type="text"
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Blog Name:
        <input
          id="blog"
          type="text"
          name="blog"
          placeholder="Enter Blog Name"
          value={formData.blog}
          onChange={handleChange}
        />
      </label>
      <label>
        Blog Name:
        <input
          id="date"
          type="date"
          name="date"
          placeholder="Enter date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    <div>
    {/* <Card className="formCard" >  
    <Card.Img className="formcardimg" variant="top" src={formData.img} />
    <Card.Body className="formcardDetails">
    <Card.Title className="formTitle">{formData.title}</Card.Title>
    <Card.Title className="formTitleDescription"><span>{formData.description}</span></Card.Title>
    <Card.Text className="formText">{formData.blog}</Card.Text>
    
    </Card.Body>
    
  </Card> */}
  <CardPost data={formData} />
    </div>
    </div>
  );
};

export default FormCard;