import { ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";
import { Card, HStack, Text, Stack, Link, Badge } from "@chakra-ui/react";

interface BookmarkProps {
  text: string;
  link?: string;
  tag?: string;
}

export const Bookmark: React.FC<BookmarkProps> = ({ text, link, tag }) => {
  return (
    <Card variant="elevated">
      {link || tag ? (
        <Stack direction="column" spacing={5} p={8} alignItems="flex-end">
          <StarIcon />
          <Stack dir="row" justifyContent="space-between" width="100%">
            <Stack direction="column" alignItems="flex-start" spacing={4}>
              <Text>{text}</Text>
              {tag && (
                <Badge variant="subtle" colorScheme="red">
                  {tag}
                </Badge>
              )}
            </Stack>
          </Stack>
          {link && (
            <Link href={link} display="flex" alignItems="center">
              <Text pr={4} textDecoration="underline">
                View details
              </Text>
              <ArrowForwardIcon />
            </Link>
          )}
        </Stack>
      ) : (
        <HStack spacing={5} p={8}>
          <StarIcon />
          <Text>{text}</Text>
        </HStack>
      )}
    </Card>
  );
};
