import React, { useState, useEffect } from "react";

import { getTrendingGifs } from "../FetchApi/FetchGiphy";
import { Gif } from "../models/Gif";
import { GridGifImage, GridUserTheme, GridVerified } from "./GifGridStyle";

import {
  Grid,
  GridColumn,
  GridFilterChangeEvent,
  GridPageChangeEvent,
  GridSortChangeEvent,
} from "@progress/kendo-react-grid";
import {
  filterBy,
  CompositeFilterDescriptor,
  orderBy,
  SortDescriptor,
} from "@progress/kendo-data-query";
import { SvgIcon } from "@progress/kendo-react-common";
import * as svgIcons from "@progress/kendo-svg-icons";

import PropTypes from "prop-types";

interface PageState {
  skip: number;
  take: number;
}

const GifCell = ({ dataItem }) => {
  return (
    <GridGifImage>
      <img
        className="gif-image"
        src={dataItem.image_small}
        alt="photo123"
        height={120}
        width={120}
      />
    </GridGifImage>
  );
};
GifCell.propTypes = {
  dataItem: PropTypes.shape({
    image_small: PropTypes.string,
  }),
};

const UserCell = ({ dataItem }) => {
  return (
    <GridUserTheme>
      <div>
        <img src={dataItem.user_icon} alt="-" height={34} width={34} />
        <span>{dataItem.user_title}</span>
      </div>
    </GridUserTheme>
  );
};
UserCell.propTypes = {
  dataItem: PropTypes.shape({
    user_icon: PropTypes.string,
    user_title: PropTypes.string,
  }),
};

const VerifiedCell = ({ dataItem }) => {
  if (dataItem.user_verified)
    return (
      <GridVerified>
        <SvgIcon
          icon={svgIcons["checkCircleIcon"]}
          color="green"
          size="large"
        />
      </GridVerified>
    );
  else
    return (
      <GridVerified>
        <SvgIcon icon={svgIcons["xCircleIcon"]} color="grey" size="large" />
      </GridVerified>
    );
};
VerifiedCell.propTypes = {
  dataItem: PropTypes.shape({
    user_verified: PropTypes.bool,
  }),
};

const initialFilter: CompositeFilterDescriptor = {
  logic: "and",
  filters: [],
};
const initialDataState: PageState = { skip: 0, take: 10 };

const initialSort: Array<SortDescriptor> = [
  { field: "import_date", dir: "desc" },
];

function GifGrid() {
  const [gif_list, setGifList] = useState<Gif[]>([]);

  const [filter, setFilter] =
    useState<CompositeFilterDescriptor>(initialFilter);

  const [page, setPage] = React.useState<PageState>(initialDataState);

  const [sort, setSort] = React.useState(initialSort);

  const pageChange = (event: GridPageChangeEvent) => {
    const take = event.page.take;
    setPage({
      ...event.page,
      take,
    });
  };

  useEffect(() => {
    getTrendingGifs().then((data: Gif[]) => setGifList(data));
  }, []);

  return (
    <div>
      <Grid
        data={filterBy(orderBy(gif_list, sort), filter).slice(
          page.skip,
          page.take + page.skip
        )}
        pageable={{
          buttonCount: 4,
          pageSizeValue: 10,
        }}
        onPageChange={pageChange}
        skip={page.skip}
        take={page.take}
        total={filterBy(gif_list, filter).length}
        filterable={true}
        filter={filter}
        onFilterChange={(event: GridFilterChangeEvent) =>
          setFilter(event.filter)
        }
        sortable={true}
        sort={sort}
        onSortChange={(event: GridSortChangeEvent) => {
          setSort(event.sort);
        }}
        onRowClick={(event) => (window.location.href = event.dataItem.url)}
        style={{ height: "800px" }}
      >
        <GridColumn title="GIF">
          <GridColumn
            field="image_large"
            title="GIF"
            cell={GifCell}
            width={120}
            filterable={false}
            sortable={false}
          />
          <GridColumn field="title" title="Title" width={360} />
          <GridColumn
            field="import_date"
            title="Upload Date"
            filter="date"
            format="{0:dd/MM/yyyy}"
            width={200}
          />
        </GridColumn>

        <GridColumn title="User">
          <GridColumn
            field="user_title"
            title="User Title"
            cell={UserCell}
            width={300}
          />
          <GridColumn field="username" title="Username" width={200} />
          <GridColumn
            field="user_description"
            title="User Description"
            width={450}
            filterable={false}
            sortable={false}
          />
          <GridColumn
            field="user_verified"
            title="Verified"
            cell={VerifiedCell}
            width={200}
            filter="boolean"
          />
        </GridColumn>
      </Grid>
    </div>
  );
}

export default GifGrid;
