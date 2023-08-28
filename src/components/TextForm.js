import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }

    const handleLoClick = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");
    }

    const handleInverseClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Converted to Inverse Case!", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard!", "success");
    }

    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText('new text');
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={{backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8">
                </textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled = {text.length===0} onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1 my-1" disabled = {text.length===0} onClick={handleLoClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1 my-1" disabled = {text.length===0} onClick={handleInverseClick}>Convert to Inverse</button>
            <button className="btn btn-primary mx-1 my-1" disabled = {text.length===0} onClick={handleCopyClick}>Copy Text</button> 
            <button className="btn btn-primary mx-1 my-1" disabled = {text.length===0} onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" disabled = {text.length===0} onClick={handleClearClick}>Clear Text</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0;}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
