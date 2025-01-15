import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Chip from "@mui/material/Chip";

export function YearlySpencesForecastAmount() {
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
            <Typography sx={{ fontWeight: "light" }}>
              Yearly Forecast
            </Typography>
            <AttachMoneyOutlinedIcon sx={{ color: "text.secondary" }} />
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "semi-bold" }} variant="h5">
              {Number(1000000).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>
            <Typography sx={{ fontWeight: "light" }}>Year</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 1 }}>
            <Chip
              label={`-${Number(1000).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}`}
              variant="outlined"
              size="small"
              color="success"
            />
            <Typography sx={{ fontWeight: "light" }}>below budget</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
