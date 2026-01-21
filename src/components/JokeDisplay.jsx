// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="joke-container">
      <p>{joke}</p>
    </div>
  );
};

export default JokeDisplay;
