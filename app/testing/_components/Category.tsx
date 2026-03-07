

 export const CategoryComponent = (props:{
    element:string,
    setSelectedCategory:React.Dispatch<React.SetStateAction<string>>
 }) => {
  return <div onClick={()=>{
    props.setSelectedCategory(props.element)
  }} >{props.element}</div>;
}

export default CategoryComponent;