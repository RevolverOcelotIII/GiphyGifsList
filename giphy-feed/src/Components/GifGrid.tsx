import React, { useState, useEffect } from "react";
import { getTrendingGifs } from "../FetchApi/FetchGiphy";
import { Gif } from "../models/Gif";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import PropTypes from "prop-types";
import { GridGifImage, GridUserTheme, GridVerified } from "./GifGridStyle";
import { IoMdCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";

const ImageCell = ({ dataItem }) => {
  console.log(dataItem);
  return (
    <GridGifImage>
      <img
        className="gif-image"
        src={dataItem.image_small}
        alt="photo123"
        height={100}
        width={100}
      />
    </GridGifImage>
  );
};
ImageCell.propTypes = {
  dataItem: PropTypes.shape({
    image_small: PropTypes.string,
  }),
};

const UserCell = ({ dataItem }) => {
  console.log(dataItem);
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
  console.log(dataItem);
  if (dataItem.user_verified)
    return (
      <GridVerified>
        <IoIosCheckmarkCircle color="green" />
      </GridVerified>
    );
  else
    return (
      <GridVerified>
        <IoMdCloseCircle />
      </GridVerified>
    );
};
VerifiedCell.propTypes = {
  dataItem: PropTypes.shape({
    user_verified: PropTypes.bool,
  }),
};

function GifGrid() {
  const [gif_list, setGifList] = useState<Gif[]>([]);
  useEffect(() => {
    getTrendingGifs().then((data: Gif[]) => setGifList(data));
    //console.log(process.env.REACT_APP_KENDO_UI_LICENSE);
  }, []);

  return (
    <div>
      <Grid
        data={process(gif_list, {}).data}
        total={process(gif_list, {}).total}
      >
        <GridColumn title="GIF">
          <GridColumn
            field="image_large"
            title="Imagem"
            cell={ImageCell}
            width={100}
          />
          <GridColumn field="title" title="Titulo" width={300} />
          <GridColumn
            field="import_date"
            title="Data de importação"
            width={300}
          />
        </GridColumn>

        <GridColumn title="User">
          <GridColumn
            field="user_title"
            title="Usuário"
            cell={UserCell}
            width={300}
          />
          <GridColumn field="username" title="Nome do Usuário" width={300} />
          <GridColumn
            field="user_description"
            title="Descrição do Usuário"
            width={300}
          />
          <GridColumn
            field="user_verified"
            title="Verificado"
            cell={VerifiedCell}
            width={300}
          />
        </GridColumn>
      </Grid>
    </div>
  );
}

export default GifGrid;
