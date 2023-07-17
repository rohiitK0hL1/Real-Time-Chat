import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="#38B2AC"
      textColor={"white"}
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      {/* {admin === user._id && <span> (Admin)</span>} */}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
