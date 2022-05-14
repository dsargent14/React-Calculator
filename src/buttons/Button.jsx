import "./buttons.css"

const Button =({value,onClick,className}) =>{
  return (
    <div 
    className={className} onClick= {onClick}>
    {value}
    
    </div>
  )
}

export default Button