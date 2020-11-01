// Action creator

export const selectSong = (song) => {
  // Return an action
  console.log("song in action ", song);
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};