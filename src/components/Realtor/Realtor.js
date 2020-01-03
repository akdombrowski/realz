import React, { Component } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import ky from "ky-universal";

class Realtor extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Me", data: {} };
    this.getNames = this.getNames.bind(this);
    this.getPhones = this.getPhones.bind(this);
    this.getAddresses = this.getAddresses.bind(this);
    this.getGroups = this.getGroups.bind(this);
    this.getWebsites = this.getWebsites.bind(this);
    this.getNumbers = this.getNumbers.bind(this);
    this.getImgs = this.getImgs.bind(this);
  }

  componentDidMount() {
    const response = async () => {
      const res = await ky
        .get(
          "https://wrapapi.com/use/akdombrowski/realtormatchmaking/austin_tx/latest?wrapAPIKey=JFp5Ky3rzhCVKDcJDOV7HvcthQqB5vj8"
        )
        .json();
      //   console.log(res.data);
      await this.setState({ data: res.data });
    };
    response();
  }

  getNames() {
    if (this.state.data.name) {
      return this.state.data.name.map((datum, i) => {
          return (
            <Grid
              item
              xs="12"
              height="5vh"
              maxHeight="5vh"
              style={{ height: "5%", maxHeight: "5%" }}
            >
              <p key={datum}>{datum}</p>
            </Grid>
          );
      });
    }
  }

  getPhones() {
    if (this.state.data.phone) {
      return this.state.data.phone.map((datum, i) => {
          return (
            <Grid
              item
              xs="12"
              height="5vh"
              maxHeight="5vh"
              style={{ height: "5%", maxHeight: "5%" }}
            >
              <p key={datum}>{datum}</p>
            </Grid>
          );
      });
    }
  }

  getImgs() {
    if (this.state.data.img) {
      return this.state.data.img.map((datum, i) => {
        if (i % 2 > 0) {
            return (
              <Grid
                item
                xs="12"
                height="5vh"
                maxHeight="5vh"
                style={{ height: "5%", maxHeight: "5%" }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    key={i}
                    image={datum}
                    title="agent-photo"
                  ></CardMedia>
                </Card>
              </Grid>
            );
        }
      });
    }
  }

  getAddresses() {
    if (this.state.data.address) {
      return this.state.data.address.map((datum, i) => {
        return (
          <Grid
            item
            xs="12"
            height="5vh"
            maxHeight="5vh"
            style={{ height: "5%", maxHeight: "5%" }}
          >
            <p key={i}>{datum}</p>
          </Grid>
        );
      });
    }
  }

  getGroups() {
    if (this.state.data.group) {
      return this.state.data.group.map((datum, i) => {
        return (
          <Grid
            item
            xs="12"
            height="5vh"
            maxHeight="5vh"
            style={{ height: "5%", maxHeight: "5%" }}
          >
            <p key={i}>{datum}</p>
          </Grid>
        );
      });
    }
  }

  getWebsites() {
    if (this.state.data.website) {
      return this.state.data.website.map((datum, i) => {
        return (
          <Grid
            item
            xs="12"
            height="5vh"
            maxHeight="5vh"
            style={{ height: "5%", maxHeight: "5%" }}
          >
            <p key={datum}>{datum}</p>
          </Grid>
        );
      });
    }
  }

  getNumbers() {
    if (this.state.data.number) {
      return this.state.data.number.map((datum, i) => {
        return (
          <Grid
            item
            xs="12"
            height="5vh"
            maxHeight="5vh"
            style={{ height: "5%", maxHeight: "5%" }}
          >
            <p key={datum}>{datum}</p>
          </Grid>
        );
      });
    }
  }

  render() {
    return (
      <Container>
        <Grid container wrap="nowrap">
          {console.log(this.state.data.img)}

          <Grid
            item
            container
            height="100vh"
            maxHeight="100vh"
            justify="space-between"
          >
            {this.getImgs()}
          </Grid>
          <Grid
            item
            container
            height="100vh"
            maxHeight="100vh"
            justify="space-between"
          >
            {this.getNames()}
          </Grid>
          <Grid
            item
            container
            height="100vh"
            maxHeight="100vh"
            justify="space-between"
          >
            {this.getPhones()}
          </Grid>
          <Grid
            item
            container
            height="100vh"
            maxHeight="100vh"
            justify="space-between"
          >
            {this.getAddresses()}
          </Grid>
          <Grid
            item
            container
            height="100vh"
            maxHeight="100vh"
            justify="space-between"
          >
            {this.getGroups()}
          </Grid>
          <Grid
            item
            container
            // style={{
            //   height: "100vh",
            //   maxHeight: "100vh"
            // }}
            justify="space-between"
            alignItems="center"
          >
            {this.getWebsites()}
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default Realtor;
