import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import p1 from "../../../assets/p1.jpeg"
import p2 from "../../../assets/p2.jpeg"
import l1 from "../../../assets/l1.jpeg"
import l2 from "../../../assets/l2.jpeg"
const tileData = [
    {
      img: l1,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
        img: p2,
        title: 'Image',
        author: 'author',
        cols: 1,
      },
    {
        img: l2,
        title: 'Image',
        author: 'author',
        cols: 2,
      },
      {
        img: p1,
        title: 'Image',
        author: 'author',
        cols: 1,
      },
      
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    borderRadius:10
  },
  gridList: {
    borderRadius:10

    // width: "100%",
    // height: 650,
  },

}));

 
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}