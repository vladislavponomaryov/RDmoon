import {useActions} from "../../../hooks/useActions";
import './style.module.scss'

export const ControlForm = () => {
    const {addElement, removeElement} = useActions()
    return <form>
        <input type="button" value='Добавить' onClick={() => {
            addElement()
        }}/>
        <input type="button" value='Удалить' onClick={() => {
            removeElement()
        }}/>
    </form>
}