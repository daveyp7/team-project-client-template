  import React from 'react';
  import LeftNavBar from './leftnavbar';
  import RightSideBar from './rightsidebar';
  import Footer from './footer.js';
  import Fgresultlist from './fgresultlist.js';
  import Fgsearchbox from './fgsearchbox.js';


  export default class Findagame extends React.Component {
    constructor(props){
      super(props)
      this.state = props.data;

    }



    render(){
      return (
        <div className="container-fluid text-center">
          <div className="row content">
            <LeftNavBar />
            <div className="col-md-7 text-left">
              <h2>Find a Game</h2>
              <Fgsearchbox></Fgsearchbox>
              <Fgresultlist></Fgresultlist>

            </div>
            <RightSideBar />
          </div>
          <Footer />
        </div>
      )
    }
  }
