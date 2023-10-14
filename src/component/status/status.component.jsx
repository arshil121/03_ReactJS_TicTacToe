function Status({ winner, xIsNext }) {
  let status;
  
  if (winner === -1) {
    status = "Draw"; // Display "Draw" when winner is -1
  } else if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  
  return <div className="status">{status}</div>;
}

export default Status;