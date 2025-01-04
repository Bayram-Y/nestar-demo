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
import TopPropertyCard from "@/libs/components/homepage/TopPropertyCard";
import PropertyCard from "@/libs/components/property/PropertyCard";

const PropertyList: NextPage = () => {
  const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
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
              {properties.map((property, index) => {
                return <PropertyCard key={index} />;
              })}
            </Stack>
            <Stack className={"pagination-config"}>
              <Stack className={"pagination-box"}>
                <Pagination count={5} color="primary" />
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
