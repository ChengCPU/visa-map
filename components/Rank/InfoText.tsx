interface Props {
  count:any;
}

const InfoText:React.FC<Props> = ({count}) => {
  return (
    <div className={'container'}><style jsx>{`
      .container {
        position: relative;
        width: 500px; /* Set a width for the container */
        height: 50px; /* Set a height for the container */
        user-select: none;
      }
      .box {
        display:flex;
        align-items:center;
        justify-content:left;
        border-radius: 8px;
        border-color: black;
        border-style: solid;
        border-width: 2px;
        position: absolute;
        bottom: 30px;
        left: -44px;
        width: 570px;
        height: 40px;
        margin: 10px;
        background-color: rgb(50,205,50);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.25s;
      }
      .content {
        position: relative;
        padding: 15px;
      }
      .content:hover .box {
        opacity: 1; /* Make the box visible on hover */
      }
      `}</style>
      <div className={'content'}>
        <div className={'box'}> Visa-free: {count?.[1]}; VoA/E-visa: {count?.[2]}; Visa on Arrival: {count?.[3]}; E-visa: {count?.[4]}; Visa required: {count?.[5]};</div>
      </div>
    </div>
  );
};

export default InfoText