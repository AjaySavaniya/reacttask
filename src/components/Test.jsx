import React from 'react'
import '../App.css'



function Test({data}) {
  return (
   <>
   {
    data?.map((item)=>{
        return (
            <div class="card">
            <img class="card-image" src={item.image} alt="image"/>
            <div class="card-info">
                <h2 class="card-title">{item.name}</h2>
                <p class="card-description" style={{ fontSize: '2rem' }}>{item.intro}</p>
                <ul class="card-details">
                    <li><strong>From:</strong> {item.about.from}</li>
                    <li><strong>Partner Since:</strong> {item.about.partnerSince}</li>
                    <li><strong>Average Response Time:</strong> 30 minutes</li>
                    <li><strong>Delivery Time:</strong> Delivers within 2 days</li>
                    <li><strong>Price:</strong> {item.price}</li>
                    <li><strong>Rating:</strong> {item.rating}</li>
                    <li><strong>Task Complexity:</strong> {item.taskComplexity}</li>
                </ul>
                <div class="card-testimonial">
                    <p><strong>Testimonial by John Doe:</strong></p>
                    <p>"Exceptional service in managing personal finances."</p>
                </div>
            </div>
        </div>
        )
    })
   }
    </>
  )
}

export default Test
