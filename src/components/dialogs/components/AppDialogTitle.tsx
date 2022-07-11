import { DialogTitle, Theme, DialogTitleProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { AppIconButton } from '../../';
import { dialogStyles } from '../../../utils/style';
import { FunctionComponent, PropsWithChildren } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleContainer: {
      display: 'flex',
      maxWidth: `calc(100% - ${theme.spacing(4)})`,
    },
    title: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    xButton: dialogStyles(theme).xButton,
  })
);

interface Props extends PropsWithChildren<DialogTitleProps> {
  onClose?: (event: {}) => void;
}

/**
 * Renders Material UI Dialog Title with optional (x) button to close the dialog
 * @param {function} [onClose] - when set the (x) button added to Dialog Title and event called on button click
 */
const AppDialogTitle: FunctionComponent<Props> = ({ children, onClose, ...props }) => {
  const classes = useStyles();
  return (
    <DialogTitle {...props}>
      <div className={classes.titleContainer}>
        <span className={classes.title}>{children}</span>
      </div>
      {Boolean(onClose) ? (
        <AppIconButton
          className={classes.xButton}
          size="large"
          icon="close"
          title="Close"
          aria-label="close"
          onClick={onClose}
        />
      ) : null}
    </DialogTitle>
  );
};

export default AppDialogTitle;
