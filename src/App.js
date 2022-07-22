import React, { Component } from 'react';
import MenuKontak from "./Page/MenuKontak" ;
import MenuProduct from "./Page/MenuProduct" ;
import MenuTentangKami from "./Page/MenuTentangKami" ;
import MenuUtama from "./Page/MenuUtama" ;


const Header = function(){
  return(
    <h1>Ini Halaman Untuk Header</h1>
  )
};

function Footer() {
  return(
    <h1>Ini Halaman Untuk Footer</h1>
    )
};

class App extends Component {
  render(){
  return (
    <div>
      <Header />
      <MenuKontak />
      <MenuProduct />
      <MenuTentangKami />
      <MenuUtama />
      <Footer />
    </div>
  );
  }
}

export default App;
