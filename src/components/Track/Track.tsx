import styles from "./Track.module.css";

type TrackProps = {
  title: string;
  artist: string;
  album: string;
};

export default function Track({ title, artist, album }: TrackProps) {
  function hanldeAddTrack() {
    console.log(title, artist, album);
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.artistAndAlbum}>
        {artist} | {album}
      </p>
      <button className={styles.addToPlaylist} onClick={hanldeAddTrack}>
        +
      </button>
    </div>
  );
}
