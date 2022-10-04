function Click(){
// json file

const tree = document.getElementById('tree').value;


const trackValue = JSON.parse(tree);

const getVal = () => {
  for (let val in trackValue) {
    let arr = trackValue[val];

    const objProp = (obj) => {
      for (let val2 in obj) {
        if (typeof obj[val2] == "object") {
          console.log(val2, ": ");
          objProp(obj[val2]);
        } else {
          console.log(val2, ": ", obj[val2]);
        }
      }
    };
    //afficher les valeurs sur html
   
    objProp(arr);
    // afficher les valeurs de l'objet dans html
    // creat element
  



  }
};
getVal();
// afficher le resultat dans le html arbare






// json file

// fetch("../treeData.json")
//     .then((response) => response.json())
//     .then((data) => {
//         // console.log(data);
//         const objProp = (obj) => {
//             for (let val2 in obj) {
//               if (typeof obj[val2] == "object") {
                
//                   console.log("nested object inside : ", val2);
//                 objProp(obj[val2]);
//               } else {
//                 console.log(val2, ": ", obj[val2]);
//               }
//             }
//           };
//           objProp(data);
//     });

}
    
  
  

