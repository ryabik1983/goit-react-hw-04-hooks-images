import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import LoaderElement from 'react-loader-spinner';
import styles from './Loader.module.css';

export default class Loader extends React.Component {
  //other logic
  render() {
    return (
      <LoaderElement
        className = {styles.loader}
        type="Grid"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={1000} //3 secs
      />
    );
  }
}