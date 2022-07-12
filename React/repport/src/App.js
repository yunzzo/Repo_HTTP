import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Auth from './pages/Login/components/Auth';
import InfoCollect from './pages/Login/components/InfoCollect';
import Name from './pages/Login/components/Name';
import Splash from './pages/Login/components/splash';
import RelationshipList from './pages/Relationship/components/RelationshipList';
import Taste_basicinfo_screen from './pages/Taste/screens/Taste_basicinfo_screen';
import Taste_history_screen from './pages/Taste/screens/Taste_history_screen';

import Taste_Main from './pages/Taste/screens/Taste_Main';
import TasteApp from './pages/Taste/TasteApp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Auth"><Auth /></Route>
          <Route path="/InfoCollect"><InfoCollect /></Route>
          <Route exact path="/RelationshipList/:friend_id/basicInfo"><TasteApp /></Route>
          <Route exact path="/RelationshipList/:friend_id/history"><TasteApp /></Route>
          <Route exact path="/RelationshipList/:friend_id/taste"><TasteApp /></Route>
          <Route exact path="/RelationshipList"><RelationshipList /></Route>

          <Route exact path="/"><Splash /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;