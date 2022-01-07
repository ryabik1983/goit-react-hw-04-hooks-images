import React, {useState} from 'react';
import styles from './Searchbar.module.css';
import {toast} from 'react-toastify';


// export default class Searchbar extends Component {
//     state = {
//       value: '',
//      }

//      handleChange = e => {
//     this.setState({
//       value: e.currentTarget.value,
//     })
  
//   };

//     handleSubmit = e => {
//   e.preventDefault();
//   if(this.state.value.trim() === ''){
//     return toast.error("Type data for search!");
    
//   }
//     this.props.onSubmit(this.state.value);
//     this.setState({ value: '' });
//   };


//      render () {
//          return (
// <header className={styles.Searchbar}>
//   <form onSubmit={this.handleSubmit} className={styles.SearchForm} >
//     <button type="submit" className={styles[`SearchForm-button`]}>
//       <span className={styles[`SearchForm-button-label`]}>Search</span>
//     </button>

//     <input
//       className={styles[`SearchForm-input`]}
//       type="text"
//       autoComplete="off"
//       autoFocus
//       placeholder="Search images and photos"
//       value={this.state.value}
//       onChange={e => {
//         this.handleChange(e)
//       }}
//     />
//   </form>
// </header>
// )
// }
// };

export default function Searchbar (props) {
const [value, setValue] = useState('')

const handleChange = e => {
     setValue(e.currentTarget.value);
}
}

