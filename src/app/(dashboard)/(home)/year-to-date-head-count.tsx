import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import Chip from "@mui/material/Chip";

export function YearToDateHeadCount() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "light" }}>People</Typography>
            <EmojiPeopleOutlinedIcon sx={{ color: "text.secondary" }} />
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "semi-bold" }} variant="h5">
              {Number(300)}
            </Typography>
            <Typography sx={{ fontWeight: "light" }}>Year</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 1 }}>
            <Chip
              label={Number(5)}
              variant="outlined"
              size="small"
              color="success"
            />
            <Typography sx={{ fontWeight: "light" }}>
              Vague positions
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
