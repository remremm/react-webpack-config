import React from 'react';
import styles from './App.css';
import FirstComponent from '../../components/firstComponent/Component.jsx';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div className={styles.mainBody}>
        <FirstComponent />
      </div>
    )
  }
}

export default App;