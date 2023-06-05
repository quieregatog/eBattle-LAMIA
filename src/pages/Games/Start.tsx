import { PageStartStyled, SectionGame } from './styled';
import NavBar from '../../components/NavBar';
import { Game } from '../../components/Game';
import { BackPage } from '../../components/Label/BackPage';
import { Label } from '../../components/Label';
import { Link } from 'react-router-dom';

export const StartGame = () => {
    return (
      <PageStartStyled>
        <NavBar />
        <Link to='/games' className='link'>
          <BackPage name={"Games"} className='backPage'/>
        </Link>
        <div className='title'>
          <Label title="CC25E-22"/>
        </div>
        <SectionGame>
          <Game />
        </SectionGame>
      </PageStartStyled>
    )
  };
  