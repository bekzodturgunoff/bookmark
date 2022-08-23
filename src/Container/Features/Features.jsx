import * as React from "react";
import "./Features.scss";
import { Images } from "../../Constants";

function Features() {
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <div class="tabs-container">
      <div class="header">
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite websites. Your
          bookmark sycns between your devices so you can access them on the go.
        </p>
      </div>
      <ul className="tabs">
        <li>
          <button onClick={() => setActiveTab(1)}>Simple Bookmarking</button>
        </li>
        <li>
          <button onClick={() => setActiveTab(2)}>Speedy Searching</button>
        </li>
        <li>
          <button onClick={() => setActiveTab(3)}>Easy Sharing</button>
        </li>
      </ul>
      {activeTab === 1 ? (
        <div className="feature-tab">
          <img src={Images.featuresTabOne} alt="" />
          <div>
            <h2>Bookmark in one click</h2>
            <p>
              Orgonize your bookmarks however you like. Our simple drag-and-drop interfacce gives
              you complete control over how you manage your favorite sites.
            </p>
            <button>More info</button>
          </div>
        </div>
      ) : null}
      {activeTab === 2 ? (
        <div className="feature-tab">
          <img src={Images.featuresTabTwo} alt="" />
          <div>
            <h2>Intelligent Search</h2>
            <p>
              Our powerful search feature will help you find saved ites in no time at all. No need
              to trawl through all of your bookmarks.
            </p>
            <button>More info</button>
          </div>
        </div>
      ) : null}
      {activeTab === 3 ? (
        <div className="feature-tab">
          <img src={Images.featuresTabThree} alt="" />
          <div>
            <h2>Share your bookmarks</h2>
            <p>
              Easily share your bookmarks and collections with others. Create a shareable link that
              you can send at the click of a button.
            </p>
            <button>More info</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Features;
