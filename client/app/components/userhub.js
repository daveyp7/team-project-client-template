import React from 'react';
import {Link} from 'react-router';

export default class UserHub extends React.Component {
  constructor(props){
    super(props);
    this.state=props;
  }

  render(){
    return(
      <div className="panel panel-default user-hub">
          <div className="panel-body">
              <div className="row">
                  <div className="col-md-2 removepadding">
                      <div className="media">
                          <div className="media-body">
                              <img src={this.props.userhubprofpic} alt="" className="img-rounded img-responsive" />
                          </div>
                      </div>
                  </div>
                  <div className="col-md-10">
                      <p className="pull-left">Hello, <Link to={"/user/"+this.props.userid}>{this.props.username}</Link></p>
                  </div>
              </div>
              <hr />
              <div className="row">
                  <div className="col-md-6">
                      <Link to={"/settings/"+this.props.userid}><span className="pull-right"><i className="fa fa-fw fa-cog"></i>Settings</span></Link>
                  </div>
                  <div className="col-md-6 logout">
                      <Link to={"/logout/"+this.props.userid}><span className= "pull-left"><i className="fa fa-fw fa-sign-out"></i>Logout</span></Link>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
