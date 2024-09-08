import Image from "./Image";

export default function Card({children, imageUrl}) {
  let image = '';

  if (imageUrl) {
    image = <Image src={imageUrl} alt='image'/>
  }

  return (
    <div className="card">
      {image}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}