import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import CreateAGame from './components/createagame.js';
import CreateAGameLeague from './components/createagameleague.js';
import Findagame from './components/findagame.js';
import Template from './components/template.js';
import LeaguePage from './components/leaguepage.js';
import Schedule from './components/schedule.js';
import MessagePage from './components/messagepage.js';
import HighLightsPage from './components/highlightspage.js';
import UserProfilePage from './components/userprofilepage.js';
import GamePage from './components/gamepage.js'

if (document.getElementById('leaguepage')!=null){
  ReactDOM.render(
    <LeaguePage league={1}/>,
    document.getElementById('leaguepage')
  );
}else if (document.getElementById('createagame')!=null){
  ReactDOM.render(
    <CreateAGame />,
    document.getElementById('createagame')
  );
}else if (document.getElementById('createagameleague')!=null){
  ReactDOM.render(
    <CreateAGameLeague />,
    document.getElementById('createagameleague')
  );
}else if (document.getElementById('findagame')!=null){
  ReactDOM.render(
    <Findagame />,
    document.getElementById('findagame')
  );
}else if (document.getElementById('template')!=null){
  ReactDOM.render(
    <Template user={1}/>,
    document.getElementById('template')
  );
}else if (document.getElementById('schedule')!=null){
  ReactDOM.render(
    <Schedule />,
    document.getElementById('schedule')
  );
}else if (document.getElementById('messagepage')!=null){
  ReactDOM.render(
    <MessagePage />,
    document.getElementById('messagepage')
  )
}else if (document.getElementById('highlightspage')!=null){
  ReactDOM.render(
    <HighLightsPage />,
    document.getElementById('highlightspage')
  )
}else if (document.getElementById('userprofilepage')!=null){
  ReactDOM.render(
    <UserProfilePage user={1}/>,
    document.getElementById('userprofilepage')
  );
}else if (document.getElementById('gamepage')!=null){
  ReactDOM.render(
    <GamePage />,
    document.getElementById('gamepage')
  );
}
