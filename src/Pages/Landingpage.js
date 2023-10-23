import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <section className="hero is-fullheight" style={{ backgroundImage: 'url("your-background-image.jpg")', backgroundSize: 'cover' }}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Hah!! Ee chaunima lee, ini macam aa lu olang, owe suluh sekolah aja ga becus, owe cali duit susah susah buat lu olang sekolah loo, tapi lu olang ini macam aa tiap hali minta duit isi kota maen mobil lejeng mobil lejeng, haa chaunimaa</h1>
            <h2 className="subtitle">otak pusing oo, kelja kelja tipes</h2>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
