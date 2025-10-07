// Functional Component Counter
const Counter = () => {
    const [count, setCount] = React.useState(0);

    // Fungsi tambah
    const increment = () => setCount(count + 1);

    // Fungsi kurang (tidak boleh < 0)
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h2>Functional Component</h2>
            <h3>Counter</h3>
            <h1>{count}</h1>
            <button onClick={decrement}>-1</button>
            <button onClick={increment}>+1</button>
        </div>
    );
}

// Render ke root
ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
