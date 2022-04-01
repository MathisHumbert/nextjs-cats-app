import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Card from '../../components/Card/Card';
import DefaultLayout from '../../layouts/Default';

const Cats = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch('/api/cats');
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <Head>
        <title>Our Cats</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DefaultLayout>
        <div className='container mt-5'>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {cats.map((cat) => (
              <Card {...cat} key={cat.id} />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Cats;