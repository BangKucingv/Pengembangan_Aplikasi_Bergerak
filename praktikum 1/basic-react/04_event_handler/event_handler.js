// event_handler_class.js

// Membuat komponen MyButton menggunakan pendekatan Class Component
class MyButton extends React.Component {
    // Method (fungsi) untuk menangani event klik tombol
    handleButtonClick = () => {
        // Mengakses props yang dikirim dari parent component
        alert(this.props.message);
    }

    // Fungsi render() wajib ada pada Class Component untuk menghasilkan output
    render() {
        return (
            // Memanggil method handleButtonClick ketika tombol di klik
            <button onClick={this.handleButtonClick} style={{ margin: "10px" }}>
                {/* children adalah isi dari komponen saat dipanggil */}
                {this.props.children}
            </button>
        );
    }
}

// Membuat komponen utama MyApp menggunakan Class Component
class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Learn React (Class Component)</h1>

                {/* Memanggil MyButton dengan mengirim props message dan children */}
                <MyButton message="Learn React">React</MyButton>
                <MyButton message="Learn JavaScript">JavaScript</MyButton>
            </div>
        );
    }
}

// Membuat elemen React dari komponen MyApp
const myElement = <MyApp />;

// Merender elemen ke dalam <div id="root"> di file index.html
ReactDOM.createRoot(document.getElementById('root')).render(myElement);
