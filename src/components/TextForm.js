import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked");
        setText("");
        props.showAlert("Text cleared successfully","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
        let txtLngth = event.target.value.split("");
        if(event.target.value && txtLngth.length > 0){
            txtLngth.lastIndexOf(" ") !== txtLngth.length-1 ? 
            setTextLength(event.target.value.split("").filter(ele => ele==" ").length+1) : 
            setTextLength(event.target.value.split("").filter(ele => ele==" ").length) ;
        }else{
            setTextLength(0);
        }
    }
    const [text, setText] = useState("");
    const [textLength, setTextLength] = useState(0);
    // setText("Romil"); // correct way to change state of text

    // const [switchStyleColor, setSwitchStyleColor] = useState({color:'white'});
    // const [switchStyleBgColor, setSwitchStyleBgColor] = useState({backgroundColor:'dark'});

  return (
    <>
    <div className='container' style={{
    color:props.mode==='dark'?'white':props.mode==='grey'?'blue':props.mode==='blue'?'grey':props.mode==='orange'?'dark':'#042743'
  }}>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" value={text} style={{
    backgroundColor:props.mode==='dark'?'grey':'white',
    color:props.mode==='dark'?'white':props.mode==='grey'?'blue':props.mode==='blue'?'grey':props.mode==='orange'?'dark':'#042743'
  }} onChange={handleOnChange} rows="8"></textarea>
</div>
  <button className={`btn btn-${props.mode==='dark'?'primary':props.mode==='grey'?'primary':props.mode==='blue'?'secondary':props.mode==='orange'?'info':'success'} mx-2`} onClick={handleUpClick}>Convert To Uppercase</button>
  {/* <button className={`btn btn-${props.mode==='dark'?'primary':props.mode==='grey'?'primary':props.mode==='blue'?'secondary':props.mode==='orange'?'info':'success'} mx-2`} onClick={handleLoClick}>Convert To Lowercase</button> */}
  <button className={`btn btn-${props.mode==='dark'?'primary':props.mode==='grey'?'primary':props.mode==='blue'?'secondary':props.mode==='orange'?'info':'success'} mx-2`} onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='container my-3' style={{
    color:props.mode==='dark'?'white':props.mode==='grey'?'blue':props.mode==='blue'?'grey':props.mode==='orange'?'dark':'#042743'
}}>
        <h1>Your text summary</h1>
        <p>{textLength} words and {text.split("").filter(ele => ele !==" ").length} characters</p>
        <b>{0.008 * text.split(" ").length} Minutes read</b>
        <h2>Preview Here</h2>
        <p>{text.length >0 ? text : 'Enter text to preview here'}</p>
    </div>
    </>
  )
}
