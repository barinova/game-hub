import { FaMeh, FaThumbsUp } from 'react-icons/fa';
import { BsEmojiGrinFill } from 'react-icons/bs';
import { Box } from '@chakra-ui/react';

type Props = {
  rating: number;
};
export const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: React.ReactElement } = {
    3: <FaThumbsUp color="orange" size={18} />,
    4: <FaMeh color="orange" size={18} />,
    5: <BsEmojiGrinFill color="orange" size={18} />,
  };
  return <Box paddingTop={2}>{emojiMap[rating]}</Box>;
};
