
    import React from "react";
    import logo from "./icon.png";
    import ReactDOM from "react-dom/client";
    import icon from "./profile.png"
  

// const elem = <span> this span  react element</span>

    // const heading  =  (
    //     <h1  className="head">
           
    //         this react jsx element 
    //         {elem}
    //     </h1> // it  is an react element
    // );


    
  

    //React components

    //class based components

    //functional based components; 
//     const HeadingComponent = () => (

        // it return jsx element;
//          <h1>Namaste react functional components</h1>

//     );


//     var name = "srikanth"
    // functional component
   

    //this is javaScript function;

    // const fn = ()=>{ 
    //     return true;

    // };



//     const Title  = () => (
      
//         <h1  className="head">
//             Namaste React using jsx-🎶
//         </h1> // it  is an react element
//     );



//     const HeadingComponent2 = () => (

        

//         <div id="container">
//          <h1>{name}</h1>
//          {/* {heading} */}
//          {Title()}
//          <Title></Title>
//          <Title />
//              <h1>
//                  namaste react in the functional componemt
//              </h1>
//          </div>
//      );

//     const root =  ReactDOM.createRoot(document.getElementById("root"));

//     root.render(<HeadingComponent2></HeadingComponent2>);
  


// const heading = (

//     <div className="title">

//         <h1>this thota srikant</h1>
//         <h2>this is react</h2>
//         <h3>this is is jsx</h3>
//     </div>
// );


// const HeadingComponent = () =>(

//    <div className="parent">
//     {heading}
//    </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);



// - Create a `Header Component` from scratch using `Functional Component` with JSX
//   - Add a `Logo on Left`
//   - Add a `search bar in middle`
//   - Add `User icon on right`
//   - Add `CSS to make it look nice`

const Header = () =>{

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="image not avaliable" />

            </div>
            <div className="search-bar">
                <input type="text" placeholder="search" />
            </div>
            <div className="user-icon">
            <img src={icon} alt="image not avaliable" />
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>)