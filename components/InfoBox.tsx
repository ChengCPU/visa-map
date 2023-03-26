import { Button, Stack, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import LanguageSelect from './LanguageSelect';
import styles from '../styles/Header.module.css';
interface Props {
  mousePos:any;
}

const InfoBox:React.FC<Props> = ({ mousePos }) => {

  return (
    <div className={'infoBox'}><style jsx>{`
    .infoBox {
      position: absolute;
      left: ${mousePos[0] + 5 + 'px'};
      top: ${mousePos[1] + 5 + 'px'};
    }`}</style>
      <table>
        <tbody>
          <tr>
            <td><p>X: {mousePos[0]} Y: {mousePos[1]}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default InfoBox