import React from 'react';
import { Link } from 'react-router-dom';

import classes from './About.module.scss';

const About: React.FC = () => (
  <div className={classes.About_container}>
    <article className={classes.Article_wrapper}>
      <section className={classes.Title_wrapper}>
        <h1 className={classes.Title}>
          Take a look on all information about movies and tv shows you can think
          of
        </h1>
      </section>
      <Link to="/home" className={classes.Redirect_button}>
        Go to homepage
      </Link>
      <section className={classes.Main_information_Wrapper}>
        <p>
          Welcome to Site-Name, your ultimate destination for online movie
          information portal. With our extensive database and a multitude of
          exciting features, we bring you a world of information right at your
          fingertips. One of the standout features of Site-Name is our
          continuous and hourly updates. We tirelessly curate and add the latest
          movies and TV shows to our collection, ensuring that you always have
          access to the hottest content. Whether you're in the mood for action,
          romance, comedy, or something else entirely, our vast library has
          something to satisfy every cinematic craving. We take pride in our
          simple, smart, and convenient interface, designed to provide an
          effortless user experience. Navigating through our website is a
          breeze, allowing you to seamlessly browse and discover new titles.
        </p>
        <p>
          Our intuitive layout makes it easy to find the movies or TV shows
          you're looking for, and our robust search and filter system further
          enhances your browsing experience. At Site-Name, we understand the
          importance of synchronization and convenience. Our platform offers
          synchronous support between devices, allowing you to seamlessly switch
          between your laptop, tablet, and smartphone. The best part? You can
          enjoy all of this without any registration or payment required.
          Site-Name is a free website, dedicated to providing unlimited access
          to movie / TV's show information for everyone. No subscriptions, no
          hidden fees. We've optimized our website to be mobile-friendly,
          ensuring that you can enjoy it through your phone. Whether you're
          commuting, traveling, or simply lounging at home, our mobile-friendly
          design allows you to indulge in a captivating viewing experience
          wherever you are.
        </p>
        <p>
          Additionally, we support multiple resolutions, allowing you to adjust
          the information based on your preferences and internet speed. Never
          miss out on the latest available information of your favorite shows
          with our notification system. Stay up to date with automatic
          notifications whenever a new episode is released, ensuring that you're
          always in the know. At Site-Name, we prioritize detailed and fast load
          speeds information. Sit back, relax, and let us take care of you. Join
          Site-Name today and unlock a universe of entertainment. With our
          continuously updated content, user-friendly interface, multi-device
          support, your movie journey is about to reach new heights. Get ready
          to experience the magic of Site-Name!
        </p>
      </section>
    </article>
  </div>
);

export default About;
