const setBootingBackground = () => {
  document.getElementById('html')?.classList.add('booting-screen');
}

const setInGameBackground = () => {
  document.getElementById('html')?.classList.remove('booting-screen');
  document.getElementById('html')?.classList.add('in-game-screen');
}

export {
  setBootingBackground,
  setInGameBackground
};
