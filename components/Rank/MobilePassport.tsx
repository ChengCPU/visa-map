import { useCallback } from 'react'
import Image from 'next/image'
import Rectangle from '../Map/Legend/Rectangle'
import VisaRequired from '../../components/Rank/VisaRequired'
import EVisa from '../../components/Rank/EVisa'
import VisaOnArrival from '../../components/Rank/VisaOnArrival'
import VisaOnArrivalEvisa from '../../components/Rank/VisaOnArrivalEvisa'
import VisaFree from '../../components/Rank/VisaFree'
import FreedomOfMovement from './FreedomOfMovement'
interface Props {
  data:any;
  image:any;
  text:string;
}

const MobilePassport:React.FC<Props> = ({ data, image, text }) => {

  const widthCalculation = useCallback((visaPolicy:string, data:any) => {
    switch(visaPolicy) {
      case 'visaRequired':
        return 333
      case 'eVisa':
        if(data?.[2] > 0 && data?.[2] < 13) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3) + (data?.[4] * 1.3) + 6}
        return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3) + (data?.[4] * 1.3)
      case 'visaOnArrival':
        if(data?.[2] > 0 && data?.[2] < 13) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3) + 6}
        return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3)
      case 'visaOnArrivalEvisa':
        if(data?.[2] == 0) {return 0}
        if(data?.[2] < 7) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + 2}
        if(data?.[2] < 13) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + 6}
        return (data?.[1] * 1.3) + (data?.[2] * 1.3)
      case 'visaFree':
        if(data?.[1] <= 14) {return data?.[1] * 1.3 + 6}
        return data?.[1] * 1.3
    }
  }, [])

  const marginCalculation = useCallback((visaPolicy:string, data:any) => {
    switch(visaPolicy) {
      case 'visaRequired':
        if(data?.[5] > 80) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3) + (data?.[4] * 1.3) + 9}
        return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3) + (data?.[4] * 1.3) + 2
      case 'eVisa':
        if(data?.[2] < 13) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3) + 6}
        return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3) + 2
      case 'visaOnArrival':
        if(data?.[2] < 13) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + 6}
        return (data?.[1] * 1.3) + (data?.[2] * 1.3) + 2
      case 'visaOnArrivalEvisa':
        return (data?.[1] * 1.3) + 1
    }
  }, [])

  return (
    <>
      <style jsx>{`
        .main {
          margin-left: 50px;
        }
        .rank {
          color: rgb(255, 255, 255);
          position: relative;
          box-sizing: border-box;
          font-size: 20px;
          font-family: proxima, sans-serif;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-left: 15px;
        }
        .imageDiv {
          margin-right: 20px;
        }
        .textSection {
          color: rgb(255, 255, 255);
          font-size: 18px;
          max-width: 300px;
        }
        .spacer {
          margin-top: 35px;
        }
        .progressBarsContainer {
          width: 350px;
        }
        .progressBarDesktop {
          margin: 0px;
          margin-bottom: 10px;
          width: 300px;
          height: 20px;
          position: relative;
          text-align: left;
          float: left;
          margin-left: 15px;
        }
        .freedomOfMovement {
          margin: 0px;
          margin-bottom: 10px;
          width: 328px;
          height: 20px;
          position: relative;
          text-align: left;
          float: left;
          margin-left: 15px;
        }
        .vertical {
          display: flex;
          flex-direction: column;
          margin-bottom: 12px;
        }
        .horizontal {
          display: flex;
          flex-direction: row;
          height: 20px;
        }
        .text {
          margin: 0px;
        }
      `}</style>
        <tr>
          <td colSpan={2}>
            <div className={'container'}>
              <div className={'imageDiv'}>
                <Image
                  src={image}
                  alt={'image'}
                  width={60}
                  height={90}
                />
              </div>
              <div className={'textSection'}>
                <p>{text}</p>
                <div className={'vertical'}>
                  <div className={'horizontal'}>
                    <Rectangle color={'rgb(50,205,50)'}/>
                    <p className={'text'}>{'Visa-free: ' + data?.[1]}</p>
                  </div>
                  <div className={'horizontal'}>
                    <Rectangle color={'rgb(161,224,123)'}/>
                    <p className={'text'}>{'Visa on arrival/E-visa: ' + data?.[2]}</p>
                  </div>
                  <div className={'horizontal'}>
                    <Rectangle color={'rgb(255,255,92)'}/>
                    <p className={'text'}>{'Visa on arrival: ' + data?.[3]}</p>
                  </div>
                  <div className={'horizontal'}>
                    <Rectangle color={'rgb(135,206,250)'}/>
                    <p className={'text'}>{'E-visa: ' + data?.[4]}</p>
                  </div>
                  <div className={'horizontal'}>
                    <Rectangle color={'rgb(150,150,150)'}/>
                    <p className={'text'}>{'Visa required: ' + data?.[5]}</p>
                  </div>
                  <div className={'horizontal'}>
                    <Rectangle color={'rgb(255,179,191)'}/>
                    <p className={'text'}>{'Freedom of movement: ' + data?.[7]}</p>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div className={'progressBarsContainer'}>
              <div className={'progressBarDesktop'}>
                <VisaRequired width={widthCalculation('visaRequired', data)} margin={marginCalculation('visaRequired', data)} count={data?.[5]} />
                <EVisa width={widthCalculation('eVisa', data)} margin={marginCalculation('eVisa', data)} count={data?.[4]} />
                <VisaOnArrival width={widthCalculation('visaOnArrival', data)} margin={marginCalculation('visaOnArrival', data)} count={data?.[3]} />
                <VisaOnArrivalEvisa width={widthCalculation('visaOnArrivalEvisa', data)} margin={marginCalculation('visaOnArrivalEvisa', data)} count={data?.[2]} />
                <VisaFree width={widthCalculation('visaFree', data)} count={data?.[1]} />
              </div>
            </div>
            <div className={'spacer'}></div>
            <div className={'freedomOfMovement'}>
              <FreedomOfMovement max={42.4} count={data?.[7]} />
            </div>
          </td>
        </tr>
      </>
  )
}

export default MobilePassport