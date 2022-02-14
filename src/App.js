
import './App.css';

function App() {
  return (
    <div className="App">
      let links = document.querySelectorAll('#primary a:nth-child(odd)')
console.log(links)
links.forEach(function(linkodd) {
    linkodd.style.backgroundColor="red";
    linkodd.style.color="#ffffff"
    }
    </div>
  );
}

export default App;
