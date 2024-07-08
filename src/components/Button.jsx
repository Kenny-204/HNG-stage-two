/* eslint-disable react/prop-types */
function Button({Label,bgColor = '#1F1FFF',color ="white"}){
return(
<button className="nav--button" style={{backgroundColor: bgColor,color: color }}>{Label}</button>
)
}
export default Button