import { useCallback } from 'react'
import Image from 'next/image'
import Rectangle from '../Map/Legend/Rectangle'
import VisaRequired from '../../components/Rank/VisaRequired'
import EVisa from '../../components/Rank/EVisa'
import VisaOnArrival from '../../components/Rank/VisaOnArrival'
import VisaOnArrivalEvisa from '../../components/Rank/VisaOnArrivalEvisa'
import VisaFree from '../../components/Rank/VisaFree'

interface Props {
  data:any;
  image:any;
  text:string;
}

const IndividualPassport:React.FC<Props> = ({ data, image, text }) => {

  const widthCalculation = useCallback((visaPolicy:string, data:any) => {
    switch(visaPolicy) {
      case 'visaRequired':
        return 315
      case 'eVisa':
        if(data?.[2] < 13) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3) + (data?.[4] * 1.3) + 6}
        return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3) + (data?.[4] * 1.3)
      case 'visaOnArrival':
        if(data?.[2] < 13) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3) + 6}
        return (data?.[1] * 1.3) + (data?.[2] * 1.3) + (data?.[3] * 1.3)
      case 'visaOnArrivalEvisa':
        if(data?.[2] == 0) {return 0}
        if(data?.[2] < 7) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + 2}
        if(data?.[2] < 13) {return (data?.[1] * 1.3) + (data?.[2] * 1.3) + 6}
        return (data?.[1] * 1.3) + (data?.[2] * 1.3)
      case 'visaFree':
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
    <table>
      <style jsx>{`
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
        }
        .imageDiv {
          margin-right: 10px;
        }
        .textSection {
          color: rgb(255, 255, 255);
          font-size: 18px;
          max-width: 300px;
        }
        .progressBarsContainer {
          width: 290px;
        }
        .progressBarDesktop {
          margin: 0px;
          margin-bottom: 10px;
          width: 300px;
          height: 20px;
          position: relative;
          text-align: left;
          float: left;
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
      <tbody>
        <tr>
          <td colSpan={2}>
            <div className={'container'}>
              <div className={'imageDiv'}>
                <Image
                  src={image}
                  alt={'image'}
                  width={100}
                  height={145}
                  layout={'intrinsic'}
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
                    <p className={'text'}>{'VoA/E-visa: ' + data?.[2]}</p>
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
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default IndividualPassport