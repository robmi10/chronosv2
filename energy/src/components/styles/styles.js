import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: "5%",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper2: {
    position: "absolute",
    top: 80,
    width: 490,
    height: "auto",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 10,
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: "20px 0",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    height: "650"
  },
  paymentroot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  newbox: {
    marginTop: 20,
    width: 600,
    height: 550,
    top: 200,
    marginBottom: 10,
  },
  box2: {
    marginTop: 20,
    width: 120,
    height: 180,
    top: 250,
    marginBottom: 10,
  },
}));
