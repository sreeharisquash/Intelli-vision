import './productivity.css'

export default function Productivity({ head, para, image , customClass}) {

  return (
    <>
      <div className={`productivity-container ${customClass}`}>
        <img src={image} alt="" />
        <div>
          <h2 className='mt-3'>{head}</h2>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
}
