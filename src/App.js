import Palette from "./Palette";
import { Component } from "react";
import seedColors from "./seedColors";
import { generatePalette } from "./colorsHelper";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SinglePalette from "./SinglePalette";
import NewPalette from "./NewPalette";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.state = { palettes: savedPalettes || seedColors };
  }
  findSeed(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  savePalette(palette) {
    this.setState(
      { palettes: [...this.state.palettes, palette] },
      this.syncLocalStorge
    );
  }

  deletePalette(id) {
    const newPalettes = this.state.palettes.filter((e) => e.id !== id && e);
    this.setState({ palettes: newPalettes }, this.syncLocalStorge);
  }

  syncLocalStorge() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  allPaletteNames() {
    const paletteNames = this.state.palettes.map((e) => {
      return e.paletteName;
    });
    return paletteNames;
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/palette/new"
            render={(routeProps) => (
              <NewPalette
                {...routeProps}
                savePalette={this.savePalette}
                allPaletteNames={this.allPaletteNames()}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <Home
                palettes={this.state.palettes}
                deletePalette={this.deletePalette}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => {
              return (
                <Palette
                  colors={generatePalette(
                    this.findSeed(routeProps.match.params.id)
                  )}
                  paletteId={routeProps.match.params.id}
                />
              );
            }}
          />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={(routeProps) => (
              <SinglePalette
                colors={generatePalette(
                  this.findSeed(routeProps.match.params.paletteId)
                )}
                id={routeProps.match.params.colorId}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
