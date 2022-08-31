import React ,{ useState} from 'react'
import "./FAQ.scss"
import {Images} from '../../Constants'


function FAQ() {
    const [showText, setShowText] = React.useState(null);

  return (
    <div className='faq-container'>
        <div className='faq-text'>
            <h1>Frequently Asked Questions</h1>
            <p>Here are some of our FAQs. If you have any other questions you'd 
                like answered please feel free to email us.
            </p>
        </div>
        <div className='faq-question'>
            <div className='faq-accordian' onClick={() => {
            setShowText(1);
          }}>
        <h3 >What is Bookmark?</h3>
        <button  onClick={() => {
            setShowText(1);
          }}>
            <img src={Images.iconArrow} alt="arrow" />
          </button>
        </div>
        {showText === 1 ?( <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
    </p>) : null}
        </div>

        <div className='faq-question'>
            <div className='faq-accordian' onClick={() => {
            setShowText(2);
          }}>
        <h3>  How can I request a new browser?</h3>
        <button  onClick={() => {
            setShowText(2);
          }}>
            <img src={Images.iconArrow} alt="arrow" />
          </button>
        </div>
        {showText === 2 ?( 
        <p>
             Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
            </p>) : null}
        </div>

        <div className='faq-question'>
            <div className='faq-accordian' onClick={() => {
            setShowText(3);
          }}>
        <h3> Is there a mobile app?</h3>
        <button  onClick={() => {
            setShowText(3);
          }}>
            <img src={Images.iconArrow} alt="arrow" />
          </button>
        </div>
        {showText === 3 ?( <p>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum.
            </p>) : null}
        </div>

        <div className='faq-question'>
            <div className='faq-accordian' onClick={() => {
            setShowText(4);
          }}>
        <h3>What about other Chromium browsers?</h3>
        <button  onClick={() => {
            setShowText(4);
          }}>
            <img src={Images.iconArrow} alt="arrow" /></button>
        </div>
        {showText === 4 ?( <p>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.
            </p>) : null}
        </div>
        <button className='btn-faq-more'>More info</button>

    </div>
  )
}

export default FAQ