import React from 'react';

function Home() {
  return (
    <div className="homePage">
        <div className="areaHeading">
          <h3>Event Management site</h3>
        </div>
        <hr/>
        <div className="areaHeading">
          <h4>Welcome to Event Management website, a site to organize and coordinate all your events</h4>
          <h4>The frontend is written in React and will communicate to an ASP.Net Core backend for</h4>
          <h4>access and storing event details. A node.js server will be used to track staff on site</h4>
          <h4>with periodic updates to the ASP.net Server using firebase. An Android mobile will app</h4>
          <h4>will be written to track and communicate with staff during the event.</h4>
        </div>
    </div>  
  );
}

export default Home;