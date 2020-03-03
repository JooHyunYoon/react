import React, { Component } from "react";
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice'
// import ValidationSample from './ValidationSample'
// import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

// const App = () => {
  // return <MyComponent name="윤주현"/>;
  // return <MyComponent />;
  // return (
  //   <MyComponent name="React" favoriteNumber={1}>
  //     리액트
  //   </MyComponent>
  // );
  // return <Counter />;
  // return <Say />;
  // return <EventPractice />; 
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => this.scrollBox=ref}/>
//         <button onClick={() => this.scrollBox.ScrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <IterationSample />
    );
  }
}

export default App;
