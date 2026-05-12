import { useParams } from "react-router-dom"

const DetailPage = () => {
  const params = useParams()
  console.log(params);
  
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage