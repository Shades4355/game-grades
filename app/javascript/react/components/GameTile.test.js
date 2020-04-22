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
      <GameTile
        name="Game 1"
        description="Nothing matters"
        playerNum="2-8 who cares"
      />)
  })

  it ("should display the game name", () => {
    expect(wrapper.find("h2").text()).toBe("Game 1")
  })

  it ("should display the game description", () => {
    expect(wrapper.find("p").at(1).text()).toBe("Nothing matters")
  })

  it ("should display the number of players", () => {
    expect(wrapper.find("p").at(0).text()).toBe("Number of Players: 2-8 who cares")
  })
})
