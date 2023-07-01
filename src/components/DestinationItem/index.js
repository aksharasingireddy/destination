// Write your code here
const DestinationItem = props => {
  const {DestinationItem} = props
  const {imgUrl, name} = DestinationItem

  return (
    <li className="destination-items-con">
      <img className="destination-item-img" src={imgUrl} alt={name} />
      <p className="destination-item-name">{name}</p>
    </li>
  )
}
export default DestinationItem
