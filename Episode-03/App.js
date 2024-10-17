
    import React from "react";
    import ReactDOM from "react-dom/client";

  

const elem = <span> this span  react element</span>

    // const heading  =  (
    //     <h1  className="head">
           
    //         this react jsx element 
    //         {elem}
    //     </h1> // it  is an react element
    // );


    
  

    //React components

    //class based components

    //functional based components; 
    const HeadingComponent = () => (

        // it return jsx element;
         <h1>Namaste react functional components</h1>

    );


    var name = "srikanth"
    // functional component
   

    //this is javaScript function;

    // const fn = ()=>{ 
    //     return true;

    // };



    const Title  = () => (
      
        <h1  className="head">
            Namaste React using jsx-🎶
        </h1> // it  is an react element
    );



    const HeadingComponent2 = () => (

        

        <div id="container">
         <h1>{name}</h1>
         {/* {heading} */}
         {Title()}
         <Title></Title>
         <Title />
             <h1>
                 namaste react in the functional componemt
             </h1>
         </div>
     );

    const root =  ReactDOM.createRoot(document.getElementById("root"));

    root.render(<HeadingComponent2></HeadingComponent2>);
  
