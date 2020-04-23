import React from 'react'
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import NewGameForm from './NewGameForm'

Enzyme.configure({
  adapter: new Adapter()
})

describe("NewGameForm", () => {
  let wrapper, handleFormSubmitMock

  beforeEach(() => {
    handleFormSubmitMock = jest.fn()
    wrapper = mount( 
      <NewGameForm 
        handleFormSubmit = {handleFormSubmitMock}
      /> 
    )
  })

  it("should render an h2 element", () => {
    expect(wrapper.find("h2").text()).toBe("Add a game to our library!")
  })

  it("should render three labels", () => {
    expect(wrapper.find('[htmlFor="name"]')).toBeDefined()
    expect(wrapper.find('[htmlFor="description"]')).toBeDefined()
    expect(wrapper.find('[htmlFor="player_num"]')).toBeDefined()
  })
  
  it("should render three inputs", () => {
    expect(wrapper.find('[name="name"]')).toBeDefined()
    expect(wrapper.find('[name="description"]')).toBeDefined()
    expect(wrapper.find('[name="player_num"]')).toBeDefined()
  })

  it("should render a submit button", () => {
    expect(wrapper.containsMatchingElement(
      <input type="submit" />
    )).toBeTruthy()
  })

  it("should fire handleFormSubmit on form submittal", () => {
    wrapper.find('[type="submit"]').simulate('click')
    expect(handleFormSubmitMock).toHaveBeenCalled
  })

  test.todo("should display error messages with incorrectly filled form")
  test.todo("should retain previous form data with incorrectly filled form")
})