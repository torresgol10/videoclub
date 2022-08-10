import React from 'react'
import Header from 'components/Header';
import VideoFeatured from 'components/VideoFeatured';
import Section from 'components/Section';
import "./Home.css";
import Nav from 'components/Nav';
import Banner from 'components/Banner';
import Row from 'components/Row';
/*export default function Home() {
  return (
    <>
      <Header />
      <VideoFeatured />

      <Section title="Populares" />
    </>
  )
}*/

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <Banner />

      <Row title="Netflix Original" url="/discover/tv?with_networks=213&language=es-ES" isLargeRow={true} />

      <Row title="Populares" url="/movie/top_rated?language=es-ES" />
    </div>
  )
}

