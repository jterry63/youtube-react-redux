// Create a new component. This component should produce some HTML
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./Components/video_list";
import VideoDetail from "./Components/video_detail";

const API_KEY = "AIzaSyBENkwVrH9vF6ClUcFkc4CNP59-LBkJK1w";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };


    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.getElementById("root"));
