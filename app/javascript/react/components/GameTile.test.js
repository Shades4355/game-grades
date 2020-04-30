import React from 'react'
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'

import GameTile from './GameTile'

Enzyme.configure({ adapter: new Adapter() })

describe("GameTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <GameTile
          name="Game 1"
          description="A game to play!"
          playerNum="2-8"
        />
      </BrowserRouter>)
  })

  it ("should display the game name", () => {
    expect(wrapper.find("h4").text()).toBe("Game 1")
  })

  it ("should display the number of players", () => {
    expect(wrapper.find("p").at(0).text()).toBe("Number of Players: 2-8")
  })
})
