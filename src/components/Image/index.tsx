import React from 'react';
import styles from './Image.module.scss';
import { ImageProps } from '../../common/interface';

const Image: React.FC<ImageProps> = ({ src, alt = ' ', ...props }) => {
  return (
    <>
      {src === undefined ? (
        <div>Image</div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={[styles.imgae].join(' ')}
          {...props}
        />
      )}
    </>
  );
};

export default Image;
