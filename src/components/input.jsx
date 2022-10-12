import { Fragment } from "react";

const Input = ({label, type, labelClass, inputClass, labelId, inputId, placeholder, value, maxLength}) => {
    const input = ['tel', 'text', 'email', 'password', 'number'];
   return(
    <Fragment>
        <label className={`${labelClass} form-label fs-4`} id={labelId}>{label}</label>
        {input.indexOf(type) !== -1 && (
            <input className={`${inputClass} form-control heighttext input-bg fs-4 btn-radius`} id={inputId}
             placeholder={placeholder} value={value} type={type} maxLength={maxLength}/>
        )}
        {type === 'textarea' && (
            <textarea placeholder={placeholder} value={value} className={`${inputClass} form-control input-bg area-height`}></textarea>
        )}
    </Fragment>
   );
};

export default Input;