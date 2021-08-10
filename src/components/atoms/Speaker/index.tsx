import { SpeakerText } from "./styles";

interface SpeakerProps {
  children: string;
}

export const Speaker = ({ children }: SpeakerProps): JSX.Element => {
  return <SpeakerText>{`- ${children}`}</SpeakerText>;
};
