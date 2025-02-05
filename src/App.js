import './App.css';

function App() {
  return (
   <div>
      <header>
        <div class="container">
            <h1>Sashank Singh</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section id="about" class="section">
        <div class="container">
            <h2>About Me</h2>
            <p>Hello! I'm a passionate web developer with a knack for creating beautiful and functional websites. I specialize in HTML, CSS, JavaScript, and React.</p>
        </div>
    </section>

    <section id="projects" class="section">
        <div class="container">
            <h2>My Projects</h2>
            <div class="project-cards">
                <div class="project-card">
                    <h3>Project 1</h3>
                    <p>A web app built using React.js.</p>
                </div>
                <div class="project-card">
                    <h3>Project 2</h3>
                    <p>A responsive portfolio website.</p>
                </div>
                <div class="project-card">
                    <h3>Project 3</h3>
                    <p>A to-do list app created with vanilla JavaScript.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="section">
        <div class="container">
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me for collaboration or inquiries!</p>
            <form action="#" method="POST">
                <input type="text" placeholder="Your Name" required></input>
                <input type="email" placeholder="Your Email" required></input>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        </div>
    </footer>
   </div>
  );
}

export default App;


// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <h1 className="text-primary">Hello, Bootstrap in React!</h1>
//         <button className="btn btn-success">Click Me</button>
//       </div>
//     </div>
//   );
// }

// export default App;




// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Main from "./Components/Main";

// function App(){
//   return(
//     <div>
//       <Header/>
//       <Main/>
//       <Footer/>
//     </div>
//   )
// }

// export default App;
