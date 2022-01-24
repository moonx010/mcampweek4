import IngredientItem from './IngredientItem';
import './IngredientList.css';

export default function IngredientList({list, selectedList, setSelectedList}) {

    return(
        <div className="ingredientListBox">
            {list.map((item) => {
                return <IngredientItem item={item} selectedList={selectedList} setSelectedList={setSelectedList}/>
            })}
        </div>
    );
};