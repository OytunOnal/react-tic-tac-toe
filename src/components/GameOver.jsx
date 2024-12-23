export default function GameOver({ winnerName, OnRestart }) {
  return (
    <div id="game-over">
      <h2> Game Over</h2>
      {winnerName && <p> {winnerName} won! </p>}
      {!winnerName && <p> It is a draw! </p>}
      <p>
        <button onClick={OnRestart}> Rematch! </button>
      </p>
    </div>
  );
}
