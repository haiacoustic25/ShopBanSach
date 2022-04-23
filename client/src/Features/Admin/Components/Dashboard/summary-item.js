import PropTypes from 'prop-types';
import { Avatar, Box, Card, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"
import R_arrow from '../../icons/r-arrow';

export const SummaryItem = (props) => {
  const { content, icon: Icon, label, ...other } = props;

  return (
    <Card
      sx={{ height: '100%' }}
      variant="outlined"
      {...other}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          p: 2
        }}
      >
        {Icon && (
          <Box
            sx={{
              display: 'flex',
              mr: 2
            }}
          >
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                height: 56,
                width: 56
              }}
            >
              <Icon sx={{ color: 'primary.contrastText' }} />
            </Avatar>
          </Box>
        )}
        <div>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            {label}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h6"
          >
            {content}
          </Typography>
        </div>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          ml: 2,
          mb: 1,
          cursor: 'pointer',
        }}
      >
        <Link to={`/dashboard/${label}`} style={{display: 'flex', textDecoration: 'none', color: 'blue', fontSize: 14, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            {label}
            <R_arrow style={{marginLeft: 2}}/>
        </Link>
      </Box>
    </Card>
  );
};

SummaryItem.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired
};
