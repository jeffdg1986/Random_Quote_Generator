

$(document).ready(function(){
  marked.setOptions({
  renderer: new marked.Renderer(),
  // highlight: function(code, lang) {
  //   const hljs = require('highlight.js');
  //   const language = hljs.getLanguage(lang) ? lang : 'plaintext';
  //   return hljs.highlight(code, { language }).value;
  //},
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});
  let inputText = `# Checking out markdown language...

## Here you will find a cool function showing the point of Life.
### Plus something almost as cool...
#### Can you guess?

##### POLYMERS...**duh!**

###### Follow the directions below...

Note this code block to the right... \`<section></section>\`.

\`\`\`
// Follow this in-line code to find the pointgOfLife:

function pointOfLife(money, health, career) {
  return love
  }
\`\`\`

Click on this [link](https://www.polymerdatabase.com/main.html) for an encyclopedia of polymer physics and chemistry!
> This blockquote will help with the transition to polymers...
###### Did it work?

### Types of Polymers
1. Thermoplastics
2. Thermosets
3. Elastomers

![Material Informatics](https://scx1.b-cdn.net/csz/news/800a/2017/blockcopolym.jpg)
`
;

$("#editor").val(inputText);
document.getElementById("preview").innerHTML =
  marked.parse(inputText);


  $("#editor").keyup(function(){
    let add = $(this).val();
    let addmarked = marked.parse(add);
    $("#preview").html(addmarked);
});


});
