import { useState } from "react"

// export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        // console.log(target.value);
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);

        if(inputValue.trim().length <= 1) return;

        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue);

        setInputValue('');
    };

    return (
            <form onSubmit={(event) => onSubmit(event)}>
                <input type="text" name="" id="" 
                value={inputValue} placeholder="Buscar Gifs"
                // onChange={(event) => onInputChange(event)} />
                onChange={onInputChange} />
            </form>
        )
}
