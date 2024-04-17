import "./styles.css";
import { useState } from "react";
const tempMusicData = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];
const tempPlaylist = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];

//make component reusable as possible
//separate logic from ui
//make our components simple
//coding style
function NavigationBar({ music }) {
  return (
    <nav className="container">
      <Logo />
      <Search />
      <NumResult music={music} />
    </nav>
  );
}
function Logo() {
  return <h1 style={{ textAlign: "center" }}>Music App</h1>;
}
function NumResult({ music }) {
  return (
    <p>
      Found <strong>{music.length}</strong> results
    </p>
  );
}
function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search music..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function Music({ music }) {
  return (
    <ul>
      {music.map((music) => (
        <li key={music.id}>
          {music.title} by {music.artist} ({music.genre})<button>♥️</button>
        </li>
      ))}
    </ul>
  );
}
function MusicListBox({ music }) {
  return (
    <div className="container">
      <h2>Music List</h2>
      <Music music={music} />
    </div>
  );
}

function PlayList() {
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };
  return (
    <ul>
      {playlist.map((music) => (
        <li key={music.id}>
          {music.title} by {music.artist}
        </li>
      ))}
    </ul>
  );
}
function PlayListBox() {
  return (
    <div className="container">
      <h2>Playlist</h2>
      <PlayList />
    </div>
  );
}
function Main({ music }) {
  return (
    <div>
      <div className="container">
        <MusicListBox music={music} />
        <PlayListBox />
      </div>
    </div>
  );
}

function App() {
  const [music, setMusic] = useState(tempMusicData);
  return (
    <div>
      <NavigationBar music={music} />
      <Main music={music} />
    </div>
  );
}

export default App;

//stateful components
//stateless/presentation components
//structural components
