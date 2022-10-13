import React from 'react';
import './Fdplan2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fdplanmap from './Fdplanmap'

function Fdplan2() {

    const accordionData = [
        {
            title: 'What is the maturity benefit in a term plan?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
            title: 'How long does it take to get the claim settled?',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Are there any plan options available for this product?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'What is the tax benefit in this plan?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
            quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
            dolor ut sequi minus iste? Quas?`
        },
        {
            title: ' What is the period covered under this plan?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
            quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
            dolor ut sequi minus iste? Quas?`
        }


    ];

    return (
        <>

            <div className='faq-section'>
                <div className='faqs1'>
                  <h4 ><b>FAQs</b></h4>
                  <p>
                    Lorem ipsum
                    dolor sit amet,consectetur adipiscing elit.Sed nibh quam,aliquam vitae</p>

                </div>
               
                  <div className="accordion">
                    {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                    ))}
                </div>
            </div>
        
        </>
    );
}

export default Fdplan2;