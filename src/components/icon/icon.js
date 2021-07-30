import { Designed } from "./designed";
import { Listen } from "./listen";
import { Powered } from "./powered";
import { Twitter } from "./twitter";
import { Youtube } from "./youtube";

const Icon = (props) => {
  const { name } = props;
  switch (name.toLowerCase()) {
    case 'designed':
      return <Designed {...props} />;
    case 'listen':
      return <Listen {...props} />;
    case 'powered':
      return <Powered {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'youtube':
      return <Youtube {...props} />;
    default:
      return <div />
  }
}

export { Icon }
