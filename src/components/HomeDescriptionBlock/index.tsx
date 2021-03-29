import React from 'react';
import styles from './HomeDescriptionBlock.module.scss';
import Text from '../Text';

const HomeDescriptionBlock: React.FC = () => {
  return (
    <div className={styles.DescriptionContainer}>
      <Text type="sub-heading">Welcome to Shape Calculator</Text>
      <Text type="paragraph" weight={600}>
        Shape Calculator is an interactive web application. To the right you
        will find the 3 step application. Follow the instructions in each step.
        Clicking cancel will take you back to step 1. Enjoy!
      </Text>
      <Text type="paragraph">
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth.
      </Text>
      <Text type="paragraph">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar. The Big Oxmox advised her not to do so, because there were
        thousands of bad Commas.
      </Text>
    </div>
  );
};

export default HomeDescriptionBlock;
