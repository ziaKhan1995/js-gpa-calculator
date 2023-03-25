// Get the div element by its ID
const rootVegetablesDiv = document.getElementById("rootVegetables");
//  Fetch the contents of roots.html
fetch("roots.html")
  .then((response) => response.text())
  .then((html) => {
    rootVegetablesDiv.style.height = "initial";
    // Insert the HTML content into the div
    rootVegetablesDiv.innerHTML = html;

    const currentHref = window.location.pathname; // Get the current URL
    console.log('val2='+currentHref); // Print the anchor
    const currentAnchor = currentHref.toString().lastIndexOf("/"); // Split the URL by '#' and get the second part
    var result = currentHref.toString().substring(currentAnchor+1).replace(".html","");
    result=result.split("#");
    console.log('val4=',result); // Print the anchor
    var activeAnchorId=getAnchorID(result[0]);
    document.getElementById(activeAnchorId).classList.add("active");
  });

  function getAnchorID(anchor){
    console.log('getAnchorID=',anchor); // Print the anchor
    var a=anchor.toString().toLocaleUpperCase();
    switch(a){
      case 'SIGNUP':
        return 'child2';
      case "INDEX":
        return "child1";
      default:
      return "";
    }
  }
//   function getURLData() {
//     console.log('pathname: ', window.location.pathname);// /account/search
//     // For reference:
//     console.log('host: ', window.location.host);//www.somedomain.com (includes port if there is one)
//     console.log('hostname: ', window.location.hostname);// www.somedomain.com
//     console.log('hash: ', window.location.hash);//#top
//     console.log('href: ', window.location.href);//http://www.somedomain.com/account/search?filter=a#top
//     console.log('port: ', window.location.port);// /(empty string)
//     console.log('protocol: ', window.location.protocol);// http:
//     console.log('search: ', window.location.search);// // ?filter=a  
// }
// this.getURLData();