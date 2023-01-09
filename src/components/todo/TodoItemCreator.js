import {useSetRecoilState} from "recoil";
import {useState} from "react";
import {todoListState} from "../../lib/states";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const TodoInput = styled.input`
    width: 100%;
    height: 2.8rem;
    background: ${palette.gray[2]};
    margin-bottom: 2rem;
    border: none;
    border-radius: .5rem;
    padding: .9rem 1rem;
    outline: none;
    font-size: 1rem;
`;

function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = (e) => {
        if (e.keyCode === 13) {
            setTodoList((oldTodoList) => [
                ...oldTodoList,
                {
                    id: getId(),
                    text: inputValue,
                    checked: false,
                },
            ]);
            setInputValue('');
        }
    };

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    };

    return (
        <TodoInput
            value={inputValue}
            onChange={onChange}
            onKeyDown={addItem}
            placeholder="Todo 내용을 입력해주세요."
        />
    );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
    return id++;
}

export default TodoItemCreator;