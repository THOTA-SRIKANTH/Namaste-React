
/**
 * 
 * 
 */


const parent = React.createElement("div" ,{id:'parent'} ,[
    React.createElement("div",{id:'child-1'} ,[
        React.createElement("h1" ,{} ,"I am chilld-1"),  React.createElement("h2" ,{} ,"I am chilld-2")
    ]
        )
,React.createElement("div",{id:'child-2'} ,[
    React.createElement("h1" ,{} ,"I am chilld-3"),  React.createElement("h2" ,{} ,"I am chilld-4")
]
    )]
    )


// const heading = React.createElement('h1' ,{id:"heading"}  ,"hellow world using React");




console.log(parent); //here heading is an object




//create root;

const root = ReactDOM.createRoot(document.getElementById("root"));

//inject that heading into root
root.render(parent)