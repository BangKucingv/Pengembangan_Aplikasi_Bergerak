// Class Component Counter
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    // Fungsi tambah
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // Fungsi kurang (tidak boleh < 0)
    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <h3>Counter</h3>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.increment}>+1</button>
            </div>
        );
    }
}

// Render ke root
ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
