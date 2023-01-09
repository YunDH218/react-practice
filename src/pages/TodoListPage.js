import PageTemplate from "../components/common/PageTemplate";
import styled from "styled-components";
import palette from "../lib/styles/palette";
import {CheckBoxOutlineBlankOutlined, CheckBoxOutlined, DeleteOutlined} from "@mui/icons-material";
import TodoItem from "../components/todo/TodoItem";
import {atom, useRecoilValue} from "recoil";
import {todoListState} from "../lib/states";
import TodoItemCreator from "../components/todo/TodoItemCreator";

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

const TodoListPage = () => {
    const todoList = useRecoilValue(todoListState);
    return (
        <PageTemplate type="todo">
            <TodoItemCreator />
            { todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem}/>
            ))}
        </PageTemplate>
    )
};

export default TodoListPage;