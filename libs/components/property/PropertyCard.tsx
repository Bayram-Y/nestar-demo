import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

const PropertyCard = () => {
  return (
    <Stack className={"card-config"}>
      <Stack className={"top"}>
        <Link href="/property/detail">
          <img src="/img/apartmentMain.png" alt="" />
        </Link>
        <Box className={"top-badge"}>
          <img src="/img/icons/electricity.svg" alt="" />
          <Typography>TOP</Typography>
        </Box>
        <Box className={"price-box"}>
          <Typography>$ 2,222</Typography>
        </Box>
      </Stack>
      <Stack className={"bottom"}>
        <Stack className={"name-address"}>
          <Stack className={"name"}>
            <Link href={"/property/detail"}>
              <Typography>Gangnam Luxury Villa</Typography>
            </Link>
          </Stack>
          <Stack className={"address"}>
            <Typography>Gangnam Yeoksam-dong 121, SEOUL</Typography>
          </Stack>
        </Stack>
        <Stack className={"options"}>
          <div className={"option"}>
            <img src="/img/icons/bed.svg" alt="" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>250 m2</span>
          </div>
        </Stack>
        <Divider className={"divider"} />
        <Stack className={"type-buttons"}>
          <Stack className={"type"}>
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Rent
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Barter
            </Typography>
          </Stack>
          <Stack className={"buttons"}>
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className={"view-cnt"}>120</Typography>
            <IconButton color={"default"}>
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <Typography className={"view-cnt"}>200</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PropertyCard;
