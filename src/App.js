import './App.css';
import Card from './Components/Card/Card';

function App() {

  const items = [
    {
      name: "anisur rahman",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      description: "Google Photos is a photo sharing and storage service developed by Google. It was announced in May 2015 and spun off from Google+, the company's former social network"
    },
    {
      name: "anisur rahman",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      description: "Google Photos is a photo sharing and storage service developed by Google. It was announced in May 2015 and spun off from Google+, the company's former social network"
    },
    {
      name: "anisur rahman",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      description: "Google Photos is a photo sharing and storage service developed by Google. It was announced in May 2015 and spun off from Google+, the company's former social network"
    },
    {
      name: "anisur rahman",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      description: "Google Photos is a photo sharing and storage service developed by Google. It was announced in May 2015 and spun off from Google+, the company's former social network"
    },
    {
      name: "anisur rahman",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      description: "Google Photos is a photo sharing and storage service developed by Google. It was announced in May 2015 and spun off from Google+, the company's former social network"
    },
    {
      name: "anisur rahman",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      description: "Google Photos is a photo sharing and storage service developed by Google. It was announced in May 2015 and spun off from Google+, the company's former social network"
    },
    {
      name: "anisur rahman",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      description: "Google Photos is a photo sharing and storage service developed by Google. It was announced in May 2015 and spun off from Google+, the company's former social network"
    },
  ]



  return (
    <div className="App">
      <div  className="row row-cols-2  row-cols-md-3 g-4">
        {
          items.map(items => <Card card={items}></Card>)
              }
      </div>
    </div>
  );
}

export default App;
