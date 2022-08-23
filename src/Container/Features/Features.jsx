import React, { useReducer } from 'react'
import "./Features.scss"
import { Images } from '../../Constants';

const reducer = (state, action) => {
  switch (action.type) {
    case "TAB_ONE":
      return { openTabOne: !state.showText };
    case "TAB_TWO":
      return { openTabTwo: !state.showText };
    case "TAB_THREE":
      return { openTabThree: !state.showText };
    default:
      state;
  }
};

function Features() {

  const [state, dispatch] = useReducer(reducer, { openTabOne: true, openTabTwo: false, openTabThree: false });

  return (
    <div className='features-app'>
        <div className='features'>
          <h1>Features</h1>
          <p>Our aim is to make it quick and easy for you to access your favourite 
            websites. Your bookmark sycns between your devices so you can access them 
            on the go.
          </p>
        </div>
        <div className='features-tabs'>
          <div onClick={() => {
          dispatch({ type: "TAB_ONE" });
        }}
      >
        <h3>
        Simple Bookmarking
        </h3>
        <div className='tab-one'>
        {state.openTabOne && <div className='tab-one-container'>
          <div className='tab-one-img'>
            <img src={Images.featuresTabOne} alt="tab-img" />
          </div>
          <div className='tab-one-text'>
            <h1>Bookmark in one click</h1>
            <p>Orgonize your bookmarks however you like. Our simple drag-and-drop
                interfacce gives you complete control over how you manage your favorite
                sites.
            </p>
            <button>More info</button>
          </div>
           </div>
           
           }
        
        </div>
      </div>
          <div  onClick={() => {
          dispatch({ type: "TAB_TWO" });
        }}>
          <h3>
          Speedy Searching
          </h3>
          <div className='tab-two'>
          {state.openTabTwo && <div className='tab-two-container'>
          <div className='tab-two-img'>
            <img src={Images.featuresTabOne} alt="tab-img" />
          </div>
          <div className='tab-two-text'>
            <h1>Intelligent search </h1>
            <p>Our powerful search feature will help you find saved
              ites in no time at all. No need to trawl through all of
              your bookmarks.
            </p>
            <button>More info</button>
          </div>
           </div>}
          
          </div>
        </div>
          <div  onClick={() => {
          dispatch({ type: "TAB_THREE" });
        }}>
          <h3>
          Easy Sharing
          </h3>
          <div className='tab-three'>
          {state.openTabThree && <div className='tab-three-container'>
          <div className='tab-three-img'>
            <img src={Images.featuresTabOne} alt="tab-img" />
          </div>
          <div className='tab-three-text'>
            <h1>Share your bookmarks</h1>
            <p>Easily share your bookmarks and collections with
              others. Create a shareable link that you can send at
              the click of a button.
            </p>
            <button>More info</button>
          </div>
           </div>}
          
          </div>
        </div>
        </div>
    </div>
  )
}

export default Features