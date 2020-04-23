import React from 'react'
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import GameShowTile from './GameShowTile'


Enzyme.configure({ adapter: new Adapter() })

describe("GameShowTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <GameShowTile
        name="Cribbage"
        description="Cribbage, or crib, is a card game traditionally for two players, but commonly played with three, four or more, that involves playing and grouping cards in combinations which gain points."
        playerNum="2-4"
      />)
  })

  it ("should display the game name", () => {
    expect(wrapper.find("h1").text()).toBe("Cribbage")
  })

  it ("should display the game description", () => {
    expect(wrapper.find("div").at(2).text()).toBe("Description: Cribbage, or crib, is a card game traditionally for two players, but commonly played with three, four or more, that involves playing and grouping cards in combinations which gain points.")
  })

  it ("should display the number of players", () => {
    expect(wrapper.find("div").at(1).text()).toBe("Number of Players: 2-4")
  })
})
