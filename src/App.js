import React, {useState, useEffect} from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import fetchApi from './components/ApiService/ApiService';

// class App extends React.Component {
//   state = {
//     page: 1,
//     images: [],
//     searchValue: '',
//     status: 'idle',
//     showModal: false,
//     largeImageURL: {},
//     error: '',
//   };

//   componentDidMount() {
//     this.setState({ status: 'pending' });
//   }

//   toggleModal = largeImage => {
//     const largeImgData = largeImage ? largeImage : {};
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//       largeImageURL: largeImgData,
//     }));
//   };

//   getData(q, page) {
//     fetchApi(q, page)
//       .then(images => this.onPushImagesToState(images))
//       .catch(error => this.setState({ error: error }));
//   }

//   onPushImagesToState = images => {
//     this.setState(prevState => ({
//       status: 'resolved',
//       images: [...prevState.images, ...images.hits],
//     }));
//   };

//   onSubmitForm = value => {
//     if (value.trim() === '') return;
//     if (value === this.state.searchValue) return;
//     this.setState({
//       status: 'pending',
//       images: [],
//       searchValue: value,
//       page: 1,
//     });
//     this.getData(value, this.state.page);
//   };

//   onLoadMore = ref => {
//     const { searchValue, page } = this.state;
//     this.setState(prevState => ({
//       status: 'pending',
//       page: prevState.page + 1,
//     }));
//     this.getData(searchValue, page + 1);
//     setTimeout(() => {
//       ref.current.scrollIntoView({ behavior: 'smooth' });
//     }, 500);
//   };

//   render() {
//     const { images, status, showModal, largeImageURL, searchValue } =
//       this.state;
//     return (
//       <div className="App">
//         {showModal && (
//           <Modal img={largeImageURL} toggleModal={this.toggleModal} />
//         )}
//         <Searchbar onSubmit={this.onSubmitForm} />
//         {status === 'pending' && <Loader/>}
//         {searchValue.trim() === '' && (
//           <h2 className="title">Введите запрос в поиск</h2>
//         )}
//         {images.length > 0 && (
//           <ImageGallery hits={images} toggleModal={this.toggleModal} />
//         )}
//         {images.length > 0 && <Button incrementPage={this.onLoadMore} />}
//       </div>
//     );
//   }
// }

// export default App;
export default function App () {
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState({});
  

  const toggleModal = largeImage => {
    const largeImgData = largeImage ? largeImage : {};
    setShowModal(!showModal);
    setLargeImageURL(largeImgData);
};


useEffect(() => {
if (page === 0) return;
fetchApi(searchValue, page)
      .then(images => onPushImagesToState(images))
      .catch(error => console.log(error));
}, [searchValue, page]
);
  const onPushImagesToState = images => {
  setStatus ('resolved');
  setImages(prevImages => {
    return [...prevImages, ...images.hits];
  });
}

const onSubmitForm = value => {
      if (value.trim() === '') return;
      if (value === setSearchValue) return;
      setStatus('pending');
      setImages([]);
      setSearchValue(value);
      setPage(1);
    };

const onLoadMore = ref => {
  setStatus('pending');
  setPage (prevPage => {
  return prevPage + 1;
})
  setTimeout(() => {
            ref.current.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        };
return (
  <div className="App">
  {showModal && (
  <Modal img={largeImageURL} toggleModal={toggleModal} />
  )}
  <Searchbar onSubmit={onSubmitForm} />
  {setStatus === 'pending' && <Loader/>}
  {searchValue.trim() === '' && (
  <h2 className="title">Введите запрос в поиск</h2>
  )}
  {images.length > 0 && (
  <ImageGallery hits={images} toggleModal={toggleModal} />
  )}
  {images.length > 0 && <Button incrementPage={onLoadMore} />}
  </div>
  );
};