import React, { useState } from "react";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import Filter from "@/libs/components/property/Filter";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PropertyList: NextPage = () => {
  const [topProperties, setTopProperties] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);
  return (
    <div id={"property-list-page"} style={{ position: "relative" }}>
      <Stack className={"container"}>
        <Box className={"right"}>
          <span>Sort by</span>
          <div>
            <Button endIcon={<KeyboardArrowDownRoundedIcon />}>New</Button>
          </div>
        </Box>
        <Stack className={"property-page"}>
          <Stack className={"filter-config"}>
            <Filter />
          </Stack>
          <Stack className={"main-config"} mb={"76px"}>
            <Stack className={"list-config"}>
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
                      <Typography>Rent</Typography>
                      <Typography>Barter</Typography>
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
                      <Typography>Rent</Typography>
                      <Typography>Barter</Typography>
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
                      <Typography>Rent</Typography>
                      <Typography>Barter</Typography>
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
                      <Typography>Rent</Typography>
                      <Typography>Barter</Typography>
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
                      <Typography>Rent</Typography>
                      <Typography>Barter</Typography>
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
              <Stack className={"card-config"}>
                <Stack className={"top"}>
                  <Link href="/property/detail">
                    <img src="/img/fiber/img1.jpg" alt="" />
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
                      <Typography>Rent</Typography>
                      <Typography>Barter</Typography>
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
              <Stack className={"card-config"}>
                <Stack className={"top"}>
                  <Link href="/property/detail">
                    <img src="/img/fiber/img1.jpg" alt="" />
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
                      <Typography>Rent</Typography>
                      <Typography>Barter</Typography>
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
            </Stack>
            <Stack className={"pagination-config"}>
              <Stack className={"pagination-box"}>
                <Pagination count={1} color="primary" />
              </Stack>
              <Stack className={"total-result"}>
                <Typography>Total 7 properties available</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
