import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
function App() {
  const [searchTerm, setSearchTerm] = useState('coding music');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onFormSubmit = searchTerm => {
    setSearchTerm(searchTerm);
    submitSearch(searchTerm);
  };

  const onVideoSelect = video => {
    setSelectedVideo(video);
  };

  const submitSearch = async (searchTerm) => {
    try {
      const response = await youtube
        .get('/search', {
          params: {
            q: searchTerm
          }
        });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (e) {
      console.log('API Failed ', e)
    }
  }

  useEffect(() => {
    submitSearch(searchTerm);
    
  }, [searchTerm])
  
    return (
      <div className="ui container">
        <div className="ui row">
          <SearchBar term={searchTerm} onFormSubmit={onFormSubmit} />

          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
        </div>
        <div className="five wide column">
          <VideoList
            videos={videos}
            onVideoSelect={onVideoSelect}
          />
        </div>
      </div>
    );
  }

export default App;
