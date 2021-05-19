import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    borderRadius:10
  },
gridList: {
    borderRadius:10,
    width: 500,
    height: 410,

    // width: "100%",
    // height: 650,
  },

}));

 
export default function ImageGridList({tileData}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList spacing={10} cellHeight={200} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}