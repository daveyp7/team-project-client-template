import React from 'react';
import UserProfileProfilePic from './userprofile-profilepic.js'
import UserProfileSportsAndLeagues from './userprofile-sportsandleagues';
import UserProfileRecentGames from './userprofile-recentgames';

export default class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state=props;
  }

  render(){
    return (
      <div>
        <UserProfileProfilePic propic={this.props.userData.profilepicture} name={this.props.userData.name} username={this.props.userData.username}age={this.props.userData.age} gender={this.props.userData.gender}>
        </UserProfileProfilePic>
        <UserProfileSportsAndLeagues sports={this.props.userData.sports} skillLvls={this.props.userData.skillLvl} leagues={this.props.userData.leagues}></UserProfileSportsAndLeagues>
        <UserProfileRecentGames games={this.props.userData.games} ></UserProfileRecentGames>
      </div>
    )
  }
}
