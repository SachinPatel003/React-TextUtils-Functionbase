import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("")

    function UpCase() {
        setText(text.toUpperCase())
        props.showAlert("UpperCase Success" , "success")
    }

    function LoCase() {
        setText(text.toLowerCase())
        props.showAlert("LowerCase Success" , "success")
    }
    function clear1() {
        setText("")
        props.showAlert("All Cleared !!!" , "danger")
    }
    function Pascal() {
        setText(`${text}`
            .toLowerCase()
            .replace(new RegExp(/[-_]+/, 'g'), ' ')
            .replace(new RegExp(/[^\w\s]/, 'g'), '')
            .replace(
                new RegExp(/\s+(.)(\w*)/, 'g'),
                ($1, $2, $3) => ` ${$2.toUpperCase() + $3}`
            )
            .replace(new RegExp(/\w/), s => s.toUpperCase()))
            
        props.showAlert("PascalCase Success" , "success")
    }
    function copy() {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied !!!" , "success")
    }

    return (
        <div >
            <div className={`container col-8 text-${props.mode === "light" ? "dark" : "light"}`} >
                <h1 className="mt-5 pt-4">Enter Your Text Here</h1>
                <textarea value={text} onChange={(e) => setText(e.target.value)} className={`my-3 form-control text-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "dark" ? "dark" : "light"}`} id="exampleFormControlTextarea1" rows="6"></textarea>
                <button disabled={text==0} type="button" onClick={UpCase} className="mx-1 btn btn-primary my-3">Upper Case</button>
                <button disabled={text==0} type="button" onClick={LoCase} className="mx-1 btn btn-primary my-3">Lower Case</button>
                <button disabled={text==0} type="button" onClick={clear1} className="mx-1 btn btn-primary my-3">Clear All</button>
                <button disabled={text==0} type="button" onClick={Pascal} className="mx-1 btn btn-primary my-3">Pascal Case</button>
                <button disabled={text==0} type="button" onClick={copy} className="mx-1 btn btn-primary my-3">Copy Text</button>
                <div>{text.length} cheractors  {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Words</div>
                <div>{(text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length * 0.017).toFixed(2)} Minutes Requered for Read</div>
                <h3>Preview</h3>
                <div>{text.length > 0 ? <h5>{text}</h5> : <h3 className='text-center'>Please input text in Above Box</h3>}</div>
            </div>
        </div>
    )
}
