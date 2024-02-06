import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name , price, rate }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img className="w-[280px] h-[280px] cursor-pointer" src={imgURL} alt={name} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24}/>
        <p className="font-montserrat text-xl leading-normal text-slate-gray">({rate})</p>
      </div>
      <h3 className="mt-2 texrt-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-palanquin text-2xl leading-normal text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductCard