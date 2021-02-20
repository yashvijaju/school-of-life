import Link from 'next/link'
import { Typography, makeStyles } from '@material-ui/core'

const red = '#EE3A20';
const black = '#000000';

const useStyles = makeStyles({
    
    container: {
        width: 'auto',
        backgroundColor: 'white',
        margin: '0rem 0rem 0 0rem',
        textDecoration: 'none',
        
    },
    hover_link: {
      color: black,
      '&:hover': {
        color: red,
      }
    }
});
  

export default function Breadcrumbs(props) {
    const styles = useStyles();

  return (
    <div className={styles.container}>
      <span>
      <Link href={props.href}>
        <Typography className={styles.hover_link} variant="body2" style={{float: 'left', cursor: 'pointer'}}>{props.children}</Typography>
      </Link>
      <Typography style={{float: 'left', margin: '0 1rem 0 1rem'}}>></Typography>
      </span>
    </div>
  )
}