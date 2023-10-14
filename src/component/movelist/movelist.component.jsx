const MoveList = ({ history, jumpTo }) => {
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        {move === history.length - 1 ? (
          <div>You are at move #{move}</div>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  return <ol>{moves}</ol>;
};

export default MoveList;
