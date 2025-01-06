import React, { useState } from "react";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import Filter from "@/libs/components/property/Filter";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import PropertyCard from "@/libs/components/property/PropertyCard";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const PropertyList: NextPage = () => {
  const device = useDeviceDetect();
  const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

  if (device === "mobile") {
    return <Stack> PROPERTY LIST MOBILE</Stack>;
  } else {
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
  }
};

export default withLayoutBasic(PropertyList);
