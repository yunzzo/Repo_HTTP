import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Login/components/Auth';
import InfoCollect from './pages/Login/components/InfoCollect';
import Name from './pages/Login/components/Name';
import Splash from './pages/Login/components/splash';
import RelationshipList from './pages/Relationship/components/RelationshipList';
import InfoLoading from './InfoLoading';
import InfoLoadingComponent from './InfoLoading';
import Infos from './Infos';

const App = () => {
  // const InfoLoading = InfoLoadingComponent(Infos);
  // const [appState, setAppState] = useState({
  //   loading: false,
  //   infos: null,
  // });

  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = `http://localhost:8000/api/`;
  //   fetch(apiUrl)
  //     .then((data) => data.json())
  //     .then((infos) => {
  //       setAppState({ loading: false, infos: infos });
  //     });
  // }, [setAppState]);
  // return (
  //   <div>
  //     <h1>latest Info</h1>
  //     <InfoLoading isLoading={appState.loading} infos={appState.infos} />
  //   </div>
  // );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/Auth" element={<Auth />}></Route>
          <Route path="/InfoCollect" element={<InfoCollect />}></Route>
          <Route path="/RelationshipList" element={<RelationshipList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;