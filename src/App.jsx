import './App.css'
import Card from './Card'

const App = () => {

const info = [
  {name:"Zahav", origin:"Israeli", menu:"https://www.zahavrestaurant.com/index.html", image:"https://image.cnbcfm.com/api/v1/image/105900696-1557331495125zahav_credit_michaelpersico.jpg?v=1557331501&w=717&h=403&ffmt=webp&vtcrop=y"},
  {name:"Kin Khao", origin:"Thai", menu:"https://www.kinkhao.com/", image:"https://images.squarespace-cdn.com/content/v1/5f3da8a14ce3437904644ecf/1597884957961-7P43NSUCNPLMHP25UTDY/kin-khao-hero-09.jpg?format=2500w"},
  {name:"Guelaguetza", origin:"Oaxacan/Mexican", menu:"https://www.ilovemole.com/", image:"https://images.squarespace-cdn.com/content/568b10bd841aba419c386869/1541793647656-072ZDP9QIRUS6ZIEEUM4/Screen+Shot+2018-11-09+at+12.00.23+PM.png?content-type=image%2Fpng"},
  {name:"Sushi Nakazawa", origin:"Japanese", menu:"https://www.sushinakazawa.com/", image:"https://media.timeout.com/images/101435865/750/422/image.jpg"},
  {name:"Rasika", origin:"Indian", menu:"https://www.rasikarestaurant.com/", image:"https://www.washingtonpost.com/resizer/H9RUn7Nmx0qVx1m6th4LcOY-28k=/arc-anglerfish-washpost-prod-washpost/public/B5J44UTBYUI6LBDVPAOMTBIWKI"},
  {name:"The Halal Guys", origin:"Middle Eastern", menu:"https://thehalalguys.com/", image:"https://res.cloudinary.com/the-infatuation/image/upload/v1692122313/EmilyS_NYC_TheHalalGuys_002_obxijv.jpg"}
]

  return (
    <>
    <div className=' h-screen w-screen bg-cyan-200'>
      <img src="awning_image.png" alt="awning" />
      <div className=' flex flex-wrap justify-center gap-4 '>
        {info.map((x) => 
          <>
          <Card name={x.name} origin={x.origin} menu={x.menu} image={x.image}/>
          </>
          )
        }
      </div>

    </div>
    </>
  )
}

export default App
