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
      left: ${mousePos[0] + 'px'};
      top: ${mousePos[1] + 'px'};
    }`}</style>
      <p>X: {mousePos[0]} Y: {mousePos[1]}</p>
    </div>
  )
}

export default InfoBox