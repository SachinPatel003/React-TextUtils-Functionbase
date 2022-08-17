import React from 'react'

export const Alert = (props) => {
    const Pascal = (word) => {
        let newword = word.toLowerCase();
        let aa = newword[0].toUpperCase() + newword.slice(1);
        return aa;
    }
    return (
        // console.log(props)
        // props.alert=== undefined ? null : <div className={`alert alert-${props.alert.type}`} role="alert">
        //     {props.alert.msg}
        // </div>
        <div style={{height:"50px"}}>
           { props.alert && <div className={`w-100 alert alert-${props.alert.type}`} role="alert">
                {Pascal(props.alert.type)} : {props.alert.msg}
            </div>}
        </div>
    )
}
