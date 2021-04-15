import './App.css';
import Editor from './components/editor';
import Preview from './components/preview';
import React, {useState} from 'react';

function App() {
  const markdownText = `# Hello! Welcome to my page!

  ## ...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function fibonacci(endHere) {
    let numberOne = 0;
    let numberTwo = 1;
    let next;
    // Two first numbers
    console.log(0);
    console.log(1);
    next = numberOne + numberTwo;

    while(next <= endHere) {
      console.log(next) 
      numberOne = numberTwo;
      numberTwo = next;
      next = numberOne + numberTwo;
    }
  
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  Here is the link [links](https://github.com/tonikv), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![Logo](https://logos.keycdn.com/keycdn-icon-black.png)
  `

 
  const marked = require("marked");
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: true
  });

  const [markdown, setMarkdown] = useState(markdownText);

  const handleOnChange = event => {
      setMarkdown(event.target.value);
    }

  return (
    <div className="Container">
      <Editor render={markdown} handleChange={handleOnChange}/>
      <Preview render={marked(markdown)}/>
    </div>
  );
}

export default App;
