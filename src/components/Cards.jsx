import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Cards({fa,color,TXT,img,imgSize,skill}){
  let Iproperty= `fa-brands ${fa}  font-bold  text-5xl  ${color}`
  return (
    <div className='hover:scale-95 active:scale-95 duration-300 '>
      <Card  sx={{ maxWidth: 345,backgroundColor:"rgb(18, 24, 31)", }}>
      <CardActionArea >
       
        <CardContent>
          <Typography className='text-center ' gutterBottom variant="h5" component="div" style={TXT&&{fontSize:"2.1rem",fontWeight:"bolder",fontFamily:"inherit"}} >
           {img?<img className='mx-auto ' style={{ width:imgSize,borderRadius:"5px"}} src={img} />:TXT?TXT:<i className={Iproperty}></i>}
            
          </Typography>
          <Typography className='text-center text-dark' variant="body2" sx={{ color: 'white',fontSize:"1.2rem",fontWeight:"bold" }}>
            {skill}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}
