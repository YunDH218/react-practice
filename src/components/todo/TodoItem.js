import styled from "styled-components";
import palette from "../../lib/styles/palette";
import {CheckBoxOutlineBlankOutlined, CheckBoxOutlined, DeleteOutlined} from "@mui/icons-material";
import {useRecoilState} from "recoil";
import {todoListState} from "../../lib/states";

const DeleteButton = styled(DeleteOutlined)`
  position: absolute;
  right: 4rem;
  color: ${palette.red[6]};
`;
const CheckBox = styled(CheckBoxOutlined)`
  color: ${palette.red[5]};
  margin-right: 1rem;
`;
const BlankBox = styled(CheckBoxOutlineBlankOutlined)`
  color: ${palette.red[5]};
  margin-right: 1rem;
`;
const TodoText = styled.span`
  color: ${palette.gray[7]};
  vertical-align: top;
  &.checked {
    text-decoration: line-through;
  }
`;

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const toggleItemChecked = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            checked: !item.checked,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        item.checked ?
            <div>
                <CheckBox onClick={toggleItemChecked} />
                <TodoText className="checked">{item.text}</TodoText>
                <DeleteButton onClick={deleteItem}/>
            </div> :
            <div>
                <BlankBox onClick={toggleItemChecked} />
                <TodoText>{item.text}</TodoText>
            </div>
    )
};

export default TodoItem;