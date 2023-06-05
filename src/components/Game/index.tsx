import { Unity, useUnityContext } from 'react-unity-webgl';
import { StyledGame } from './styled'

export const Game = () => {

  const url = "https://static.api.ebattle.lamia-edu.com/unity/arqs/";

  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: `${url}E-Battle BuildGL(JSON-API2).loader.js`,
    dataUrl: `${url}E-Battle BuildGL(JSON-API2).data.unityweb`,
    frameworkUrl: `${url}E-Battle BuildGL(JSON-API2).framework.js.unityweb`,
    codeUrl: `${url}E-Battle BuildGL(JSON-API2).wasm.unityweb`,
    webglContextAttributes: { preserveDrawingBuffer: true },
  });
  function HandlerClick() {
    sendMessage("Canvas", "SetIdMatche", "86");
  }
  HandlerClick();
  return (
    <StyledGame>
      <Unity className="game" unityProvider={unityProvider} />
    </StyledGame>
  )
};
