import React from 'react';
import classnames from 'classnames';

const TextField = ({
    id,
    name,
    placeholder,
    value,
    error,
    info,
    hide,
    onChange,
    type,
    disabled,
    checked
}) => {

    let inputContent;
    if (disabled) {
        inputContent =
            <input
                id={id}
                name={name}
                type={type}
                className={classnames('form-control',
                    {
                        'is-invalid': error
                    })}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                checked={checked}
                disabled
                autofocus="autofocus" />
    } else {
        inputContent =
            <input
                id={id}
                name={name}
                type={type}
                className={classnames('form-control',
                    {
                        'is-invalid': error
                    })}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                checked={checked}
                autoFocus="autoFocus" />
    }
    return (
        <div className="form-group">
            <div className="form-label-group">
                {inputContent}
                <label htmlFor={id}>{placeholder}</label>
                {error && <div className={classnames('invalid-feedback')}>{error}</div>}
            </div>
        </div>
    );
};

export default TextField;
