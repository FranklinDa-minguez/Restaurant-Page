const Card = (props) => {

    return (
        <>
            <div className=" bg-white h-72 w-52 md:w-72 ">
                <div className=" flex bg-red-600 h-3/5 w-full align-top">
                    <img className=" w-full" src={props.image} alt="" />
                </div>
                <div className="flex flex-col">
                    <p className=" text-black mx-auto">{props.name}</p>
                    <p className=" text-black mx-auto">{props.origin}</p>
                    <a className = "bg-red-600 rounded my-3 w-1/3 mx-auto text-center" href={props.menu}>Menu</a>
                </div>
            </div>
        </>
    )
}

export default Card