import { useState } from 'react';

type TFormFieldsState = {
    [key: string]: string | boolean | null | number[] | number | FileList;
};

export const useForms = (initialState: TFormFieldsState) => {
    const [fields, setFields] = useState<TFormFieldsState>(initialState);

    const handleChange = (e: any) => {
        if (e.target)
            setFields({
                ...fields,
                [e.target.name]:
                    e.target.name === 'price' ? e.target.valueAsNumber : e.target.value,
            });
        else setFields({ ...fields, [e.name]: e.value });
    };

    const handleSelect = (event: React.SyntheticEvent<Element, Event>, value: any) => {
        const obj = { name: 'category', value: value.id };
        handleChange(obj);
    };

    const handleCheck = (e: any) => {
        setFields((prevState) => {
            if (e.target.name === 'isFree' && e.target.checked) {
                return {
                    ...prevState,
                    [e.target.name]: e.target.checked,
                    price: 0,
                };
            }
            return { ...prevState, [e.target.name]: e.target.checked };
        });
    };

    const handleFile = (
        name: string,
        value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const inputElement = value.target as HTMLInputElement;
        const files = inputElement.files;
        if (files !== null) {
            const obj = {
                name,
                value: files[0],
            };
            handleChange(obj);
        }
    };

    return { fields, handleChange, handleSelect, handleCheck, handleFile };
};
