const Shimmer=()=>{
    return(
        <div className="restaurant-list">
            {Array(10)
            .fill("")
            .map((random,index)=>(
                <div key={index} className="shimmer-card"></div>
            ))}
        </div>
    )
}
export default Shimmer;